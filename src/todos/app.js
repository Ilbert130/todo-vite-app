/**
 * Metodo para renderizar la aplicacion
 * @param {String} elementId 
 */
export const App = (elementId) => {
    //Cuando la funcion se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = '<h1>Hola mundo</h1>';
        document.querySelector(elementId).append(app);
    })();

}