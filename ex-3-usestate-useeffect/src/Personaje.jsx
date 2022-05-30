import React from 'react'

const Personaje = ({name,image}) => {
  return (
    <>
      <h1>Personaje</h1>
      <div>Nombre: {name}</div>
      <img src={image} alt="" width="100px"/>
    </>
  )
}

export default Personaje