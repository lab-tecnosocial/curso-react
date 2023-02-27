# Repaso práctico de tecnologias web

## Intro

- Sitio web vs. app web
- Arquitecturas de una app web
  - MPA. Varias páginas HTML renderizadas en el servidor (backend)
  - SPA. Una sola página renderizadas en el cliente (frontend)
- Tecnologías web frontend
  - HTML. Lenguaje de marcado. Estructura y contenido, el esqueleto
  - CSS. Lenguaje de estilo. Estilo, la pinta
  - JS. Lenguaje de programación. Interacción y programación, el movimiento
- Frameworks web
- Sintaxis básica
  - HTML
    - Elemento = etiquetas + contenido + atributos
      - Elemento, tiene etiquetas de apertura y cierre
      - Contenido
      - Atributos: name="value" o cuando son booleanos name
    - Arbol de elementos
  - CSS
    - Rulesets (conjunto de reglas)
      - Selector
      - Bloque de declaracion
      - Declaracion o regla
      - Propiedad y valor
  - JS

## HTML

- Esructura básica
  - header
    - h1
  - main
    - form
      - input
      - button
    - div.contenedor-tareas
      - ul
        - div.tarea
          - li
          - button
          - button

## CSS
- Vincular CSS *?
- Añadir clases
  - header
  - h1
  - main
    - form
      - input.entrada-tarea
      - button.boton-entrada
    - div.contenedor-tareas
      - ul.lista-tareas
        - div.tarea
          - li.tarea-item
          - button.boton-completado
          - button.boton-eliminado
- Estilo
  - Resetear estilos
  - body
    - background con gradiente (https://cssgradient.io/)
    - color
    - Altura minima
    - familia de fuente: Nunito
  - header
    - tamaño de fuente
  -header, form y contenedor de tareas
    - Altura minima
    - Centrar con flex
  - form input, form button
    - padding
    - tamaño de fuente
    - sin borde
    - background: blanco
  - form button
    - color
    - background
    - cursor: pointer
  - form button hover
  - lista-tareas
    - sin estilo
    - ancho minimo
  - tarea
    - background y coloor
    - tamaño de fuente
    - centrar con flez
  - tarea li
    - flex: 1
  - tarea-item
    - padding
  - boton-completado y boton-eliminado
    - color
    - sin borde
    - background
  - .completado
    - text-decoration
    - opacity
## JS

- Vincular JS *?
- Estructura general del archivo
  - Selectores
    - entrada-tarea para capturar el input
    - boton-entrada para añadir alguna funcion al hacer click
    - lista-tareas para anexar y remover elementos HTML
  - Event listeners
    - botonTarea -> click
    - listaTareas -> click
  - Event handlers (funciones)
    - anadirTarea()
      - prevenir default
      - crear elemento div y su clase
      - crear elemento li, su clase, contenido y anexar
      - crear boton de completado y anexar
      - crear boton eliminado y anexar
      - añadir elemento completo a lista de tareas
      - limpiar entrada
    - procesarTarea()
      - referenciar elementos con los que se trabajará
      - si es completado
      - si es eliminado

## Tarea
- Cambiar las letras +, O, x por iconos (font awesome o material icons)
- Añadir trancisiones y animaciones para las acciones de los botones (pistas visuales)
- Integrar un botón de filtrado de tareas
- Guardar a local storage la lista de tareas