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
