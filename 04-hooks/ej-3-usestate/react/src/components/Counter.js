import React from 'react';
import { useState } from 'react';

function Counter(){
    const [conteo, setConteo] = useState(0);

    function aumentarConteo() {
        setConteo(conteo + 1);
    }

    function disminuirConteo() {
        setConteo(conteo - 1);
    }

    return (
        <div>
            <p>Haz hecho click {conteo} veces</p>
            <button onClick={aumentarConteo} >Aumentar</button>
            <button onClick={disminuirConteo}>Disminuir</button>
        </div>
    )
}

export default Counter;