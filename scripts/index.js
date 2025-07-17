const ul = document.getElementById('ul-js');
const menuBtn = document.getElementById('menu-button');

const media = window.matchMedia("(width < 600px)");
updateNavbarUl(media);

media.addEventListener('change', (e) => {
    updateNavbarUl(e);
});

function updateNavbarUl(media) {
    const isMobile = media.matches;
    if (isMobile) {
        ul.setAttribute('inert', '');
    }
    else {
        ul.removeAttribute('inert');
    }
}

function openSidebar() {
    ul.classList.add('show');
    menuBtn.setAttribute('aria-expanded', true);
    ul.setAttribute('inert', '');

}

function closeSidebar() {
    ul.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', false);
    ul.removeAttribute('inert');

}

function closeOnExit(e) {
    if (!ul.contains(e.target) && !menuBtn.contains(e.target)) {
        closeSidebar();
    }
}

document.addEventListener('click', (e) => {

    //sidebar
    closeOnExit(e);
});