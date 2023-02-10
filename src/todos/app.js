import todoStore from '../store/todo.store';
import html from './app.html?raw';  //importando html
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
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
}