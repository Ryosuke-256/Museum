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
    } else if (event.key === 'i' || event.key === 'I') {
        playIAnimation();
    } else if (event.key === 'j' || event.key === 'J') {
        playJAnimation();
    } else if (event.key === 'k' || event.key === 'K') {
        playClockHandAnimation(); 
    } else if (event.key === 'l' || event.key === 'L') {
        playLAnimation();
    } else if (event.key === 'm' || event.key === 'M') {
        playMAnimation();
    } else if (event.key === 'n' || event.key === 'N') {
        playNAnimation();
    } else if (event.key === 'o' || event.key === 'O') {
        playOAnimation();
    } else if (event.key === 'p' || event.key === 'P') {
        playPAnimation();
    } else if (event.key === 'q' || event.key === 'Q') {
        playQAnimation();
    }
});

function playBAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-b';
    document.body.appendChild(animationElement);

    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 1000); // アニメーションの持続時間
}

function playCAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-c';
    document.body.appendChild(animationElement);

    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 1000); // アニメーションの持続時間
}

function playDAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-d';
    document.body.appendChild(animationElement);

    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 1000); // アニメーションの持続時間
}

function playEAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-e';
    document.body.appendChild(animationElement);

    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 2000); // アニメーションの持続時間
}

function playFAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-f';
    document.body.appendChild(animationElement);

    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 2000); // アニメーションの持続時間
}

function playGAnimation() {
    var ball = document.createElement('div');
    ball.className = 'animation-g';
    ball.style.position = 'absolute';
    ball.style.left = '0';
    ball.style.top = '50%';
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

        // 現在のボールの位置を取得
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
    }, duration + 500); // アニメーション持続時間に若干の余裕を持たせて削除
}

function playHAnimation() {
    var animationElement = document.createElement('div');
    animationElement.className = 'animation-h';
    document.body.appendChild(animationElement);

    setTimeout(function() {
        document.body.removeChild(animationElement);
    }, 1000); // アニメーションの持続時間
}

function playIAnimation() {
    for (var i = 0; i < 5; i++) {
        var animationElement = document.createElement('div');
        animationElement.className = 'animation-h'; // 同じクラス名を使用
        var randomX = Math.random() * (window.innerWidth - 50);
        var randomY = Math.random() * (window.innerHeight - 50);
        var randomColor = getRandomColor();
        animationElement.style.position = 'absolute';
        animationElement.style.left = randomX + 'px';
        animationElement.style.top = randomY + 'px';
        animationElement.style.backgroundColor = randomColor;

        document.body.appendChild(animationElement);

        (function(element) {
            setTimeout(function() {
                document.body.removeChild(element);
            }, 2000); // アニメーションの持続時間
        })(animationElement);
    }
}


function playJAnimation() {
    var numberOfStars = 20; // 表示する星の数
    var radius = 300; // 円の半径
    var startAngle = Math.random() * 360; // 開始角度
    var duration = 30; // 星が順次表示される間隔（ミリ秒）
    var totalDuration = (numberOfStars + 1) * duration;

    // 星を一つずつ表示する
    for (let i = 0; i < numberOfStars; i++) {
        setTimeout(function() {
            var angle = startAngle + (360 / numberOfStars) * i;
            var radian = (angle * Math.PI) / 180;
            var x = radius * Math.cos(radian);
            var y = radius * Math.sin(radian);

            var star = document.createElement('div');
            star.className = 'star appear-animation';
            star.style.left = `calc(50% + ${x}px)`;
            star.style.top = `calc(50% - ${y}px)`;

            document.body.appendChild(star);
        }, i * duration);
    }

    // 円が完成した後、星を一つずつ消す
    setTimeout(function() {
        var stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            setTimeout(function() {
                star.classList.remove('appear-animation');
                star.classList.add('disappear-animation');
                setTimeout(function() {
                    star.remove(); // 星を削除
                }, 500); // 消えるアニメーションの時間
            }, index * duration);
        });
    }, totalDuration);
}

function playLAnimation() {
    var numberOfStars = 5; // 表示する星の数

    for (let i = 0; i < numberOfStars; i++) {
        var animationElement = document.createElement('div');
        animationElement.className = 'animation-l';

        // ランダムな位置を計算
        var randomX = Math.random() * (window.innerWidth - 100); // ウィンドウ幅から要素の幅を引く
        var randomY = Math.random() * (window.innerHeight - 100); // ウィンドウ高さから要素の高さを引く

        // スタイルを設定
        animationElement.style.position = 'absolute';
        animationElement.style.left = randomX + 'px';
        animationElement.style.top = randomY + 'px';

        document.body.appendChild(animationElement);

        // 一定時間後にアニメーション要素を削除
        setTimeout(function() {
            document.body.removeChild(animationElement);
        }, 1500); // アニメーションの持続時間
    }
}
function playMAnimation() {
    // 三角形を含むコンテナの作成
    var container = document.createElement('div');
    container.className = 'triangle-container';
    document.body.appendChild(container);

    // 三角形の数
    var numberOfTriangles = 20;
    var radius = 100; // 円の半径

    // 三角形の配置
    for (var i = 0; i < numberOfTriangles; i++) {
        var angle = (360 / numberOfTriangles) * i;
        var radian = (angle * Math.PI) / 180;
        var x = radius * Math.cos(radian) - 5; // 5は三角形の中心を調整
        var y = radius * Math.sin(radian) - 10; // 10は三角形の高さを考慮

        var triangle = document.createElement('div');
        triangle.className = 'triangle';
        triangle.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
        container.appendChild(triangle);
    }

    // アニメーション終了後に要素を削除
    setTimeout(function() {
        container.remove();
    }, 3000); // アニメーション時間と一致させる
}

function playNAnimation() {
    var numberOfPoints = 20; // 点の数
    var radius = 200; // 円の半径
    var startAngle = Math.random() * 360; // 開始角度 0度が右（3時の位置）
    var duration = 30; // 点が順次表示される間隔（ミリ秒）
    var totalDuration = (numberOfPoints + 1) * duration;

    // 点を一つずつ表示する
    for (let i = 0; i < numberOfPoints; i++) {
        setTimeout(function() {
            var angle = startAngle + (360 / numberOfPoints) * i;
            var radian = (angle * Math.PI) / 180;
            var x = radius * Math.cos(radian);
            var y = radius * Math.sin(radian);

            var point = document.createElement('div');
            point.className = 'point appear-animation';
            point.style.left = `calc(50% + ${x}px)`;
            point.style.top = `calc(50% - ${y}px)`;

            document.body.appendChild(point);
        }, i * duration);
    }

    // 円が完成した後、点を一つずつ消す
    setTimeout(function() {
        var points = document.querySelectorAll('.point');
        points.forEach((point, index) => {
            setTimeout(function() {
                point.classList.remove('appear-animation');
                point.classList.add('disappear-animation');
                setTimeout(function() {
                    point.remove(); // 点を削除
                }, 500); // 消えるアニメーションの時間
            }, index * duration);
        });
    }, totalDuration);
}


function playOAnimation() {
    var numberOfPetals = 30; // 数
    var duration = 100; // 生成される間隔（ミリ秒）

    for (let i = 0; i < numberOfPetals; i++) {
        setTimeout(function() {
            createPetal();
        }, i * duration);
    }
}

function createPetal() {
    var petal = document.createElement('div');
    petal.className = 'petals';

    // 花びらの初期位置をランダムに設定
    var startX = Math.random() * window.innerWidth;
    petal.style.left = startX + 'px';

    // 花びらの初期サイズをランダムに設定
    var size = Math.random() * 20 + 10; // 10px〜30pxの範囲
    petal.style.width = size + 'px';
    petal.style.height = size + 'px';

    // アニメーションのランダム化
    var duration = Math.random() * 3 + 2; // 2秒〜5秒の範囲
    petal.style.animationDuration = duration + 's';

    document.body.appendChild(petal);

    // アニメーション終了後に花びらを削除
    setTimeout(function() {
        petal.remove();
    }, duration * 1000); // アニメーションの持続時間と一致させる
}


function playPAnimation() {
    var numberOfDiamonds = 30; // ひし形の数
    var duration = 200; // 新しいひし形が生成される間隔（ミリ秒）

    // ひし形を生成する関数
    function createDiamond() {
        var diamond = document.createElement('div');
        diamond.className = 'diamond';

        // ひし形の初期位置をランダムに設定
        var startX = Math.random() * window.innerWidth;
        diamond.style.left = startX + 'px';

        // ひし形のサイズをランダムに設定
        var size = Math.random() * 40 + 10; // 10px〜50pxの範囲
        diamond.style.width = size + 'px';
        diamond.style.height = size + 'px';

        document.body.appendChild(diamond);

        // アニメーション終了後にひし形を削除
        setTimeout(function() {
            diamond.remove();
        }, 3000); // アニメーションの持続時間と一致させる
    }

    // ひし形を生成するタイミングを設定
    for (let i = 0; i < numberOfDiamonds; i++) {
        setTimeout(createDiamond, i * duration);
    }
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
