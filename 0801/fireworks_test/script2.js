const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
});
document.body.appendChild(app.view);

function createParticle(x, y, color) {
    const particle = new PIXI.Graphics();
    particle.beginFill(color);
    particle.drawCircle(0, 0, 2);
    particle.endFill();
    particle.x = x;
    particle.y = y;
    particle.vx = Math.random() * 10 - 5; 
    particle.vy = Math.random() * 10 - 5; 
    particle.life = 60 + Math.random() * 30; 
    return particle;
}

function launchFirework() {
    const colors = [0xFF0000, 0x00FF00, 0x0000FF, 0xFFFF00, 0xFF00FF];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particles = [];
    const x = app.renderer.width / 2;
    const y = app.renderer.height;
    const numberOfParticles = 100;

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = createParticle(x, y, color);
        particles.push(particle);
        app.stage.addChild(particle);
    }

    app.ticker.add(() => {
        particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.2; 
            particle.life--;

            if (particle.life <= 0) {
                app.stage.removeChild(particle);
                particles.splice(index, 1);
            }
        });
    });
}


setInterval(launchFirework, 1000);
