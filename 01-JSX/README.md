# JSX

## ¿Qué es JSX?

Parece un código híbrido entre JS y HTML:

```jsx
const h1 = <h1>Hola mundo</h1>;
```

En realidad es JS pero extendido con sintaxis de HTML estricto. Es JSX, se escribe en archivos nombrados `*.js` y  no en `*.html`

## Elementos JSX

Un elemento JSX es una representación del DOM y por tanto de la UI. Pueden ser guardados en una variable, pasados a una función, guardados en un arreglo u objeto, etc.

Ejemplos:

```jsx
const navBar = <nav>Soy una barra de navegación</nav>;
const miEquipo = {
  delantero: <li>Juan García</li>,
  centro: <li>Pedro Costa</li>,
  defensor: <li>Carlos Fuentes</li>,
};
```

## Multilínea

Si la expresión de JSX abarcar varias líneas, entonces necesita un paréntesis”

```jsx
const myList = (
  <ul>
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>
);
```

## Elemento padre de JSX

Una expresión JSX solo puede tener un elemento padre. Aquí una solución es añadir `<div></div>` o un fragmento `<></>` que es un elemento vacío.

```jsx
// da error
const misParrafos = (
  <p>Párrafo 1</p>
  <p>Párrafo 2</p>
);

// solucion
const misParrafos = (
  <div>
    <p>Párrafo 1</p>
    <p>Párrafo 2</p>
  </div>
);
```

## Renderizar JSX

Para renderizar JSX necesitaremos crear una raíz una sola vez y luego podemos renderizar con el método `render()`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';

// un elemento JSX
const miLista = (
  <ul>
    <li>A</li>
    <li>B</li>
  </ul>
);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(miLista);
```

## Atributos: class vs. className

En HTML podíamos usar class normalmente:

```jsx
<h1 class="grande">Hola</h1>

```

Pero en JSX debemos usar `className` en su lugar, ya que class es una palabra reservada en JavaScript:

```jsx
<h1 className="grande">Hola</h1>

```

## Cerrando tags

En JSX es necesario cerrar siempre los tags:

```jsx
// bien en HTML, mal en React 
<br>
<img>

// bien en React
<br />
<img />
```

## Inyectar JS dentro de JSX

Podemos inyectar JavaScript, sea una variable, una propiedad de un objeto, una llamada a una función, una expresión, etc. Para eso debemos usar las llaves `{}.`

Una expresión:

```jsx

root.render(<h1>{2 + 3}</h1>,);
```

Accediendo variables

```jsx
const unString = 'bla bla bla';

root.render(<h1>{unString}</h1>,);
```

Usando propiedades de objetos:

```jsx
const imgs = {
  panda: "http://bit.ly/1Tqltv5",
  buho: "http://bit.ly/1XGtkM3",
}; 

const panda = (
  <img 
    src={imgs.panda} 
    alt="Un panda" />
);

const buho = (
  <img 
    src={imgs.buho} 
    alt="Un buho" />
);

```