import Header from "./components/Header"
import Tareas from "./components/Tareas"
import {useState } from "react"

function App() {

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
        terminada: true
    
    },
    {
        id: 3,
        texto: "ir al super",
        fecha: "01 de diciembre de 2022",
        terminada: true
    
    },
    ])

  return (
    <div className="container">
      <Header titulo = "Tareas" />
      <Tareas tareas = {tareas} /> 

    </div>
  )
}

export default App