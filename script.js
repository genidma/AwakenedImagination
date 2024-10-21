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

function playChopin() {
    const audio = new Audio('chopin.mp3');
    audio.controls = true;
    document.body.appendChild(audio);
}

playChopin();

const ctx = document.getElementById('ganttChart').getContext('2d');
const data = {
    labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
    datasets: [{
        label: 'Project Timeline',
        data: [ 
            {x: '2025-01-01', y: 'Task 1', x2: '2025-01-15'}, 
            {x: '2025-01-15', y: 'Task 2', x2: '2025-02-01'}, 
            {x: '2025-02-15', y: 'Task 3', x2: '2025-03-15'}, 
            {x: '2025-04-01', y: 'Task 4', x2: '2025-05-01'} 
        ],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
};

const options = {
    scales: {
        x: {
            type: 'time',
            time: {
                unit: 'day',
                tooltipFormat: 'MM/DD/YYYY'
            },
            title: {
                display: true,
                text: 'Date'
            }
        },
        y: {
            type: 'category',
            title: {
                display: true,
                text: 'Tasks'
            }
        }
    }
};

new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
