import html from './html?raw';  //importando html


/**
 * Metodo para renderizar la aplicacion
 * @param {String} elementId 
 */
export const app = (elementId) => {
    //Cuando la funcion se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;  //html var
        document.querySelector(elementId).append(app);
    })();

}