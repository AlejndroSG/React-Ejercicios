import { useState } from 'react'
import './App.css'
import Boton from './componentes/Boton'
import Listas from './componentes/Listas';
import Contador from './componentes/Contador';

function App() {
  // let [numero, setnumero] = useState(0)
  // const [estado, setestado] = useState(true);
  // const [tareas, setTareas] = useState([])

  // let cambiar = (estado) =>{
  //   setestado(estado);
  //   if(estado){
  //     setnumero(numero += 1);
  //   }else{
  //     setnumero(numero -= 1);
  //   }
  // }

  // let cambiar = (estado) => {
  //   setestado(estado);
  // }

  // let crearLi = (palabra) =>{
  //   setTareas([...tareas, palabra]);
  // }
  // let eliminarTarea = (index)=>{
  //   const nuevoArray = tareas.filter((maite, tarea) => tarea !== index);
  //   setTareas(nuevoArray);
  // }

  return (
    <>
      {/* <p>{numero}</p>
      <Boton variable={cambiar}></Boton> */}

      {/* <h1>{estado ? "Completado" : "No completado"}</h1>
      <Listas agrega={crearLi} cambio={cambiar}></Listas>
      <ul>
        {
          tareas.map((tarea, index) =>{
            return(
              <li key={index}>{tarea} <button onClick={() => eliminarTarea(index)}>Eliminar</button></li>
            )
          })
        }
      </ul> */}

      <Contador></Contador>
    </>
  )
}

export default App
