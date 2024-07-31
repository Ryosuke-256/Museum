document.addEventListener('keydown', function(event) {
    if (event.key === 'b' || event.key === 'B') {
        playBAnimation();
    } else if (event.key === 'c' || event.key === 'C') {
        playCAnimation();
    } else if (event.key === 'd' || event.key === 'D') {
        playDAnimation();
    } else if (event.key === 'e' || event.key === 'E') {
        playEAnimation();
    } else if (event.key === 'f' || event.key === 'F') {
        playFAnimation();
    } else if (event.key === 'g' || event.key === 'G') {
        playGAnimation();
    } else if (event.key === 'h' || event.key === 'H') {
        playHAnimation();
    } else if (event.key === 'l' || event.key === 'L') {
        playLAnimation();
    }
});

// Bキーのアニメーション
function playBAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-b';
    document.body.appendChild(animationElement);
    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 1000); // アニメーションの持続時間
}

// Cキーのアニメーション
function playCAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-c';
    document.body.appendChild(animationElement);
    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 1000); // アニメーションの持続時間
}

// Dキーのアニメーション
function playDAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-d';
    document.body.appendChild(animationElement);
    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 1000); // アニメーションの持続時間
}

// Eキーのアニメーション
function playEAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-e';
    animationElement.style.left = '0'; // 開始位置を左端に設定
    document.body.appendChild(animationElement);
    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 2000); // アニメーションの持続時間
}

// Fキーのアニメーション
function playFAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-f';
    animationElement.style.left = '100%'; // 開始位置を右端に設定
    document.body.appendChild(animationElement);
    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 2000); // アニメーションの持続時間
}

// Gキーのアニメーション
function playGAnimation() {
    var ball = document.createElement('div');
    ball.className = 'animation-g';

    // ランダムな位置に設定
    var randomX = Math.random() * (window.innerWidth - 50); // 50はボールの幅
    var randomY = Math.random() * (window.innerHeight - 50); // 50はボールの高さ
    ball.style.left = randomX + 'px';
    ball.style.top = randomY + 'px';

    document.body.appendChild(ball);

    var interval = 100; // 残像を生成する間隔（ミリ秒）
    var duration = 2000; // アニメーションの持続時間（ミリ秒）
    var steps = duration / interval;
    var currentStep = 0;

    var trailInterval = setInterval(function() {
        if (currentStep >= steps) {
            clearInterval(trailInterval);
            document.body.removeChild(ball);
            return;
        }

        var ballRect = ball.getBoundingClientRect();
        var trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = ballRect.left + 'px';
        trail.style.top = ballRect.top + 'px';
        document.body.appendChild(trail);

        currentStep++;
    }, interval);

    // アニメーション終了後に残像を削除
    setTimeout(function() {
        var trails = document.querySelectorAll('.trail');
        trails.forEach(function(trail) {
            document.body.removeChild(trail);
        });
    }, duration + 500); 削除
}


// Hキーのアニメーション
function playHAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-h';

    // ランダムな位置に配置
    var randomX = Math.random() * (window.innerWidth - 50);
    var randomY = Math.random() * (window.innerHeight - 50);
    var randomColor = getRandomColor();
    animationElement.style.position = 'absolute';
    animationElement.style.left = randomX + 'px';
    animationElement.style.top = randomY + 'px';
    animationElement.style.backgroundColor = randomColor;

    document.body.appendChild(animationElement);

    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 1000); // アニメーションの持続時間
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
