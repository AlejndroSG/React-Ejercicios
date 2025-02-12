import React from 'react'

const Buscador = ({guardar}) => {
    let llevar = (e)=>{
        let palabra = e.target.value;
        // console.log(palabra);
        guardar(palabra)
    }
  return (
    <>
        <input type="search" onChange={(e) => llevar(e)}/>
    </>
  )
}

export default Buscador