import { Todo } from "../todos/models/todo.model";

//Enumeracion
const Filter = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo')
    ],
    filter: Filter.All
}   

const initStore = () =>{
    console.log(state);
    console.log('InitStore');
}

const loadStore = () =>{
    throw new Error('Not implemented');
}

const getTodo = ( newFilter = Filter.All ) => {
    switch(filter){
        case Filter.All:
            return state.todos;
    }
}

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    throw new Error('Not implemented');
}

/**
 * 
 * @param {String} todoId Todo identificador
 */
//Seria como una aptualizacion
const toggleTodo = (todoId) =>{
    throw new Error('Not implemented');
}

const deleteTodo = (todoId) =>{
    throw new Error('Not implemented');
}

const deleteCompleted = () =>{
    throw new Error('Not implemented');
}

const setFilter = (newFilter = Filter.All) =>{
    throw new Error('Not implemented');
}

const getCurrentFilter = () =>{
    throw new Error('Not implemented');
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