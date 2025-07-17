const ul = document.getElementById('ul-js');
const menuBtn = document.getElementById('menu-button');
const closeBtn = document.getElementById('close-button');

function openSidebar() {
    ul.classList.add('show')
}

function closeSidebar() {
    ul.classList.remove('show')
}