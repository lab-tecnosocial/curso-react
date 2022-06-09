# Props

Al igual que las etiquetas de HTML pueden recibir ciertos datos en sus atributos para personalizar su apariencia y comportamiento, también los componentes pueden recibir propiedades, llamados `props`.

Los props se reciben y se usan como un objeto en la definición del componente:

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

Y en las instancias del componente se pasan como `clave=valor`:

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

Más aún, normalmente crearemos componentes a partir de un arreglo de objetos o un JSON local o que venga de una API, para lo cual debemos usar el método `map()`:

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
        { docentes.map(el => <Tarjeta img={el.img} nombre={el nombre} desc={el.des} />) }
    </>
  );
```

## Ejercicio 2

En la carpeta `ej-2-props` podrás encontrar otra demostración sobre props. El ejercicio es hacer una tabla con los mismos datos.