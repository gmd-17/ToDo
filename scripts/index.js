import { openSidebar, closeSidebar, closeOnExit, updateNavbarUl } from "./sidebar.js";
import { menuBtn, closeBtn } from "./elements.js"
import { setupMediaQuery } from "./utils/media.js";

const media = setupMediaQuery(updateNavbarUl);

document.addEventListener('click', (e) => {

    //sidebar
    closeOnExit(e);
    if (menuBtn.contains(e.target)) {
        openSidebar();
    } else if (closeBtn.contains(e.target)) {
        closeSidebar();
    }

});