import { useState } from 'react'
import foto from "./assets/Foto.jpg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h3>JUAN SEBASTIAN BARRAGAN SERRATO</h3>
      <h4>ANALISIS Y DESARROLLO DE SOFTWARE</h4>
      <h1>HOJA DE VIDA APRENDIZ</h1>
      <img src={foto} alt="Foto de perfil" width="250"></img>
      <p>Nombre: Juan Sebastian Barragan Serrato</p>
      <p>Edad: 18 años</p>
      <p>Ciudad: Bogotá D.C</p>
      <p>Correo electronico: sebastianbarragan20204@gmail.com</p>
      <p>Programa de formación: Análisis y desarrollo de software</p>
    </div>
    <br></br>

    <div>
      <h1>CURSOS REALIZADOS</h1>
      <p>
        Bilingüismo: Nivel 1-2 <br></br>
        Técnico: Programación de software
      </p>
    </div>

    <div>
      <h1>OBEJTIVO PROFESIONAL</h1>
      <p>¿Por qué desea aprender React?
        <br></br>
        Para mejorar mis habilidades como desarollador.
      </p>
      <br></br>
      <p>¿En qué tipo de proyectos le gustaría utilizarlo?</p>
      <p>
        En el sector público, marketing y finanzas.
      </p>
    </div>
    <br></br>
    <div>
      <button>Conoce más sobre mí</button>
    </div>
    </>
  )
}

export default App