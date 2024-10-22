console.log("Hello, World!");

function showAlert() {
    alert("Hello, World!");
}

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
