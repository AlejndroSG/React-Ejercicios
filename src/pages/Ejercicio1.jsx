import React, { use } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../componentes/Card';
import css from './Ejercicio1.module.css'

const Ejercicio1 = () => {
    const [productos, setProductos] = useState([])
    const [palabra, setPalabra] = useState("")
    
    let guardarPalabra = (palabra) =>{
        setPalabra(palabra.toLowerCase());
    }

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(respuesta => respuesta.json())
        .then(producto => setProductos(producto.products))
    }, []);
  
    return (
    <>
        <form action="">
            <input onChange={(e) => guardarPalabra(e.target.value)} className='border' type="text" placeholder={palabra} value={palabra} />
            <p className={css.p}>Hola</p>
        </form>
        <Card palabra={palabra} productos={productos}/>
    </>
  )
}

export default Ejercicio1