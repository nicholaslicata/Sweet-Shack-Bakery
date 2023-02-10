// Navigation

const hamburgerBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', function() {
    navLinks.classList.toggle('nav-links-active');
})

navLink.forEach(link => link.addEventListener('click', function() {
    if (navLinks.classList.contains('nav-links-active')) {
        navLinks.classList.remove('nav-links-active');
    }
}))









