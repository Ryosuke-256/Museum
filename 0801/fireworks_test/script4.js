const app = new PIXI.Application({
    width: window.innerWidth, 
    height: window.innerHeight, 
    backgroundColor: 0x000000,
});
document.body.appendChild(app.view);

function createParticle(x, y, color, speed) {
    const particle = new PIXI.Graphics();
    particle.beginFill(color);
    particle.drawCircle(0, 0, 2);
    particle.endFill();
    particle.x = x;
    particle.y = y;

    const angle = Math.random() * Math.PI * 2;
    particle.vx = Math.cos(angle) * speed;
    particle.vy = Math.sin(angle) * speed;

    particle.life = 200 + Math.random() * 100; 
    particle.alpha = 1;
    particle.scaleSpeed = 0.99; 
    return particle;
}

function launchFirework() {
    const colors = [0xFF0000, 0xFFFF00, 0xFF00FF, 0x00FFFF, 0x00FF00];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particles = [];
    const centerX = app.renderer.width / 2; 
    const centerY = app.renderer.height; 
    const speed = 3 + Math.random() * 2; 
    const numberOfParticles = 50 + Math.random() * 50;
    let isExploded = false; 

    const rocket = new PIXI.Graphics();
    rocket.beginFill(color);
    rocket.drawCircle(0, 0, 5); 
    rocket.endFill();
    rocket.x = centerX;
    rocket.y = centerY;
    app.stage.addChild(rocket);

    app.ticker.add(() => {
        if (!isExploded) {
            rocket.y -= speed; 
            if (rocket.y < centerY - 100) { 
                
                isExploded = true;
                app.stage.removeChild(rocket);
                for (let i = 0; i < numberOfParticles; i++) {
                    const particle = createParticle(centerX, centerY - 100, color, speed);
                    particles.push(particle);
                    app.stage.addChild(particle);
                }
            }
        }

        particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.02; 
            particle.alpha *= 0.99; 
            particle.scale.x *= particle.scaleSpeed;
            particle.scale.y *= particle.scaleSpeed;
            particle.life--;

            if (particle.life <= 0 || particle.alpha <= 0) {
                app.stage.removeChild(particle);
                particles.splice(index, 1);
            }
        });
    });
}

setInterval(launchFirework, 2000); 

window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
});

