# Hooks

Los “hooks” son funciones que comienzan con la palabra `use` y que permiten “engancharse” a algunas funcionalidades clave de React. Los principales hooks son `useState()` para hacer que el componente guarde y actualice un estado (memoria) y `useEffect` para sincronizar acciones (*side effects*) en función de ciertos eventos.

## useState

Nos permite almacenar un estado (valor, arreglo, objeto) dentro de un componente y actualizarlo. La utilidad del estado es que al actualizarlo la apariencia del componente se vuelve a renderizar (o repintar) automáticamente:

Dicho de otra forma la UI **reacciona** al estado:

$$
 \text{UI} = f(\text{estado})
$$

Esa es una de las características esenciales de React.

El primer ejemplo que daremos es la construcción de un contador:

```jsx
import React, { useState } from 'react';

function Contador() {
  const [conteo, setConteo] = useState(0); 

  return (
    <div>
      <p>Haz hecho click {conteo} veces</p>
      <button onClick={() => setConteo(conteo + 1)}>
        Clic aquí
      </button>
    </div>
  );
}
```
Donde:
- Importamos el hook de la libreria de React
- Al inicio de nuestro componente usamos el hook, desestructurando lo que devuelve, que son dos cosas:
    - Una variable estado
    - Una función para actualizar el estado, que siempre empiece con `set`
- El hook de useState recibe un parametro que es el valor inicial del estado
- Ya en el elemento JSX que devuelve el componente, podemos usar el estado donde querramos.
- El botón, u otro elemento de interacción, tienen “event listeners” que son funciones de alto orden que reciben otra función (”event handler”) que se ejecutarán cuando el usuario realiza alguna interacción, por ejemplo: onClick, onMouseOver, etc. (notar la capitalización de cada palabra).
    - Entonces allí le pasamos una función que contiene la función de actualización de estado.
    - Nunca se debe actualizar el estado directamente, solo mediante la función que devuelve useState

Una segunda versión de esta contador tiene dos botones y dos *event handlers* diferentes.

```jsx
import React, { useState } from 'react';

function ContadorDos() {
    const [conteo, setConteo] = useState(0);

    function disminuirConteo() {
        setConteo(prev => prev - 1);
    }

    function aumentarConteo() {
        setConteo(prev => prev + 1);
    }

    return (
        <>
            <button onClick={disminuirConteo}>-</button>
            <span>{conteo}</span>
            <button onClick={aumentarConteo}>+</button>
        </>
    );
}
```

### Ejercicio 3

En la carpeta `ej-3-contador` puedes ver un ejemplo de contador escrito en JS vanilla (normal) y otro en React. Puedes ver que es mucho más directo e intuitivo escribirlo en React. 

El **reto** ahora es manejar en el estado un objeto completo que haga cambiar la apariencia de una tarjeta cuando el mouse se pone encima de él.

## useEffect

El hook `useEffect` permite realizar acciones (*side effect*s) como traer datos de una API y actualizar el DOM, según el ciclo de vida del componente. Esta función acepta dos argumentos: `useEffect(<funcion>, <dependencia>)` y tiene cuatro variaciones:

Cuando no le pasamos una dependencia, entonces se ejecuta en cada renderizado:

```jsx
useEffect(() => {
  // codigo
});
```

Cuando le pasamos una dependencia vacía, entonces se ejecuta solo en el primer renderizado:

```jsx
useEffect(() => {
  // codigo
}, []);
```

Cuando le pasamos algunas variables (estado o prop) se ejecuta en el primer renderizado y cada vez que cambien sus valores

```jsx
useEffect(() => {
  // codigo
}, [estado1, estado2])
```

Si usamos un `return`, este se usará como una función de limpieza para algunos eventos que tengan que limpiarse una vez se hayan usado, y se ejecuta antes de que el componente se desmonte: 

```jsx
useEffect(() => {
  // codigo
  return () => // cleanup ;
}, []);
```

Ejemplos más comunes:

```jsx
// Iniciar algún procedimiento solo en el primer renderizado

useEffect(
    () => alert('Iniciando app'),
    []
  );
```

```jsx
// Ejecutar algún procedimiento cuando cambia algún estado

import { useState, useEffect } from "react"

function ContadorTres() {
  const [conteo, setConteo] = useState(0);
  const [calculo, setCalculo] = useState(0);

  useEffect(() => {
    setCalculo(() => conteo * 2); //incrementa el doble
		(conteo !== 0) & (conteo % 10) === 0 && alert(`Llegaste a ${conteo}`) // mensaje cada multiplo de 10
		
  }, [conteo]); // dependencia

  return (
    <>
      <p>Conteo: {conteo}</p>
      <button onClick={() => setConteo((c) => c + 1)}>Incrementar</button>
      <p>Calculo: {calculo}</p>
    </>
  );
}
```

### Ejercicio 4

En la carpeta `ej-4-usetate-useffect` puedes encontrar un ejemplo de un procedimiento que realizarás constantemente: traer datos de una API y renderizarlos en componentes de React, usando al mismo tiempo `useState()` y `useEffect()`. Usamos una API de Naruto para este caso 🌀.

El **reto** ahora es que hagas algo similar con cualquier otra API disponible que te interese y lo renderices en componentes de tarjetas.
