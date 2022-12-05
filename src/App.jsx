import Header from "./components/Header"
import Tareas from "./components/Tareas"
import AddTarea from "./components/AddTarea"
import {useState } from "react"


function App() {

  const [mostrarForm, setMostrarForm] = useState(false)

  const [tareas, setTareas] = useState([
    
    {
        id: 1,
        texto: "ir al cine",
        fecha: "29 de noviembre de 2022",
        terminada: true
    
    },
    {
        id: 2,
        texto: "ir portaquitos de pastor",
        fecha: "30 de noviembre de 2022",
        terminada: false
    
    },
    {
        id: 3,
        texto: "ir al super",
        fecha: "01 de diciembre de 2022",
        terminada: false
    
    },
    ])

    // borrar una tarea

    const borrarTarea = (id) =>{
      setTareas(tareas.filter((tarea)=> tarea.id !==id))
    }

    // cambiar el estatus de la tarea

    const marcarTarea = (id) =>{
      setTareas(tareas.map((tarea) => tarea.id ==id ? {...tarea, terminada: !tarea.terminada} : tarea))
    }

    // agragar una tarea

    const agregarTarea = (tarea)=>{
       const id = Math.floor(Math.random() * 10000) + 1

       const nuevaTareas ={id, ...tarea}

       setTareas([...tareas, nuevaTareas])
    }

  return (
    <div className="container">
      <Header titulo = "Tareas" mostrarForm ={mostrarForm} onAdd = {() => setMostrarForm(!mostrarForm)} />
      {mostrarForm && <AddTarea onAdd = {agregarTarea }/>}
      {tareas.length > 0 ? <Tareas tareas = {tareas} onDelete = {borrarTarea} onToggle ={marcarTarea}/> : "No hay tareas que mostrar"}

    </div>
  )
}

export default App