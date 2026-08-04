import { useState } from "react";
function Experiencia({anterior}){

    const [empresa, setEmpresa] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [cargo, setCargo] = useState("");
    const [funciones, setFunciones] = useState("");

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
                    <input type="text" placeholder="Nombre de la empresa"/>
                </div>

                <div className="Grupo">
                    <label>Tiempo de Experiencia</label>
                    <input type="text" placeholder="Eejmeplo: 1"/>
                </div>

                <div className="Grupo">
                    <label>Cargo</label>
                    <input type="text" placeholder="Cargo desempeñado"/>
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