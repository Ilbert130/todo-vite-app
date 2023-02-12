import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';  //importando html
import { renderTodos, renderPending} from './use-cases';

//Esto una enumeracion
const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCountLabel: '#pending-count',
}

/**
 * Metodo para renderizar la aplicacion
 * @param {String} elementId 
 */
export const app = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodo(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList,todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(ElementIDs.PendingCountLabel);

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
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearAllTodo = document.querySelector(ElementIDs.ClearCompleted);
    const filtersUL = document.querySelectorAll(ElementIDs.TodoFilters);

    //Listerers event to add todo
    newDescriptionInput.addEventListener('keyup', (event)=>{
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    });

    //Para marcar como completada la tarea
    todoListUL.addEventListener('click', (event)=>{
        const element = event.target.closest('[data-id]'); //Esto buscara el elemento padre con el atributo [data-id]
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    //Para elimanar un todo
    todoListUL.addEventListener('click', (event)=>{
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if(!element || !isDestroyElement) return;

        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    });

    //Para eliminar todo las tareas
    clearAllTodo.addEventListener('click', () =>{
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersUL.forEach(element =>{
        element.addEventListener('click', (element) =>{
            filtersUL.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                break;
            }

            displayTodos();
        });
    });
}