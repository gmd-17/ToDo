import { setupMediaQuery } from "./utils/media.js";

const ul = document.getElementById('ul-js');
const menuBtn = document.getElementById('menu-button');
const closeBtn = document.getElementById('close-button');


export default function initSidebar() {
    setupMediaQuery(updateNavbarUl);

    document.addEventListener('click', (e) => {

        if (
            !ul.contains(e.target)
            && !menuBtn.contains(e.target)
            || closeBtn.contains(e.target)) {
            closeSidebar();
        }
        else if (menuBtn.contains(e.target)) {
            openSidebar();
        }

        // (!ul.contains(e.target)
        //     && !menuBtn.contains(e.target))
        //     || closeBtn.contains(e.target)
        //     ? closeSidebar()
        //     : menuBtn.contains(e.target)
        //         ? openSidebar()
        //         : ''

    });
}

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
    ul.removeAttribute('inert', '');

}

function closeSidebar() {
    ul.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', false);
    ul.setAttribute('inert', '');

}


