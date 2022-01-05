import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

todoForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const formData = new FormData(todoForm);

    const todo = formData.get('todo');

    await createTodo(todo);
    // on submit, create a todo, reset the form, and display the todos
    displayTodos();
});

async function displayTodos() {
    // fetch the todos
    const todoList = await getTodos();
     
    // display the list of todos
    todosEl.textContent = '';

    for (let todo of todoList) {
        const todoEl = renderTodo(todo);
    

    // be sure to give each todo an event listener
        todoEl.addEventListener('click', async() => {
            await completeTodo(todo.id);

            displayTodos();
        });
        todosEl.append(todoEl);
    // on click, complete that todo
    }
}
// add an on load listener that fetches and displays todos on load

window.addEventListener('load', async() => {
    displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async() => {
    // delete all todos
    await deleteAllTodos();

    // then refetch and display the updated list of todos
    displayTodos();
});
