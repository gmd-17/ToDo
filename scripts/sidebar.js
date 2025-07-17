import { ul, menuBtn } from "./elements.js"

export function updateNavbarUl(media) {
    const isMobile = media.matches;
    if (isMobile) {
        ul.setAttribute('inert', '');
    }
    else {
        ul.removeAttribute('inert');
    }
}

export function openSidebar() {
    ul.classList.add('show');
    menuBtn.setAttribute('aria-expanded', true);
    ul.removeAttribute('inert', '');

}

export function closeSidebar() {
    ul.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', false);
    ul.setAttribute('inert', '');

}

export function closeOnExit(e) {
    if (!ul.contains(e.target) && !menuBtn.contains(e.target)) {
        closeSidebar();
    }
}
