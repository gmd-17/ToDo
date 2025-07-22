import { todo } from "./data.js";

const form = document.getElementById('form');
const todoTitle = document.getElementById('todo-title');
const addTodoBtn = document.getElementById('add-todo-btn');
const moreDetailsbtn = document.getElementById('more-details-btn');
const moreDetails = document.getElementById('more-details');

export default function initForm() {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = todoTitle.value;
        alert(`value = ${newTodo}`);
    });

    moreDetailsbtn.addEventListener('click', () => {
        const expanded = moreDetailsbtn.classList.toggle('expanded');
        moreDetails.classList.toggle('expanded');

        moreDetailsbtn.setAttribute('aria-expanded', expanded ? true : false)
        expanded ? moreDetails.removeAttribute('inert', '') : moreDetails.setAttribute('inert', '');
    });
}
