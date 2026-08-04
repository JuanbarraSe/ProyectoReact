import { useState } from "react";
function Academico({persona, setPersona, anterior, siguiente}){

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
                    <select value={persona.nivel}
                    onChange={(e) => setPersona({...persona,nivel:e.target.value})}>
                        <option>Técnico</option>
                        <option>Tecnólogo</option>
                        <option>Profesional</option>
                        <option>Maestría</option>
                    </select>
                </div>

                <div className="Grupo">
                    <label>Titulo Obtenido</label>
                    <input type="text" placeholder="Ingrese el titulo"
                    value={persona.titulo}
                    onChange={(e) => setPersona({...persona,titulo:e.target.value})}/>
                </div>

                <div className="Grupo">
                    <label>Cursos Realizados</label>
                    <input type="text" placeholder="Escriba sus cursos"
                    value={persona.cursos}
                    onChange={(e) => setPersona({...persona,cursos:e.target.value})}/>
                </div>

                <div className="Grupo">
                    <label>Institución Educativa</label>
                    <input type="text" placeholder="Ingrese la institución"
                    value={persona.institución}
                    onChange={(e) => setPersona({...persona,institución:e.target.value})}/>
                </div>

                <div className="Grupo">
                    <label>Año de Graduación</label>
                    <input type="text" placeholder="Ejemplo: 2025"
                    value={persona.anio}
                    onChange={(e) => setPersona({...persona,anio:e.target.value})}/>
                </div>

                <button type="button" onClick={anterior}> ← Anterior </button>
                <button type="submit"> Continuar → </button>
            </form>
        </div>
    )
}

export default Academico