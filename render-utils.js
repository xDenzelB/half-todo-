export function renderTodo(todo) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    // create a div and a p tag
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    div.classList.add(todo.complete ? 'complete' : 'incomplete');
    div.classList.add('todo');
    // add the 'todo' css class no matter what
    p.textContent = todo.todo;
    // put the todo's text into the p tag

    // append stuff
    div.append(p);
    // return the div
    return div;
}