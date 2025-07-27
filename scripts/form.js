import { addTodo } from "./data.js";
import { addTodoDiv } from "./todo.js";

const form = document.getElementById('form');
const moreDetailsbtn = document.getElementById('more-details-btn');
const moreDetails = document.getElementById('more-details');

export default function initForm() {

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        if (data.title) {
            const newTodo = addTodo(data);
            addTodoDiv(newTodo);

            form.reset();
        }

    });



    moreDetailsbtn.addEventListener('click', () => {
        const expanded = moreDetailsbtn.classList.toggle('expanded');
        moreDetails.classList.toggle('expanded');


        if (expanded) {
            moreDetailsbtn.setAttribute('aria-expanded', true);
            moreDetails.removeAttribute('inert', '');

        } else {
            moreDetailsbtn.setAttribute('aria-expanded', false)
            moreDetails.setAttribute('inert', '');

            // clear form more details when more details closed
            // replace 'false' with user prefernce
            if (false) {
                const title = form.elements['title'];
                const titleValue = title.value;
                form.reset();
                title.value = titleValue;
            }
        }
    });


}
