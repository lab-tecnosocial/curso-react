function Item({tarea, tareas, setTareas, }) {
    
    const handleCompletado = (id) => {
        const nuevasTareas = tareas.map((tarea) => {
            if (tarea.id === id) {
                return {...tarea, completado: !tarea.completado}
            }
            return tarea;
        })
        setTareas(nuevasTareas);
    }

    const handleEliminado = (id) => {
        const nuevasTareas = tareas.filter((tarea) => {
            return tarea.id !== id;
        })
        setTareas(nuevasTareas);
    }


    return (
        <div className={`tarea ${ tarea.completado && 'completado'}`}>
            <li className="tarea-item">
                {tarea.texto}
            </li>
            <button onClick={() => handleCompletado(tarea.id)} className="boton-completado">O</button>
            <button onClick={() => handleEliminado(tarea.id)} className="boton-eliminado">X</button>
        </div>

    )
}

export default Item;