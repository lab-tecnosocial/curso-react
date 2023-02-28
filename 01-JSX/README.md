# JSX

## Instalar Node.js y crear apps de React

Para poder desarrollar React localmente debemos contar con las siguientes herramientas:
- [Node.js](https://nodejs.org/). Para crear proyectos de JavaScript en una computadora (local o servidor) e ir más allá del navegador. Instalar.
- [npm](https://www.npmjs.com/). Para gestionar y descargar librerias de JavaScript. Se instala por defecto junto a Node.js.
- [Create react app](https://create-react-app.dev/). Para configurar proyectos de react con un solo comando. Se ejecuta cuando ya tenemos todo lo anterior.

Una vez hemos instalado Node.js, podemos configurar proyectos de React con el siguiente comando:

```shell
npx create-react-app <mi-app>
```

Ese comando crea e instala la siguiente estructura:

```shell
mi-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── serviceWorker.js
    └── setupTests.js
```

Explicamos los elementos más importantes de esta estructura:
- `README.md`: Una descripción de tu proyecto en Markdown.
- `node_modules`: Todas las librerias que descargues con `npm`
- `package.json`: Configuración y descripciones de librerias
- `public/index.html`: Contiene HTML normal, pero que no usaremos sino que será solo un punto de entrada para React.
- `src/`: La carpeta más importante, aquí están los archivos JS que ejecutan React
  - `index.js`: Aquí se crea la raiz de la app vinculandola a `index.html`. No hay mucho que hacer aquí
  - `App.js`: Tu primer componente. Es lo que renderiza directamente React. Puedes modificarlo con JSX para ver cómo cambia el sitio web.
  - Aquí también puedes crear una carpeta `components` donde crearás tus propios componentes.

Para hacer correr el proyecto usamos `npm start` y nos debe aparecer en el navegador la siguiente página:

![](../img/react-page.png)

Si hubieras descargado el proyecto de un repo de GitHub o de otra persona, antes necesitarás instalar las librerias localment necesarias con `npm install` y luego recién ejecutar `npm start`.


Si no logras instalar todo lo anterior, puedes usar un editor online que soporta React, como [Code Sandbox](https://codesandbox.io/).

Opcionalmente puedes también instalar la siguiente extensión para depurar tu app de React en el navegador: [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl).
## ¿Qué es JSX?

Esta es una exprexión en JSX:

```jsx
const h1 = <h1 className="titulo">Hola mundo</h1>;
```
Parece un código híbrido entre JS y HTML. Pero en realidad es JS pero extendido con sintaxis de HTML estricto. Se escribe en archivos nombrados `*.js` y  no en `*.html`. En React el marcado y la lógica conviven y no se separán como en otros enfoques.

Se podría generar también de esta forma, pero es más conveniente usar el estilo tipo HTML:
```js
const element = React.createElement(
  'h1',
  {className: 'titulo'},
  'Hola mundo'
);
```

## Elementos JSX

Un elemento JSX es una representación del DOM y por tanto de la UI. También puedes pensarlo como un agrupamiento de elementos de HTML. Pueden ser guardados en una variable, pasados a una función, guardados en un arreglo u objeto, etc.

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

Si la expresión de JSX abarcar varias líneas, entonces necesitará un paréntesis:

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

Una expresión JSX solo puede tener un elemento padre. Si tiene varios padres, entonces una solución es envolverlo en un `<div></div>` o un fragmento `<></>` que es un elemento vacío.

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

const root = ReactDOM.createRoot( document.getElementById('root'));
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

Podemos inyectar JavaScript en JSX, combinando HTML tradicioal con JS en una sola expresión. Ya sea una variable, una propiedad de un objeto, una llamada a una función, una expresión, etc. Para eso debemos usar las llaves `{}`

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
  panda: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Giant_Panda_2004-03-2.jpg/800px-Giant_Panda_2004-03-2.jpg",
  buho: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Bubo_bubo_sibiricus_-_01.JPG/400px-Bubo_bubo_sibiricus_-_01.JPG",
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
Las llaves `{}` sirven como un símbolo de escape.