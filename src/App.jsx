import { useState } from 'react'
import './App.css'
import Boton from './componentes/Boton'
import Listas from './componentes/Listas';
import Contador from './componentes/Contador';
import Buscador from './componentes/Buscador';
import Opciones from './componentes/Opciones';

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

  // let [listaLi, setlistaLi] = useState([]);
  let [LiDefault, setLiDefault] = useState(["hola", "buenas", "tardes"]);
  let [palabra, setPalabra] = useState("");

  const [valor, setvalor] = useState();

  let value = (valor)=>{
    setvalor(valor);
    console.log(valor)
  }

  let guardar = (palabra) => {
    setPalabra(palabra);
  }
  

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

      {/* <Contador></Contador> */}

      {/* <Buscador guardar={guardar}></Buscador>

      <ul>
        {
          LiDefault.map((li, index) =>{
            return(
              li.includes(palabra) ? <li key={index}>{li}</li> : ""
            )
          })
        }
      </ul> */}

      <Opciones value={value}></Opciones>
      {valor == 0 ? <h1>5</h1> : ""}
      {valor == 1 ? <h1>10</h1> : ""}
      {valor == 2 ? <h1>20</h1> : ""}
    </>
  )
}

export default App
