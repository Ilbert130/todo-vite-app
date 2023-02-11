import { Todo } from "../todos/models/todo.model";

//Enumeracion
const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedar del poder'),
        new Todo('Piedar del realidad')
    ],
    filter: Filters.All
}   

const initStore = () =>{
    console.log(state);
    console.log('InitStore');
}

const loadStore = () =>{
    throw new Error('Not implemented');
}

const getTodo = ( filter = Filters.All ) => {
    switch(filter){
        case Filters.All:
            return [...state.todos];

        case Filters.Completed:
            return state.todos.filter(todo => todo.done);

        case Filters.Completed:
            return state.todos.filter(todo => !todo.done);
        
        default: 
            throw new Error(`Option ${filter} is not valid`);
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if(!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
}

/**
 * 
 * @param {String} todoId Todo identificador
 */
//Seria como una aptualizacion, para macar la tarea como completada
const toggleTodo = (todoId) =>{
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    });
}

const deleteTodo = (todoId) =>{
    state.todos = state.todos.filter( todo => todo.id !== todoId);
}

const deleteCompleted = () =>{
    state.todos = state.todos.filter( todo => todo.done); //todo.done este en true 
}

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) =>{
    state.filter = newFilter;
}

const getCurrentFilter = () =>{
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodo,
    initStore,
    loadStore,
    setFilter,
    toggleTodo
}