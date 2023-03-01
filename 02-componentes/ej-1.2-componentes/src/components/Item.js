function Item(props) {
    return (
        <div class="tarea">
            <li class="tarea-item">
                {props.tarea}
            </li>
            <button class="boton-completado">O</button>
            <button class="boton-eliminado">X</button>
        </div>

    )
}

export default Item;