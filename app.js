const hamburger = document.querySelector('.hamburger');
const nav_menu = document.querySelector('.nav-menu');
const look = document.querySelector('.look');
const deliverText = document.querySelector('.footer-deliver');
const drawer = document.querySelector('.drawerActive');
const closeDrawer = document.querySelector('.close');
const overlay = document.querySelector('.isActiveoverlay');
const card_btn = document.querySelectorAll('.card-btn');
const openCart = document.querySelector('.cart');


// card_btn.forEach((item) => {
//     item.addEventListener('click', () => {
//         drawer.classList.remove('drawerActive')
//         overlay.classList.remove('isActiveoverlay')
//         overlay.classList.add('overlay')
//         drawer.classList.add('drawer')


//     })
// })

openCart.addEventListener('click', () => {
    
    overlay.classList.add('overlay')
    drawer.classList.add('drawer')
    drawer.classList.remove('drawerActive')
    overlay.classList.remove('isActiveoverlay')
})




closeDrawer.addEventListener('click', () => {

    overlay.classList.remove('overlay')
    drawer.classList.remove('drawer');

    overlay.classList.add('drawerActive');
    drawer.classList.add('isActiveoverlay')

})

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav_menu.classList.toggle('active')
});


look.addEventListener('click', () => {
    deliverText.classList.add('lookfull');

})