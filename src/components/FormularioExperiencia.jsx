import { useState } from "react";
function Experiencia({persona, setPersona, anterior}){

    const continuar = (e) => {
        e.preventDefault();
        alert("Datos de experiencia cargados correctamente");
        if(siguiente){
            siguiente();
        }
    }

    return (
        <div className="experiencia">
            <h2>EXPERIENCIA</h2>

            <form onSubmit={continuar}>

                <div className="Grupo">
                    <label>Empresa</label>
                    <input type="text" placeholder="Nombre de la empresa"
                    value={persona.empresa}
                    onChange={(e) => setPersona({...persona,empresa:e.target.value})}/>
                </div>

                <div className="Grupo">
                    <label>Tiempo de Experiencia</label>
                    <input type="text" placeholder="Ejemplo: 1"
                    value={persona.tiempo}
                    onChange={(e) => setPersona({...persona,tiempo:e.target.value})}/>
                </div>

                <div className="Grupo">
                    <label>Cargo</label>
                    <input type="text" placeholder="Cargo desempeñado"
                    value={persona.cargo}
                    onChange={(e) => setPersona({...persona,cargo:e.target.value})}/>
                </div>

                <div className="Grupo">
                    <label>Funciones Desempeñadas</label>
                    <input type="text" placeholder="Describa las funciones realizadas"/>
                </div>

                <button type="button" onClick={anterior}> ← Anterior </button>
                <button type="submit"> Finalizar → </button>
            </form>
        </div>
    )
}
export default Experiencia