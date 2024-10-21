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

function createGanttChart() {
    const ganttChart = document.getElementById('gantt-chart');
    const tasks = [
        { name: 'Task 1', start: '2025-01-01', end: '2025-02-01' },
        { name: 'Task 2', start: '2025-02-15', end: '2025-03-15' },
        { name: 'Task 3', start: '2025-03-01', end: '2025-04-01' },
        { name: 'Task 4', start: '2025-04-15', end: '2025-05-15' }
    ];

    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.style.width = '100%';
        taskElement.style.height = '20px';
        taskElement.style.backgroundColor = 'blue';
        taskElement.style.marginBottom = '5px';
        taskElement.innerText = `${task.name}: ${task.start} - ${task.end}`;
        ganttChart.appendChild(taskElement);
    });
}

createGanttChart();
