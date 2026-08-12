import { useState } from "react";
import Header from './components/header'
import Formulario from './components/FormularioDatos'
import Footer from './components/footer'
import Academico from "./components/FormularioAcademico";
import Experiencia from "./components/FormularioExperiencia";
import VistaPrevia from "./components/VistaPrevia";
import './App.css'

function App() {

  const[paso, setPaso] = useState(1);

  const [persona, setPersona] = useState({
    foto: null,
    nombre: "",
    ciudad: "",
    edad: "",
    programa: "",
    correo:"",
    ficha:"",
    jornada:"Mañana",

    //Informacion de estudios
    nivel:"",
    titulo:"",
    cursos: [],
    institución:"",
    anio:"",


    //Experiencia laborales
    experiencias:[]
  })

  return (
    <>
    <Header/>
    {
      paso == 1 && <Formulario
        persona = {persona}
        setPersona = {setPersona}
        siguiente = {() => setPaso(2)}
        />
    }

    {
      paso == 2 && <Academico
      persona={persona}
      setPersona={setPersona}
      anterior = {() => setPaso(1)}
      siguiente={() => setPaso(3)}
      />
    }

    {
      paso == 3 && <Experiencia
      persona={persona}
      setPersona={setPersona}
      anterior={() => setPaso(2)}
      siguiente={() => setPaso(4)}
      />
    }

    {
      paso == 4 && <VistaPrevia
      persona={persona}
      anterior={() => setPaso(3)}
      />
    }
    <Footer/>
    </>
  )
}
export default App