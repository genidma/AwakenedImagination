console.log("Hello, World!");

function showAlert() {
    alert("Hello, World!");
}

function createTinyHouse() {
    const tinyHouse = document.getElementById('tiny-house');
    const houseWidth = 2 * 96; // 2 inches in pixels
    const houseHeight = 2 * 96; // 2 inches in pixels
    const roofHeight = houseHeight / 2;
    const bodyHeight = houseHeight / 2;

    // Create roof
    const roof = document.createElement('div');
    roof.style.width = `${houseWidth}px`;
    roof.style.height = `${roofHeight}px`;
    roof.style.backgroundColor = 'brown';
    roof.style.position = 'relative';

    const roofTriangle = document.createElement('div');
    roofTriangle.style.width = '50%';
    roofTriangle.style.height = '100%';
    roofTriangle.style.backgroundColor = 'darkred';
    roofTriangle.style.position = 'absolute';
    roofTriangle.style.top = '0';
    roofTriangle.style.left = '25%';

    roof.appendChild(roofTriangle);
    tinyHouse.appendChild(roof);

    // Create body
    const body = document.createElement('div');
    body.style.width = `${houseWidth}px`;
    body.style.height = `${bodyHeight}px`;
    body.style.backgroundColor = 'lightgray';
    body.style.position = 'relative';

    const windowLeft = document.createElement('div');
    windowLeft.style.width = '20%';
    windowLeft.style.height = '50%';
    windowLeft.style.backgroundColor = 'white';
    windowLeft.style.position = 'absolute';
    windowLeft.style.bottom = '0';
    windowLeft.style.left = '10%';

    const windowRight = document.createElement('div');
    windowRight.style.width = '20%';
    windowRight.style.height = '50%';
    windowRight.style.backgroundColor = 'white';
    windowRight.style.position = 'absolute';
    windowRight.style.bottom = '0';
    windowRight.style.right = '10%';

    body.appendChild(windowLeft);
    body.appendChild(windowRight);
    tinyHouse.appendChild(body);
}

createTinyHouse();

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

const tasks = {
    data: [
        {id: 1, text: "Task 1", start_date: "01-01-2025", duration: 15},
        {id: 2, text: "Task 2", start_date: "15-01-2025", duration: 17},
        {id: 3, text: "Task 3", start_date: "15-02-2025", duration: 28},
        {id: 4, text: "Task 4", start_date: "01-04-2025", duration: 30}
    ]
};

gantt.init("gantt_here");
gantt.parse(tasks);

function promptPassword() {
    const password = prompt("Enter password to modify Gantt chart:");
    if (password === "wintercabinjsh") {
        alert("Access granted. You can now modify the Gantt chart.");
    } else {
        alert("Access denied. Incorrect password.");
    }
}

document.getElementById("gantt_here").addEventListener("dblclick", promptPassword);

function createTinyPool() {
    const tinyPool = document.getElementById('tiny-pool');
    tinyPool.style.position = 'absolute';
    tinyPool.style.top = '4.5in';
    tinyPool.style.right = '0.5in';
    tinyPool.style.width = '1in';
    tinyPool.style.height = '0.5in';
    tinyPool.style.backgroundColor = 'blue';
    tinyPool.style.borderRadius = '50%';
}

createTinyPool();
