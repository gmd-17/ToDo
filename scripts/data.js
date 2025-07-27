const TODOKEY = 'todos';
export let todos = [];


export function saveTodos() {
    localStorage.setItem(TODOKEY, JSON.stringify(todos));
}

export function loadTodos() {
    const storedTodo = localStorage.getItem(TODOKEY);

    if (storedTodo) {
        todos = JSON.parse(storedTodo)
    } else {
        setDefaultTodos()
    }
    return todos;
}

export function deleteTodo(todoId) {
    todos = todos.filter(todo => todo.id != todoId);
    saveTodos();

    // For fallback to default todo when all Todos are delete. 
    // replace the 'false' in the if statement with user preference
    if (!todos.length && false) {
        setDefaultTodos();
        return true;
    }
    return false;
}

export function updateTodo(todoId, updatedTodoObj) {
    todos = todos.map(todo => {
        if (todo.id === todoId) {
            return updatedTodoObj;
        }
        saveTodos();
        return todo;
    });
}

export function addTodo(newTodo) {

    const formattedNewTodo = {
        id: Date.now(),
        isChecked: false,
        ...newTodo,
        dueDate: new Date(newTodo.dueDate).toLocaleDateString()
    }
    todos.push(formattedNewTodo);
    saveTodos();

    return formattedNewTodo;
}

function setDefaultTodos() {
    todos = [
        {
            id: Date.now(),
            isChecked: false,
            title: 'This is the first todo',
            priority: 'medium',
            due: new Date().toLocaleDateString(),
            category: 'general',
            notes: 'Todo notes. you can write anythign quick notes related to your todod here.'
        }
    ];
    saveTodos();
}

//test purposes
export function printTodo() {
    console.log(todos);
}