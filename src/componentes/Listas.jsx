
const Listas = ({agrega, cambio}) => {
    let palabra = "";
    let guardar = (e) =>{
        palabra = e.target.value;
        cambio(false);
    }

    let agregar = () =>{
        agrega(palabra);
        cambio(true);
    }

    return (
    <>
        <input onChange={guardar} type="text"/>
        <button onClick={agregar}>Agrear Tarea</button>
    </>
  )
}

export default Listas