// SELECTORES
const entradaTarea = document.querySelector('.entrada-tarea');
const botonTarea = document.querySelector('.boton-entrada');
const listaTareas = document.querySelector('.lista-tareas');


// EVENT LISTENERS
botonTarea.addEventListener('click', anadirTarea);
listaTareas.addEventListener('click', procesarTarea);


// EVENT HANDLERS (funciones)
function anadirTarea(event) {
    event.preventDefault();
    console.log(event);

    // crear elemento div y su clase
    const divTarea = document.createElement('div')
    divTarea.classList.add('tarea');

    // crear elemento li, su clase, contenido y anexar
    const nuevaTarea = document.createElement('li')
    nuevaTarea.classList.add('tarea-item');
    nuevaTarea.innerText = entradaTarea.value;
    divTarea.appendChild(nuevaTarea);

    // crear boton de completado y anexar
    const botonCompletado = document.createElement('button');
    botonCompletado.classList.add('boton-completado');
    botonCompletado.innerText = 'O';
    divTarea.appendChild(botonCompletado);

    // crear boton eliminado y anexar
    const botonEliminado = document.createElement('button');
    botonEliminado.classList.add('boton-eliminado');
    botonEliminado.innerText = 'X';
    divTarea.appendChild(botonEliminado);

    // añadir elemento completo a lista de tareas
    listaTareas.appendChild(divTarea);

    // limpiar entrada
    entradaTarea.value = '';

}

function procesarTarea(event){
    console.log(event.target);

    // referenciar elementos con los que se trabajará
    const el = event.target;
    const tarea = el.parentElement;

    // si es completado
    if(el.classList[0] == 'boton-completado'){
        tarea.classList.toggle('completado');
    }

    // si es eliminado
    if(el.classList[0] === 'boton-eliminado'){
        tarea.remove();
    }
}