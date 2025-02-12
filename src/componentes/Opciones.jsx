import React from 'react'

const Opciones = ({value}) => {
  return (
    <>
        <select onChange={(e) => value(e.target.value)}>
            <option value="0">5</option>
            <option value="1">10</option>
            <option value="2">20</option>
        </select>
    </>
  )
}

export default Opciones