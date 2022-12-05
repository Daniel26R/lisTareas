import React, {useState} from "react"

const AddTarea = ({onAdd}) => {

    const [texto, setTexto] = useState("")
    const [fecha, setfecha] = useState("")
    const [terminada, setTerminada] = useState(false)

    const onSubmit = (e) =>{

        e.preventDefault()

        if (!texto){
            alert("debes teclear una descripcion")
            return
        }

        if (!fecha){
            alert("debes de teclear una fecha")
            return
        }

        onAdd ({texto, fecha, terminada})

        setTexto("")
        setfecha("")
        setTerminada(false)
    }


  return (
     <form className = "add-form" onSubmit = {onSubmit}>

        <div className="form-control">
            <label>Tarea</label>
            <input type="text" 
            placeholder = "Teclea una descripcion"
            value = {texto}
            onChange = {(e) => setTexto(e.target.value)}
            />
        </div>

        <div className="form-control">
            <label>Fecha</label>
            <input type="text" 
            placeholder = "Teclea una fecha"
            value = {fecha}
            onChange = {(e) => setfecha(e.target.value)}
            />
        </div>

        <div className="form-control form-control-check">
            <label>Terminada</label>
            <input type="checkbox"
            checked = {terminada} 
            value = {terminada}
            onChange = {(e) =>  setTerminada(e.currentTarget.checked)}
            />
        </div>
        <input type="submit" value = "Guardar" className="btn btn-block"/>

     </form>
  )
}

export default AddTarea