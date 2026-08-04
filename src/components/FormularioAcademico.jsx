import { useState } from "react";
function Academico({persona, setPersona, anterior, siguiente}){
    
    const [formación, setFormación] = useState("");
    const [titulo, setTitulo] = useState("");
    const [cursos, setCursos] = useState("");
    const [institución, setInstitución] = useState("");
    const [año, setAño] = useState("");

    const continuar = (e) => {

        e.preventDefault();
        alert("Datos academicos ingresados correctamente");
        if(siguiente){
            siguiente();
        }
    }
    return (
        <div className="academico">
            <h2>DATOS ACADEMICOS</h2>

            <form onSubmit={continuar}>
                <div className="Grupo">
                    <label>Nivel de formación</label>
                    <select>
                        <option>Técnico</option>
                        <option>Tecnólogo</option>
                        <option>Profesional</option>
                        <option>Maestría</option>
                    </select>
                </div>

                <div className="Grupo">
                    <label>Titulo Obtenido</label>
                    <input type="text" placeholder="Ingrese el titulo"/>
                </div>

                <div className="Grupo">
                    <label>Cursos Realizados</label>
                    <input type="text" placeholder="Escriba sus cursos"/>
                </div>

                <div className="Grupo">
                    <label>Institución Educativa</label>
                    <input type="text" placeholder="Ingrese la institución"/>
                </div>

                <div className="Grupo">
                    <label>Año de Graduación</label>
                    <input type="text" placeholder="Ejemplo: 2025"/>
                </div>

                <button type="button" onClick={anterior}> ← Anterior </button>
                <button type="submit"> Continuar → </button>
            </form>
        </div>
    )
}

export default Academico