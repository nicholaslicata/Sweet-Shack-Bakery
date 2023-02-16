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
        label: "Cakes",
        alt: "Chocolate covered cake"
    },
    {
        pic: "images/cookies1.jpg",
        label: "Cookies",
        alt: "Chocolate chip cookies"
    },
    {
        pic: "images/cupcake2.jpg",
        label: "Cupcakes",
        alt: "Chocolate cupcakes"
    },
    {
        pic: "images/donuts3.jpg",
        label: "Donuts",
        alt: "Variety of donuts"
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
    sweetPic.setAttribute('alt', sweets[sweetIndex].alt);
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

// Menu section

const menu = [
    {
        item: '- Cakes -',
        price: '$18.00',
        flavors: ['Carrot Cake', 'Devils Food Cake', 'Lemon Cake', 'Red Velvet Cake', 'Strawberry Short Cake'],
    },
    {
        item: '- Cookies -',
        price: '$3.50',
        flavors: ['Chocolate Chip', 'Oatmeal', 'Peanut Butter', 'Snickerdoole', 'Sugar'],
    },
    {
        item: '- Cupcakes -',
        price: '$5.00',
        flavors: ['Carrot', 'Chocolate', 'Cookies and Cream', 'Red Velvet', 'Vanilla'],
    },
    {
        item: '- Donuts- ',
        price: '$5.00',
        flavors: ['Boston Creme', 'Chocolate Frosted', 'Glazed', 'Jelly', 'Strawberry Frosted']
    },
]

const menuContainer = document.querySelector('.menu-container');

window.addEventListener('DOMContentLoaded', function() {
    menu.map(menuItem => showMenu(menuItem));
})

function showMenu(menuItems) {
    const menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');
    menuContainer.appendChild(menuItemContainer);

    const menuItem = document.createElement('h2');
    menuItem.textContent = menuItems.item;
    menuItem.classList.add('menu-item');
    menuItemContainer.appendChild(menuItem);

    const menuItemFlavors = document.createElement('li');
    menuItemFlavors.textContent = menuItems.flavors.join(', ')
    menuItemFlavors.classList.add('menu-item-flavors');
    menuItemContainer.appendChild(menuItemFlavors);
}










