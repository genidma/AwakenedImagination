console.log("Hello, World!");

function showAlert() {
    alert("Hello, World!");
}

function createBrickWall() {
    const brickWall = document.getElementById('brick-wall');
    const brickWidth = 20;
    const brickHeight = 10;
    const wallWidth = brickWall.clientWidth;
    const wallHeight = brickWall.clientHeight;
    const rows = Math.floor(wallHeight / brickHeight);
    const cols = Math.floor(wallWidth / brickWidth);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const brick = document.createElement('div');
            brick.style.width = `${brickWidth}px`;
            brick.style.height = `${brickHeight}px`;
            brick.style.backgroundColor = 'brown';
            brick.style.border = '1px solid black';
            brick.style.position = 'absolute';
            brick.style.top = `${row * brickHeight}px`;
            brick.style.left = `${col * brickWidth}px`;
            brickWall.appendChild(brick);
        }
    }
}

createBrickWall();

function createSun() {
    const sun = document.getElementById('sun');
    sun.style.position = 'absolute';
    sun.style.top = '3.5in';
    sun.style.right = '0.5in';
    sun.style.width = '1in';
    sun.style.height = '1in';
    sun.style.backgroundColor = 'yellow';
    sun.style.borderRadius = '50%';
    sun.style.boxShadow = '0 0 20px yellow';
}

createSun();

function makeSunWobble() {
    const sun = document.getElementById('sun');
    let angle = 0;
    setInterval(() => {
        angle += 0.1;
        sun.style.transform = `translateY(${Math.sin(angle) * 5}px)`;
    }, 100);
}

makeSunWobble();

function createBirds() {
    const birds = document.getElementById('birds');
    const birdCount = 5;
    for (let i = 0; i < birdCount; i++) {
        const bird = document.createElement('div');
        bird.style.width = '20px';
        bird.style.height = '20px';
        bird.style.backgroundColor = 'black';
        bird.style.borderRadius = '50%';
        bird.style.position = 'absolute';
        bird.style.top = `${Math.random() * 50}px`;
        bird.style.left = `${i * 30}px`;
        birds.appendChild(bird);
    }
}

createBirds();

function makeBirdsFly() {
    const birds = document.getElementById('birds').children;
    let position = 0;
    setInterval(() => {
        position += 1;
        for (let bird of birds) {
            bird.style.left = `${parseInt(bird.style.left) - 1}px`;
        }
        if (position > window.innerWidth) {
            position = 0;
            for (let bird of birds) {
                bird.style.left = `${Math.random() * 50}px`;
            }
        }
    }, 50);
}

makeBirdsFly();
