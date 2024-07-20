// EVENT TARGETS Y SELECTORES  
const entradaTarea = document.querySelector('.entrada-tarea');
const botonTarea = document.querySelector('.boton-entrada');
const listaTareas = document.querySelector('.lista-tareas');


// EVENT LISTENERS
botonTarea.addEventListener('click', anadirTarea);
listaTareas.addEventListener('click', procesarTarea);


// EVENT HANDLERS (funciones)
function anadirTarea(event) {
    event.preventDefault();

    // crear elementos
    const liTarea = createElement('li', 'tarea', '');
    const pItem = createElement('p', 'tarea-item', entradaTarea.value);
    const botonCompletado = createElement('button', 'boton-completado', 'O');
    const botonEliminado = createElement('button', 'boton-eliminado', 'X');

    // añadir elementos a la tarea
    liTarea.append(pItem, botonCompletado, botonEliminado);

    // añadir tarea a la lista
    listaTareas.append(liTarea);

    // limpiar el input
    entradaTarea.value = '';

}

function procesarTarea(event) {
    console.log(event.target);

    // referenciar elementos con los que se trabajará
    const el = event.target;
    const tarea = el.parentElement;

    // si es completado
    if (el.classList[0] == 'boton-completado') {
        tarea.classList.toggle('completado');
    }

    // si es eliminado
    if (el.classList[0] === 'boton-eliminado') {
        tarea.remove();
    }
}

// HELPER FUNCTIONS
function createElement(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.innerText = content;
    return element;
}