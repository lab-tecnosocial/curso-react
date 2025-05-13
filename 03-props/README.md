# Props

Al igual que las etiquetas de HTML pueden recibir ciertos datos en sus atributos para personalizar su apariencia y comportamiento, también los componentes pueden recibir propiedades, llamadas en React como `props`. Puedes verlas como una suerte de atributos personalizados.

Los props son las entradas de los componentes función. Y se usan como un objeto en el cuerpo del componente:

```jsx
// Tarjeta.js
export default function Tarjeta(props){
return (
    <div>
        <img src={props.img} />
        <h1>{props.nombre}</h1>
        <p>{props.desc</p>
    </div>
  );
}
```

Y en las instancias del componente los props se pasan como `clave=valor` al estilo HTML:

```jsx
// MiApp.js
import MiTarjeta from './MiTarjeta';

function MiApp() {
  return (
    <>
      <Tarjeta img="https://docentes.org/juan.png" nombre="Juan Garcia" desc="Docente"/> // Tarjeta()
    </>
  );
```

En vez de hard-codear los valores de los props, podemos utilizar objetos:

```jsx
// MiApp.js
import MiTarjeta from './MiTarjeta';

const miObjeto = {
	img: 'https://docentes.org/juan.png',
	nombre: 'Juan Garcia',
	desc: 'Docente'
};

function MiApp() {
  return (
    <>
        <Tarjeta 
            img={miObjeto.img} 
            nombre={miObjeto.nombre} 
            desc={miObjeto.desc} 
        />
    </>
  );
```

Más aún, normalmente crearemos componentes a partir de un arreglo de objetos o un JSON local o de una API, para lo cual debemos usar el método `map()`:

```jsx
// MiApp.js
import MiTarjeta from './MiTarjeta';

const docentes = [
    {
        img: 'https://picsum.photos/200',
        nombre: 'Juan Garcia',
        desc: 'Docente'
    },
    {
        img: 'https://picsum.photos/200',
        nombre: 'Luis Mena',
        desc: 'Docente'
    },
    {
        img: 'https://picsum.photos/200',
        nombre: 'Carlos fuentes',
        desc: 'Docente'
    }
];

function MiApp() {
  return (
    <>
        { docentes.map(el => <Tarjeta img={el.img} nombre={el.nombre} desc={el.des} />) }
    </>
  );
```
Otra forma de usar los props en los componentes es desestructurándolos:

```jsx
// Tarjeta.js
export default function Tarjeta({ img, nombre, desc }){
return (
    <div>
        <img src={img} />
        <h1>{nombre}</h1>
        <p>{desc</p>
    </div>
  );
}
```
Los props también sirven para pasar datos de componentes padre a componentes hijo. Y pueden recibir tanto valores como funciones.

## Ejercicio 2

En la carpeta `ej-2-props` podrás encontrar otra demostración sobre props. El **reto** es hacer una tabla con los mismos datos.