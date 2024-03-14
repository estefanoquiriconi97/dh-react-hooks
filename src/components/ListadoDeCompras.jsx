import React, { useState } from 'react'

export const ListadoDeCompras = () => {
  const [listadoDeCompras, setListadoDeCompras] = useState([
    'Detergente',
    'Café',
    'Yerba',
  ])

  const agregarItem = (event) => {
    event.preventDefault()
    const nuevoItem = event.target.nuevoItem.value
    setListadoDeCompras([...listadoDeCompras, nuevoItem])
    event.target.nuevoItem.value = ''
  }

  return (
    <div>
      <h1>Listado de compras</h1>
      <ul>
        {listadoDeCompras.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <form action='' onSubmit={agregarItem} >
        <input type='text' name='nuevoItem' placeholder='' />
        <button>Agregar</button>
      </form>
    </div>
  )
}
