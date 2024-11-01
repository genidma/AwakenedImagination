console.log("Hello, World!");

function showAlert() {
    alert("Hello, World!");
}

// Functionality for the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const target = event.target.getAttribute("href");
            window.location.href = target;
        });
    });
});
