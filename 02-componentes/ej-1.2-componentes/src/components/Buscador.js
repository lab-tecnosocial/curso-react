function Buscador({entrada, setEntrada, tareas, setTareas}){

    const handleChange = (e) => {
        setEntrada(e.target.value);

    }

    const handleClick = (e) => {
        e.preventDefault();
        setTareas([...tareas, {texto: entrada, completado: false, id: crypto.randomUUID()}]);
        setEntrada('');
    }
    return (
        <form>
            <input value={entrada} onChange={handleChange} type="text" className="entrada-tarea" />
            <button onClick={handleClick} type="submit" className="boton-entrada">+</button>
        </form>
    )
}

export default Buscador;