# JS Moderno

React hace uso de las últimas características de JavaScript. Es por eso que debes conocer las últimas variantes de algunas funciones de JS, tanto para leer el código en React escrito por otros como para embarcarte en su desarrollo.

## Tres formas de declarar de funciones

En React constantemente estarás definiendo componentes funciones, por lo que debes conocer las tres formas de definir funciones:

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

Esta tiene tres variantes:
- Si solo se tiene un parámetro, entonces el paréntesis se puede omitir:

```js
const mostrarTexto = texto => alert("El texto es: " + texto);
```

- Si no hay parámetros, entonces se puede dejar el paréntesis vacío, pero debe estar presente:

```js
cons decirHola = () => alert("Hola");
```

- Si existe más de una linea de código en el cuerpo de la función se debe usar `{ }` y la palabra clave `return`

```js
const suma = (a, b) => {
   let resultado = a + b;
   return resultado;
};
```

## Operador spread

Este operador  (`...`)  nos permite copiar el contenido de un array u objeto en otro array u objeto. Dado que en React se privilegia las funciones puras y la inmutabilidad, este operador se usa mucho para actualizar arrays y objetos, creándolos de nuevo a partir de los arrays y objetos antiguos.

Con arrays:

```js
const numerosUno = [1, 2, 3];
const numerosDos = [4, 5, 6];
const numerosCombinados = [...numerosUno, ...numerosDos];
```

Con objetos:

```js
const miVehiculo = {
  marca: 'Ford',
  modelo: 'Mustang',
  color: 'Rojo'
}

const actualizarVehiculo = {
  tipo: 'Auto',
  anio: 2021, 
  color: 'Amarillo'
}

const miVehiculoActualizado = {...miVehiculo, ...actualizarVehiculo}
```

## Iteraciones en arrays

Si bien se pueden hacer muchas cosas con los loops `for` en JavaScript, en muchas ocasiones es más simple y efectivo usar los iteradores de los arrays, que son formas de iterar más funcionales y declarativas.

```js
// Forma antigua imperativa
array = [ 1, 2, 3, 4, 5, 6 ];
for (index = 0; index < array.length; index++) {
    console.log(array[index]);

```

**forEach**:

```js
array.forEach(e => console.log(e))
```

**map** para mutar el arreglo. Se usa mucho en React para crear componentes a partir de un array con objetos o un JSON:

```js
array.map(e => Math.pow(e, 2))
```

**filter**, se lo utiliza mucho en React para filtrar el contenido de un estado que luego se renderiza en el UI:

```js
array.filter(e =>  e % 2 == 0);
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
En React se lo suele usar mucho para desempaquetar los valores de los Props y los Hooks.

## Operador ternario

Una alternativa para expresar condicionales de forma más compacta. Se usa mucho en React para renderizar componentes condicionalmente

```js
// sintaxis
condicion ? expresionSiTrue : expresionSiFalse
```

```js
// ejemplo
let esMiembro = false;
console.log("La Cuota es de:  " + (esMiembro ? "$2.00" : "$10.00"))

let check = true;
let acceso = check ? "Acceso permitido" : "Acceso Denegado";
console.log( acceso );
```

## Evaluación de corto-circuito

Este es un tipo especial de evaluación para los valores booleanos. Con los operadores `||` y `&&` se evalua de izquierda a derecha. También muy usados en React para renderizar componentes condicionalmente.

Con el operador `||` (OR). Este operador devuelve el primer valor verdadero. 
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

Con el operador `&&` (AND) . Este operador devuelve falso si tiene algún valor falso, pero si tiene valores verdaderos, entonces devuelve el último valor verdadero:

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

Las plantillas literales (*template literals*) utilizan backticks (\` \`) en vez de comillas (’ ’) y permiten interpolar fácilmente variables y expresiones con strings utilizando el símbolo `${}` (interpolación de strings).

```js
let nombre = "Juan";
let apellido = "Hacedor";

let texto = `Bienvenido a la comarca ${nombre} ${apellido}`;
```

## Módulos ES

Anteriormente bastaba con tener un solo script de JavaScript enlazado a una página HTML. Pero ahora en el desarrollo moderno de JavaScript, que incluye a Node.js y React, se necesita “modularizar” el código de JavaScript en diferentes carpetas y archivos. Lo que a su vez genera la necesidad de poder exportar e importar esos archivos que contienen diferentes funciones, variables, objetos, etc.

Primero se debe exportar los objetos con la palabra clave `export`. Se puede hacer directamente en linea:

```js
// saludo.js
export const nombre = 'Juan Garcia';

export function saludar(nombre) {
  let saludo = `Hola ${nombre}`;
  return saludo;
}
```

Otra forma es exportarlos es con una declaración al final de tu archivo:

```js
export { nombre, saludar };
```

El siguiente paso es importarlos al inicio del archivo en que lo utilizarás:

```js
// main.js
import { nombre, saludar } from './modulos/saludo.js';
```

Tambien puedes renombrar las importaciones para evitar colisión de nombres:

```js
// main.js
import {nombre as name, saludar as funcionSaludar } from './modulos/saludo.js';
```
Existe también un tipo especial de exportación por "default" que solo se puede aplicar un solo objeto del archivo y que es más directa y no requiere el uso de llaves:

En linea: 
```js
// saludo.js
export default function saludar(nombre) {
  let saludo = `Hola ${nombre}`;
  return saludo;
}
```
O al final:

```js
export default saludar;
```
Y se importa de la siguiente forma:

```js
// main.js
import saludar from './modulos/saludo.js';
```
## Promises y Async await

Dado que JavaScript es un lenguaje no bloqueante y asíncrono debido a que muchas tareas en el navegador no tienen resultados inmediatos y el interprete de JavaScript debe continuar, entonces se necesita una forma de lidiar con esos valores. Para eso se crearon las promesas.

### Promises

Una promesa representa un valor que puede estar disponible en algún momento o no estarlo. Por eso tiene los siguientes estados:

| miPromesa.state | miPromesa.result |
| --------------- | ---------------- |
| "pending"       | no definido      |
| "fulfilled"     | un valor         |
| "rejected"      | un error         |

Se utilizan para llamadas a APIs, bases de datos, etc.

Sintaxis:

```js
let miPromesa = new Promise(function(resolve, reject) {
  // Codigo

  resolve(); // si se resuelve
  reject();  // si da error
});

// Si se quiere hacer algo con los resultados del promise entonces 
// se usa el then que esperará al resultado
miPromesa.then(
  function(value) { /* codigo para procesar value */ },
  function(error) { /* codigo para procesar error */ }
);
```

### Async await

Async await hace que sea posible trabajar con promesas de una forma que parezca código sincrónico:

- `async`: marca que una función devolverá una promesa
- `await`: marca que una declaración espere a una promesa

```js
async function conPromesa() {
  let resultado = await algunaPromesa(); // espera
  alert(resultado); // se ejecuta solo cuando resultado se resuelve
}
```