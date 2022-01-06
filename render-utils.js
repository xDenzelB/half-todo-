export function renderTodo(todo) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    // create a div and a p tag
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    div.classList.add(todo.complete ? 'complete' : 'incomplete');
    div.classList.add('todo');

    //Was experimenting with different ways to use the render function 
    //came to a conclusion by having the 'p' tag with added on 'todo' it changes the CSS. 

    // if (todo.complete === true) {
    //     div.classList.add('complete', 'todo');
    //     div.classList.add('incomplete', 'todo');
    //     // p.classList.add('todo')
    // } The CSS on this statement doesn't look complete 
    // add the 'todo' css class no matter what
    p.textContent = todo.todo;
    // put the todo's text into the p tag

    // append stuff
    div.append(p);
    // return the div
    return div;
}