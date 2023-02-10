import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./create-todo-html";


/**
 * 
 * @param {String} elementoId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementoId, todos = []) => {

    //TODO: referencia
    const element = document.querySelector(elementoId);

    todos.forEach(todo => {
        
        element.append(createTodoHTML(todo));

    });
}