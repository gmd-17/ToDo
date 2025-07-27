import { todos, deleteTodo } from "./data.js";

const todoListDiv = document.getElementById('todo-list-js');

export default function initTodo() {
    renderTodoList();

    document.addEventListener('click', (e) => {
        const click = e.target

        // expand to show todo details
        if (click.classList.contains('todo-title')) {
            const clickedTitleId = click.getAttribute('id').split(':')[0];
            const detailsDiv = document.getElementById(`${clickedTitleId}:details`);
            detailsDiv.classList.toggle('expanded');
        }
        // delete a todo
        else if (click.closest('.delete-todo-btn')) {
            const clickedBtnId = click.closest('.delete-todo-btn').dataset.id;

            // returns true if all todos deleted
            if (deleteTodo(clickedBtnId)) {
                renderTodoList(); // render entire list if all todos deleted
            } else {
                deleteTodoDiv(clickedBtnId); // else only remove the deleted to do div
            }
        }
    });
}

function renderTodoList() {

    todoListDiv.innerHTML = '';

    todos.forEach(todo => {
        todoListDiv.innerHTML += generateTodoDivHtml(todo);
    });
}


export function addTodoDiv(data) {
    todoListDiv.innerHTML += generateTodoDivHtml(data);
}

function deleteTodoDiv(id) {
    const todoDiv = document.getElementById(id);
    todoDiv.remove();
}


function generateTodoDivHtml(data) {
    return `
            <div class="todo" id="${data.id}">
                <input type="checkbox" class="checkbox" name="${data.id}:checkbox" id="${data.id}:checkbox" ${data.isChecked ? "checked" : ""}>
                <label for="${data.id}:checkbox" class="custom-checkbox" aria-label="Mark this task as done"></label>

                <div class="todo-info" data-todo-id="${data.id}">
                    <p class="todo-title" id="${data.id}:title">${data.title}</p>
                    <div class="expandable" id="${data.id}:details">
                        <div class="todo-details">
                            <div class="todo-details-group todo-priority">
                                <span class="todo-details-label">Priority</span>
                                <span class="badge ${data.priority}"></span>
                                <span class="badge-text ${data.priority}">${data.priority ? data.priority : 'not set'}</span>
                            </div>
                            <div class="todo-details-group todo-due-date">
                                <span class="todo-details-label">Due Date</span>
                                <span class="todo-details-value ${data.dueDate ? '' : 'text-muted'} ">${data.dueDate ? data.dueDate : 'none'}</span>
                            </div>
                            <div class="todo-details-group todo-category">
                                <span class="todo-details-label">Category</span>
                                <span class="todo-details-value ${data.category ? '' : 'text-muted'}">${data.category ? data.category : 'not set'}</span>
                            </div>
                            <div class="todo-details-group todo-notes">
                                <span class="todo-details-label">Notes</span>
                                <p class="todo-details-value todo-notes-p ${data.notes ? '' : 'text-muted'}">${data.notes ? data.notes : "no notes"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="delete-todo-btn" data-id="${data.id}"><svg xmlns="http://www.w3.org/2000/svg"
                        height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--bg)">
                        <path
                            d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                    </svg></button>
                </div>
        `
}

// <div class="todo" id="todo-2">
//     <input type="checkbox" class="checkbox" name="todo-2:checkbox" id="todo-2:checkbox"
//         data-todo-id="todo-2">
//         <label for="todo-2:checkbox" class="custom-checkbox" aria-label="Mark this task as done"></label>

//         <div class="todo-info" data-todo-id="todo-2">
//             <p class="todo-title" id="todo-2:title">this has a long title. to test out the responsiveness.
//             </p>
//             <div class="expandable" id="todo-2:details">
//                 <div class="todo-details">
//                     <div class="todo-details-group todo-priority">
//                         <span class="todo-details-label">Priority</span>
//                         <span class="badge medium"></span>
//                         <span class="badge-text medium">Medium</span>
//                     </div>
//                     <div class="todo-details-group todo-due-date">
//                         <span class="todo-details-label">Due Date</span>
//                         <span class="todo-details-value">30/7/2025</span>
//                     </div>
//                     <div class="todo-details-group todo-category">
//                         <span class="todo-details-label">Category</span>
//                         <span class="todo-details-value">General</span>
//                     </div>
//                     <div class="todo-details-group todo-notes">
//                         <span class="todo-details-label">Notes</span>
//                         <p class="todo-details-value todo-notes-p">Lorem ipsum dolor, sit amet consectetur
//                             adipisicing elit. Ut, ad voluptate molestias commodi debitis, sit culpa adipisci
//                             officiis nesciunt et laborum voluptatum, quibusdam impedit nemo? Dolores
//                             architecto quam eos modi?</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <button class="delete-todo-btn" data-detele-btn="todo1"><svg xmlns="http://www.w3.org/2000/svg"
//             height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--bg)">
//             <path
//                 d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
//         </svg></button>
// </div>