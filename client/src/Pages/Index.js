import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import Editor from "../Components/Editor";
import Service from "../Services/Service";

function Index() {
    const [ value, setValue ] = useState("")
    const [ response, setResponse ] = useState("")

    const changeText = (valueA) => {
        setValue(valueA)
    }

    const handlerPostParse = () => {
        Service.parse(value)
        .then(({consola}) => {
            setResponse(consola)
        })
    }

    const handlerGetServerInfo = () => {
        Service.ping()
        .then((response) => {
            setResponse(JSON.stringify(response))
        })
    }

    const handlerClear = () => {
        setResponse("")
    }

    const buttonTraducir = <button type="button" class="btn btn-outline-success" onClick={handlerPostParse}>Traducir</button>
    const buttonVivo = <button type="button" class="btn btn-outline-warning" onClick={handlerGetServerInfo}>Traducir</button>
    const buttonLimpiar = <button type="button" class="btn btn-outline-danger" onClick={handlerClear}>Limpiar</button>

    return (
        <>
            <NavBar />
            <h1>HOLA MUNDO</h1>
            {
                buttonVivo
            }
            <Editor text={"Consola Entrada"} handlerChange={changeText} rows={5} comp = {buttonTraducir}/>
            <Editor text={"Consola Salida"} value={response} rows={10} comp = {buttonLimpiar}/>
        </>
    )
}

export default Index;