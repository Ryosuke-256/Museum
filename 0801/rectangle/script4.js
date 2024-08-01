document.addEventListener("DOMContentLoaded", () => {
    const rectangles = [
        { speed: 7 },
        { speed: 9 },
        { speed: 11 },
        { speed: 13 },
        { speed: 11 },
        { speed: 9 },
        { speed: 7 }
    ];
    const container = document.querySelector('.effectcontainer');
    const margin = 50; 
    const horizontalMargin = 50; 

    rectangles.forEach((rect, index) => {
        const element = document.createElement('div');
        element.className = 'rectangle';
        element.id = `rect${index + 1}`;
        container.appendChild(element);
    });

    function updatePositions() {
        const windowWidth = window.innerWidth;
        const totalHorizontalMargin = (rectangles.length + 1) * horizontalMargin;
        const availableWidth = windowWidth - totalHorizontalMargin;
        const rectWidth = availableWidth / rectangles.length;

        rectangles.forEach((rect, index) => {
            const element = document.getElementById(`rect${index + 1}`);
            if (element) {
                element.style.width = `${rectWidth}px`;
                element.style.left = `${horizontalMargin + index * (rectWidth + horizontalMargin)}px`;
            }
        });
    }

    window.addEventListener('resize', updatePositions);
    updatePositions();

    let isAnimating = false;
    let completedAnimations = 0;

    document.addEventListener('keydown', (event) => {
        if (event.key === 'a' || event.key === 'A') {
            if (!isAnimating) {
                startAnimation();
            }
        }
    });

    function startAnimation() {
        isAnimating = true;
        completedAnimations = 0;
        const randomColor = getRandomColor();
        const availableHeight = window.innerHeight - 2 * margin;
        const directions = getRandomDirections(rectangles.length);

        rectangles.forEach((rect, index) => {
            let element = document.getElementById(`rect${index + 1}`);
            if (element) {
                let height = 0;
                element.style.opacity = 1;
                element.style.backgroundColor = randomColor;
                element.style.transition = 'none';

                function animate() {
                    if (height < availableHeight) {
                        height += rect.speed;
                        if (directions[index] === 'up') {
                            element.style.height = height + 'px';
                            element.style.bottom = `${margin}px`;
                            element.style.top = 'auto';
                        } else {
                            element.style.height = height + 'px';
                            element.style.top = `${margin}px`;
                            element.style.bottom = 'auto';
                        }
                        requestAnimationFrame(animate);
                    } else {
                        completedAnimations++;
                        checkAllCompleted();
                    }
                }
                animate();
            }
        });
    }

    function checkAllCompleted() {
        if (completedAnimations === rectangles.length) {
            setTimeout(() => {
                rectangles.forEach((rect, index) => {
                    let element = document.getElementById(`rect${index + 1}`);
                    if (element) {
                        element.style.opacity = 0;
                        element.style.transition = 'opacity 1s ease';
                    }
                });
                isAnimating = false;
            }, 500);
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function getRandomDirections(length) {
        const directions = Array(length).fill('down');
        for (let i = 0; i < length; i++) {
            directions[i] = Math.random() > 0.5 ? 'up' : 'down';
        }
        return directions;
    }
});
