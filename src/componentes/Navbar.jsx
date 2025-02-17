import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link to="/"><li>Ejercicio1</li></Link>
            <Link to="/Ejercicio2"><li>Ejercicio2</li></Link>
            <Link to="/Ejercicio3"><li>Ejercicio3</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar