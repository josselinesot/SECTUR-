

document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.body;
    const modeToggle = document.querySelector('.mode-toggle');
    const sidebar = document.querySelector('nav');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const currentMode = localStorage.getItem('theme');

    if (currentMode) {
        body.classList.add(currentMode);
    }

    modeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            localStorage.setItem('theme', '');
        } else {
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('close');
    });
});

// JavaScript para manejar la apertura y cierre del modal de eventos
document.addEventListener('DOMContentLoaded', function () {
    const eventModal = document.getElementById("eventModal");
    const eventBtn = document.querySelector(".dropbtn");
    const closeEventModal = document.querySelector("#eventModal .close");

    eventBtn.onclick = function (event) {
        event.preventDefault();
        if (window.innerWidth <= 1280) {
            eventModal.style.display = "block";
        } else {
            // Fallback to normal dropdown
            const dropdownContent = eventBtn.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        }
    };

    closeEventModal.onclick = function () {
        eventModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == eventModal) {
            eventModal.style.display = "none";
        }
    };
});
