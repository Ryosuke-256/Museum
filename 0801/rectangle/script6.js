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
    const spaceBetween = 50; 
    let isAnimating = false;
    let completedAnimations = 0;
    let isHorizontal = true; 

    rectangles.forEach((rect, index) => {
        const element = document.createElement('div');
        element.className = 'rectangle';
        element.id = `rect${index + 1}`;
        container.appendChild(element);
    });

    function updatePositions() {
        if (isHorizontal) {
            const windowWidth = window.innerWidth;
            const totalHorizontalMargin = (rectangles.length - 1) * spaceBetween;
            const availableWidth = windowWidth - 2 * margin - totalHorizontalMargin;
            const rectWidth = availableWidth / rectangles.length;

            rectangles.forEach((rect, index) => {
                const element = document.getElementById(`rect${index + 1}`);
                if (element) {
                    element.style.width = `${rectWidth}px`;
                    element.style.height = 'auto';
                    element.style.left = `${margin + index * (rectWidth + spaceBetween)}px`;
                    element.style.top = 'auto';
                }
            });
        } else {
            const windowHeight = window.innerHeight;
            const totalVerticalMargin = (rectangles.length - 1) * spaceBetween;
            const availableHeight = windowHeight - 2 * margin - totalVerticalMargin;
            const rectHeight = availableHeight / rectangles.length;

            rectangles.forEach((rect, index) => {
                const element = document.getElementById(`rect${index + 1}`);
                if (element) {
                    element.style.height = `${rectHeight}px`;
                    element.style.width = 'auto';
                    element.style.top = `${margin + index * (rectHeight + spaceBetween)}px`;
                    element.style.left = 'auto';
                }
            });
        }
    }

    window.addEventListener('resize', updatePositions);
    updatePositions();

    document.addEventListener('keydown', (event) => {
        if (event.key === 'a' || event.key === 'A') {
            if (!isAnimating) {
                startAnimation();
                isHorizontal = !isHorizontal; 
            }
        }
    });

    function startAnimation() {
        isAnimating = true;
        completedAnimations = 0;
        const randomColor = getRandomColor();
        const availableSpace = isHorizontal ? window.innerHeight - 2 * margin : window.innerWidth - 2 * margin;
        const directions = getRandomDirections(rectangles.length);

        rectangles.forEach((rect, index) => {
            let element = document.getElementById(`rect${index + 1}`);
            if (element) {
                let size = 0;
                element.style.opacity = 1;
                element.style.backgroundColor = randomColor;
                element.style.transition = 'none';

                function animate() {
                    if (size < availableSpace) {
                        size += rect.speed;
                        if (isHorizontal) {
                            if (directions[index] === 'up') {
                                element.style.height = size + 'px';
                                element.style.bottom = `${margin}px`;
                                element.style.top = 'auto';
                            } else {
                                element.style.height = size + 'px';
                                element.style.top = `${margin}px`;
                                element.style.bottom = 'auto';
                            }
                        } else {
                            if (directions[index] === 'left') {
                                element.style.width = size + 'px';
                                element.style.left = `${margin}px`;
                                element.style.right = 'auto';
                            } else {
                                element.style.width = size + 'px';
                                element.style.right = `${margin}px`;
                                element.style.left = 'auto';
                            }
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
        const directions = Array(length).fill(isHorizontal ? 'down' : 'left');
        for (let i = 0; i < length; i++) {
            directions[i] = Math.random() > 0.5 ? (isHorizontal ? 'up' : 'right') : (isHorizontal ? 'down' : 'left');
        }
        return directions;
    }
});


