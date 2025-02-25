const menu = document.querySelector('.bx-menu');
const navbar = document.querySelector('.number');
const order = document.querySelector('.order');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active')
    menu.classList.remove('bx-x');

    order.classList.reveal('top')
}