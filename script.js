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

function createBrickWall() {
    const wall = document.getElementById('brick-wall');
    wall.style.position = 'absolute';
    wall.style.top = '5in';
    wall.style.right = '0.5in';
    wall.style.width = '2in';
    wall.style.height = '2in';
    wall.style.backgroundColor = '#8B4513';
    wall.style.border = '1px solid #5A2D0C';
    wall.style.zIndex = '1'; // Ensure the wall is behind the sun
}

createBrickWall();

function create3DSolarSystem() {
    const canvas = document.getElementById('solarSystemCanvas');
    const ctx = canvas.getContext('2d');

    const sun = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        radius: 50,
        color: 'yellow'
    };

    const planets = [
        { radius: 10, distance: 100, speed: 0.02, angle: 0, color: 'gray' },
        { radius: 15, distance: 150, speed: 0.015, angle: 0, color: 'orange' },
        { radius: 20, distance: 200, speed: 0.01, angle: 0, color: 'blue' },
        { radius: 25, distance: 250, speed: 0.005, angle: 0, color: 'red' }
    ];

    function drawSun() {
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, sun.radius, 0, Math.PI * 2);
        ctx.fillStyle = sun.color;
        ctx.fill();
        ctx.closePath();
    }

    function drawPlanets() {
        planets.forEach(planet => {
            planet.angle += planet.speed;
            const x = sun.x + planet.distance * Math.cos(planet.angle);
            const y = sun.y + planet.distance * Math.sin(planet.angle);

            ctx.beginPath();
            ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
            ctx.fillStyle = planet.color;
            ctx.fill();
            ctx.closePath();
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSun();
        drawPlanets();
        requestAnimationFrame(animate);
    }

    animate();
}

create3DSolarSystem();

function moveSolarSystemUp() {
    const canvas = document.getElementById('solarSystemCanvas');
    canvas.style.top = 'calc(100px - 3.5in)';
}

moveSolarSystemUp();

document.querySelector('nav select').addEventListener('change', function() {
    window.location.href = this.value;
});
