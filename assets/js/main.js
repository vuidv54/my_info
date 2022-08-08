const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const navBar = $('.navbar');
const navBarLogo = $('.navbar__logo-img');
const navBarLogoTitle = $('.logo__title');
const navBarMenu = $('.navbar-menu');
const listMenuItems = $('.list__menu');
const lisInfoItems = $('.list__info');
const controlFoodBtn = $('.control-food__btn');
const controlJuiceBtn = $('.control-juices-btn');
const juiceItems = $$('.event-juice-item');
const foodItems = $$('.event-food-item');
const menuItems = $$('.js__menu-item');
const contentMenu = $('#content');
const aboutMenu = $('#about-us');
const galleryMenu = $('#gallery');
const bookTableMenu = $('#book-table');
const blogMenu = $('#event-food');
const reviewMenu = $('#reviews');
const contactMenu = $('#contact-us');

const logoWidth = navBarLogo.clientWidth;

document.onscroll = (e) => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    let newLogoWidth = logoWidth - scrollTop;

    navBarLogo.style.width = newLogoWidth > 0 ? newLogoWidth + 'px' : 0;
    navBarLogo.style.opacity = newLogoWidth / logoWidth;

    if(newLogoWidth <= 20) {
        navBarLogoTitle.classList.add('logo__title--active');
        navBar.classList.add('navbar--active');
    } else {
        navBar.classList.remove('navbar--active');
        navBarLogoTitle.classList.remove('logo__title--active');
    }

    let contentMenuHeight = contentMenu.clientHeight;
    let aboutMenuHeight = aboutMenu.clientHeight;
    let galleryMenuHeight = galleryMenu.clientHeight;
    let bookTableMenuHeight = bookTableMenu.clientHeight;
    let blogMenuHeight = blogMenu.clientHeight;
    let reviewMenuHeight = reviewMenu.clientHeight;
    let contactMenuHeight = contactMenu.clientHeight;

    let indexOfMenUItemActive = getmenuItemActive();

    if(scrollTop <=  contentMenuHeight - 50) {
        menuItems[indexOfMenUItemActive].classList.remove('menu-item__link--active');
        menuItems[0].classList.add('menu-item__link--active');
    } else if(scrollTop <=  contentMenuHeight + aboutMenuHeight - 50) {
        menuItems[indexOfMenUItemActive].classList.remove('menu-item__link--active');
        menuItems[1].classList.add('menu-item__link--active');
    } else if(scrollTop <=  contentMenuHeight + aboutMenuHeight + galleryMenuHeight - 50) {
        menuItems[indexOfMenUItemActive].classList.remove('menu-item__link--active');
        menuItems[2].classList.add('menu-item__link--active');
    } else if(scrollTop <=  contentMenuHeight + aboutMenuHeight + galleryMenuHeight  + bookTableMenuHeight - 50) {
        menuItems[indexOfMenUItemActive].classList.remove('menu-item__link--active');
        menuItems[3].classList.add('menu-item__link--active');
    } else if(scrollTop <=  contentMenuHeight + aboutMenuHeight + galleryMenuHeight  + bookTableMenuHeight + blogMenuHeight - 50) {
        menuItems[indexOfMenUItemActive].classList.remove('menu-item__link--active');
        menuItems[4].classList.add('menu-item__link--active');
    } else if(scrollTop <=  contentMenuHeight + aboutMenuHeight + galleryMenuHeight  + bookTableMenuHeight + blogMenuHeight + reviewMenuHeight - 50) {
        menuItems[indexOfMenUItemActive].classList.remove('menu-item__link--active');
        menuItems[5].classList.add('menu-item__link--active');
    } else if(scrollTop <=  contentMenuHeight + aboutMenuHeight + galleryMenuHeight  + bookTableMenuHeight + blogMenuHeight + reviewMenuHeight + contactMenuHeight - 40) {
        menuItems[indexOfMenUItemActive].classList.remove('menu-item__link--active');
        menuItems[6].classList.add('menu-item__link--active');
    }
}

navBarMenu.onclick = () => {
    listMenuItems.classList.toggle('list__menu--showWhenClickMenu');
    lisInfoItems.classList.toggle('list__info--showWhenClickMenu');
}

controlFoodBtn.onclick = () => {
    controlFoodBtn.classList.add('control-food__btn--active');
    controlJuiceBtn.classList.remove('control-juices-btn--active');

    for(let foodItem of foodItems) {
        foodItem.classList.remove('event-food-item--hidden');
    }
    for(let juiceItem of juiceItems) {
        juiceItem.classList.add('event-juice-item--hidden');
    }
}

controlJuiceBtn.onclick = () => {
    controlJuiceBtn.classList.add('control-juices-btn--active');
    controlFoodBtn.classList.remove('control-food__btn--active');

    for(let foodItem of foodItems) {
        foodItem.classList.add('event-food-item--hidden');
    }
    for(let juiceItem of juiceItems) {
        juiceItem.classList.remove('event-juice-item--hidden');
    }
}

function getmenuItemActive() {
    for(let j = 0; j < menuItems.length; j++) {
        if(menuItems[j].classList.contains('menu-item__link--active')) {
            return j;
        }
    }
}

// (function() {
//     for(let i = 0; i < menuItems.length; i++) {
//         menuItems[i].onclick = () => {
//             let indexOfMenUItemActive = getmenuItemActive();
//             menuItems[i].classList.add('menu-item__link--active');
//             menuItems[indexOfMenUItemActive].classList.remove('menu-item__link--active');
//         }
//     }
// })();
