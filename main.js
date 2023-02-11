// Navigation

const hamburgerBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-link');
const home = document.querySelector('.home');

hamburgerBtn.addEventListener('click', function() {
    navLinks.classList.toggle('nav-links-active');
    home.classList.toggle('home-fixed');
})

navLink.forEach(link => link.addEventListener('click', function() {
    if (navLinks.classList.contains('nav-links-active')) {
        navLinks.classList.remove('nav-links-active');
        home.classList.toggle('home-fixed');
    }
}))

// Our Sweets Section

const sweets = [
    {
        pic: "images/cake1.jpg",
        label: "Cakes"
    },
    {
        pic: "images/cookies1.jpg",
        label: "Cookies"
    },
    {
        pic: "images/cupcake2.jpg",
        label: "Cupcakes"
    },
    {
        pic: "images/donuts3.jpg",
        label: "Donuts"
    }
]

const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');
const sweetLabel = document.querySelector('.sweet-label');
const sweetPic = document.querySelector('.sweet-pic');
let sweetIndex = 0;

window.addEventListener('DOMContentLoaded', function() {
    showSweet(sweets[sweetIndex]);
})

nextButton.addEventListener('click', nextSweet);
prevButton.addEventListener('click', prevSweet);

function showSweet() {
    sweetLabel.textContent = sweets[sweetIndex].label;
    sweetPic.src = sweets[sweetIndex].pic;
}

function nextSweet() {
    sweetIndex++;
    if (sweetIndex > sweets.length - 1){
        sweetIndex = 0;
        showSweet();
    } else {
        showSweet(); 
    }
}

function prevSweet() {
    sweetIndex--;
    if (sweetIndex < 0) {
        sweetIndex = sweets.length - 1;
        showSweet();
    } else {
        showSweet();
    }
}










