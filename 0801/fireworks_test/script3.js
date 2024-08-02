const app = new PIXI.Application({
    width: window.innerWidth, // ウィンドウの幅
    height: window.innerHeight, // ウィンドウの高さ
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

    particle.life = 100 + Math.random() * 100;
    particle.alpha = 1;
    particle.scaleSpeed = 0.99; // パーティクルの縮小速度
    return particle;
}

function launchFirework() {
    const colors = [0xFF0000, 0xFFFF00, 0xFF00FF, 0x00FFFF, 0x00FF00];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const particles = [];
    const x = app.renderer.width / 2 + Math.random() * 100 - 50;
    const y = app.renderer.height / 2;
    const speed = 2 + Math.random() * 2;
    const numberOfParticles = 50 + Math.random() * 50;

    for (let i = 0; i < numberOfParticles; i++) {
        const particle = createParticle(x, y, color, speed);
        particles.push(particle);
        app.stage.addChild(particle);
    }

    app.ticker.add(() => {
        particles.forEach((particle, index) => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += 0.02; // 重力
            particle.alpha *= 0.99; // 徐々に透明になる
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

// 一定時間ごとに花火を発射
setInterval(launchFirework, 2000);

// ウィンドウサイズ変更時にキャンパスサイズを更新
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
});
