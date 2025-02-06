import React, { useState } from 'react'

const Contador = () => {
    const [palabra, setpalabra] = useState("");
    let [contador, setcontador] = useState(10);
    const [contador2, setcontador2] = useState(0);
    const [tema, settema] = useState("black");
  
    let cambiar = (e) =>{
        let cont = contador - contador2;
        // setpalabra(e.target.value);
        setcontador2(e.target.value.length);
        if(cont == 0){
            settema("green");
        }
        if(cont < 0){
            settema("red");
        }else{
            settema("black");
        }
        console.log(cont)

        // console.log(e.target.value)
        // cambiarcontador();
    }

    // let cambiarcontador = () =>{
    //     setcontador(contador-palabra.length)
    // }

    return (
    <>
        <p style={{color: tema}}>Le quedan {contador-contador2} caracteres</p>
        <input onChange={cambiar} type="text" />
    </>
  )
}

export default Contador