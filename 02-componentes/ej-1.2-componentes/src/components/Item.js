function Item({texto, tareas, setTareas, completado}) {
    
    const handleCompletado = () => {
        const nuevasTareas = tareas.map((tarea) => {
            if (tarea.texto === texto) {
                return {...tarea, completado: !tarea.completado}
            }
            return tarea;
        })
        setTareas(nuevasTareas);
    }

    const handleEliminado = () => {
        const nuevasTareas = tareas.filter((tarea) => {
            return tarea.texto !== texto;
        })
        setTareas(nuevasTareas);
    }


    return (
        <div className={`tarea ${ completado && 'completado'}`}>
            <li className="tarea-item">
                {texto}
            </li>
            <button onClick={handleCompletado} className="boton-completado">O</button>
            <button onClick={handleEliminado} className="boton-eliminado">X</button>
        </div>

    )
}

export default Item;