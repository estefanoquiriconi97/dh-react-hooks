import React, { useRef } from 'react'

export const RickMorty = () => {
  const subtitle = useRef()

  console.log(subtitle.current)

  const changeSubtitle = () => {
    subtitle.current.style.color = 'tomato';
    subtitle.current.style.fontSize = '40px';
    subtitle.current.style.textAlign = 'center';
  }

  return (
    <div>
      <h2 ref={subtitle}> Rick and Morty </h2>
      <button onClick={changeSubtitle}>Cambiar subtítulo</button>
    </div>
  )
}
