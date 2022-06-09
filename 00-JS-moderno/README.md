# JS Moderno

React hace uso de las últimas características de JavaScript. Es por eso que debes conocer las últimas variaciones de JS antes de embarcarte a desarrollar en React.

## Tres formas de declarar de funciones

En React constantemente estarás definiendo componentes funciones, por lo que debes conocer las tres formas de declarar funciones en JavaScript:

- Declaración de función
- Función expresión
- Función flecha (una de las más utilizadas en React)

Declaración de función, que es la más común:

```js
function suma(a, b) {
   return a + b;
}
suma(2, 2) // resultado 4
```

Función expresión, donde una función se asigna  a una variable:

```js
const suma = function(a, b) {
   return a + b;
};
suma(2, 2) // resultado 4
```

Funciones flecha, similares a las funciones lambda de Python:

```js
const suma = (a, b) => a + b;
```

Si solo se tiene un parametro, entonces el parentesis se puede omitir:

```js
const mostrarTexto = texto => alert("El texo es: " + texto);
```

Si no hay parametros, entonces se puede dejar el parentesis vacío, pero debe estar presente:

```js
cons decirHola = () => alert("Hola");
```

Si existe más de una linea de código en el cuerpo de la función se debe usar `{ }` y la palabra clave `return`

```js
const suma = (a, b) => {
   let resultado = a + b;
   return resultado;
};
```

## Operador spread

Este operador  (`...`)  nos permite copiar el contenido de un array u objeto en otro array u objeto. Dado que en React se privilegia las funciones puras y la inmutabilidad, se usa mucho este operador para actualizar arrays y objetos, creandolos de nuevo a partir de los arrays y objetos antiguos.

De arrays:

```js
const numerosUno = [1, 2, 3];
const numerosDos = [4, 5, 6];
const numerosCombinados = [...numerosUno, ...numerosDos];
```

De objetos:

```js
const miVehiculo = {
  marca: 'Ford',
  modelo: 'Mustang',
  color: 'Rojo'
}

const actualizarVehiculo = {
  type: 'Auto',
  year: 2021, 
  color: 'Amarillo'
}

const miVehiculoActualizado = {...miVehiculo, ...actualizarVehiculo}
```

## Iteraciones en arrays

Si bien se pueden hacer muchas cosas con los loops `for` en JavaScript, en muchas ocasiones es más simple y efectivo usar los iteradores de los arrays, que son más funcionales y declarativas.

```js
// Forma antigua imperativa
array = [ 1, 2, 3, 4, 5, 6 ];
for (index = 0; index < array.length; index++) {
    console.log(array[index]);

```

For each:

```js
array.forEach(e => console.log(e))
```

Map para mutar el arreglo. Se usa mucho en React para crear componentes a partir de un array con objetos o un JSON:

```js
array.map(e => Math.pow(e, 2))
```

Filter, se lo utiliza mucho en React para filtrar el contenido de un estado que luego se renderiza en el UI:

```js
array.filter(e =>  e % 2 == 0)Reduce:
```

## Desestructuración

Es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

```js
// con arreglos
const numerosIngles = ['one', 'two', 'three'];

// forma antigua
let uno = numerosIngles[0];
let dos = numerosIngles[1];
let tres = numerosIngles[2];

// forma nueva
let [uno, dos, tres] = numerosIngles;
console.log(uno); // "one"
console.log(dos); // "two"
console.log(tres); // "three"
```

```js
// con objetos
const numeros = {
    uno: "one",
    dos: "two"
};

let {uno, dos} = numeros;

console.log(uno); //
console.log(dos); // 
```

## Operador ternario

Una alternativa para expresar condicionales de forma más compacta. Se usa mucho en React para renderizar componentes condicionalmente

```js
// sintaxis
condición ? exprTrue : exprFalse
```

```js
// ejemplo
let esMiembro = false;
console.log("La Cuota es de:  " + (esMiembro ? "$2.00" : "$10.00"))

let check = true;
let acceso = check ? "Acceso permitido" : "Acceso Denegado";
console.log( acceso ); // muestra "Acceso Permitido"
```

## Evaluación de corto-circuito

Este es un tipo especial de evaluación para los valores booleanos. Con los operadores `||` y `&&` se evalua de izquierda a derecha.

Con el operador `||`. Este operador devuelve el primer valor verdadero.

```js
true || false
// true
```

```js
let x; // no definido
let y = 'a';
let z = 'b'; // no se evaluará
let nombre = x || y || z;
console.log(nombre); // 'a'
```

Con el operador `&&` . Este operador devuelve falso si tiene algún valor falso, pero si tiene valores verdaderos, entonces devuelve el último valor verdadero:

```js
false && true
// false
```

```js
let edad =  25;
function conducirAuto() {
  return 'Conduciendo el auto';
}
let resultado = edad > 18 && conducirAuto();
console.log(resultado); // 'Conduciendo el auto'
```

## Plantillas literales

Las plantillas literales (*template literals*) utilizan backticks (``) en vez de comillas (’’) y permiten interpolar fácilmente variables y expresiones con los strings utilizando el símbolo `${}`.

```js
let nombre = "John";
let apellido = "Doe";

let texto = `Bienvenido ${nombre} ${apellido}`;
```

## Módulos ES

Anteriormente bastaba con tener un solo script de JavaScript vinculado a una página HTML. Pero ahora en el desarrollo moderno de JavaScript, que incluye a React, se necesita “modularizar” el código de JavaScript en diferentes carpetas y archivos. Lo que crea el problema de poder exportar e importar esos archivos que contienen diferentes funciones, variables, objetos, etc.

Primero se debe exportar los objetos con la palabra clave `export`. Se puede hacer directamente en linea:

```js
// saludo.js
export const nombre = 'Juan Garcia';

export function saludar(nombre) {
  let saludo = `Hola ${nombre}`;
  return saludo;
}
```

Otra forma es exportarlos todo en uno al final de tu archivo:

```js
export { nombre, saludar };
```

El siguiente paso es importarlos al inicio del archivo en que lo utilizarás:

```js
// main.js
import { nombre, saludar } from './modulos/saludo.js';
```

Puedes renombrar las importaciones:

```js
// main.js
import {nombre as name, saludar as funcionSaludar } from './modulos/saludo.js';
```

## Promises y Async await

Dado que JavaScript es un lenguaje no bloqueante y asíncrono debido a que muchas tareas en el navegador no tienen resultados inmediatos, entonces se necesita una forma de lidiar con esos valores. Para eso se crearon las promesas.

### Promises

Una promesa representa un valor que puede estar disponible en algún momento o no estarlo. Por eso tiene los siguientes estados:

| myPromise.state | myPromise.result |
| --- | --- |
| "pending" | no definido |
| "fulfilled" | un valor |
| "rejected" | un error |

Se utilizan para llamadas asincrónicas a APIs, bases de dato, etc.

Sintaxis:

```js
let myPromise = new Promise(function(resolve, reject) {
// Codigo

  resolve(); // si se resuelve
  reject();  // si da error
});

// Si se quiere hacer algo con los resultados del promise entonces se usa el then
// que esperara al resultado
myPromise.then(
  function(value) { /* codigo */ },
  function(error) { /* codigo */ }
);
```

### Async await

Async await hace que sea posible escribir promesas de una forma que parezca código sincrónico:

- `async`: marca que una función devolverá una promesa
- `await`: marca que una declaración espere a una promesa