import initSidebar from "./sidebar.js"
import initForm from "./form.js";
import initTodo from "./todo.js";
import { loadTodos } from "./data.js";

console.log('index.js')

initSidebar();
initForm();
loadTodos();
initTodo();