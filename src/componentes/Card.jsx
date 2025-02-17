import React from 'react'

const Card = ({productos, palabra}) => {
  return (
    <>
        <div className='grid grid-cols-3 gap-4'>
            {
            productos.map((producto) =>(
                producto.title.toLowerCase().includes(palabra) ?
                <div style={{backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`}} className='border p-4 m-4' key={producto.id}>
                    <h1>{producto.title}</h1>
                    <p>{producto.description}</p>
                    <p>{producto.price}</p>
                    <img src={producto.images[0]} alt="" />
                </div>
                :
                ""
            ))
            }
        </div>
    </>
  )
}

export default Card