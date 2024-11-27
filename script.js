let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

document.querySelectorAll('.dropdown h3').forEach(header => {
    header.addEventListener('click', () => {
        const dropdown = header.parentElement;
        const content = dropdown.querySelector('.dropdown-content');
        const icon = dropdown.querySelector('.toggle-icon');

        // Växla synlighet
        if (content.style.display === 'block') {
            content.style.display = 'none';
            icon.textContent = '+';
        } else {
            content.style.display = 'block';
            icon.textContent = '-';
        }
    });
});