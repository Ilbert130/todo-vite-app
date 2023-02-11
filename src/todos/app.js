import todoStore from '../store/todo.store';
import html from './app.html?raw';  //importando html
import { renderTodos } from './use-cases';

//Esto una enumeracion
const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
}

/**
 * Metodo para renderizar la aplicacion
 * @param {String} elementId 
 */
export const app = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodo(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList,todos);
    }

    //Cuando la funcion se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;  //html var
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);

    //Listerers event
    newDescriptionInput.addEventListener('keyup', (event)=>{
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();

    });

}