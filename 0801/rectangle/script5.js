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
    const verticalMargin = 50; 

    rectangles.forEach((rect, index) => {
        const element = document.createElement('div');
        element.className = 'rectangle';
        element.id = `rect${index + 1}`;
        container.appendChild(element);
    });

    function updatePositions() {
        const windowHeight = window.innerHeight;
        const totalVerticalMargin = (rectangles.length + 1) * verticalMargin;
        const availableHeight = windowHeight - totalVerticalMargin;
        const rectHeight = availableHeight / rectangles.length;

        rectangles.forEach((rect, index) => {
            const element = document.getElementById(`rect${index + 1}`);
            if (element) {
                element.style.height = `${rectHeight}px`;
                element.style.top = `${verticalMargin + index * (rectHeight + verticalMargin)}px`;
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
        const availableWidth = window.innerWidth - 2 * margin;
        const directions = getRandomDirections(rectangles.length);

        rectangles.forEach((rect, index) => {
            let element = document.getElementById(`rect${index + 1}`);
            if (element) {
                let width = 0;
                element.style.opacity = 1;
                element.style.backgroundColor = randomColor;
                element.style.transition = 'none';

                function animate() {
                    if (width < availableWidth) {
                        width += rect.speed;
                        if (directions[index] === 'left') {
                            element.style.width = width + 'px';
                            element.style.left = `${margin}px`;
                            element.style.right = 'auto';
                        } else {
                            element.style.width = width + 'px';
                            element.style.right = `${margin}px`;
                            element.style.left = 'auto';
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
        const directions = Array(length).fill('left');
        for (let i = 0; i < length; i++) {
            directions[i] = Math.random() > 0.5 ? 'left' : 'right';
        }
        return directions;
    }
});
