import { useState } from "react";
function Experiencia({ persona, setPersona, anterior, siguiente }) {

    const [empresa, setEmpresa] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [cargo, setCargo] = useState("");
    const [funciones, setFunciones] = useState("");

    const agregarExperiencia = () => {
        if(
            empresa.trim() === "" ||
            tiempo.trim() === "" ||
            cargo.trim() === "" ||
            funciones.trim() === ""
        ){
            alert("Complete todos los campos de la experiencia");
            return
        }
        const nuevaExperiencia = {
            empresa: empresa,
            tiempo: tiempo,
            cargo: cargo,
            funciones: funciones
        }
        setPersona({...persona,experiencias:[...persona.experiencias,nuevaExperiencia]})

        // Limpiar campos
        setEmpresa("");
        setTiempo("");
        setCargo("");
        setFunciones("");
    }
    const eliminarExperiencia = (indice) => {
        const experienciasActualizadas =
            persona.experiencias.filter(
                (_, i) => i !== indice
            )
        setPersona({...persona,experiencias: experienciasActualizadas});
    }
    const continuar = (e) => {
        e.preventDefault();
        if (persona.experiencias.length === 0) {
            alert("Agregue al menos una experiencia laboral");
            return
        }
        alert("Datos de experiencia cargados correctamente");
        if (siguiente) {
            siguiente();
        }
    }
    return(
        <div className="experiencia">
            <h2>EXPERIENCIA LABORAL</h2>
            <form onSubmit={continuar}>
                <div className="Grupo">
                    <label>Empresa</label>
                    <input type="text" placeholder="Nombre de la empresa" 
                    value={empresa} 
                    onChange={(e) => setEmpresa(e.target.value)}/>
                </div>
                <div className="Grupo">
                    <label>Tiempo de Experiencia</label>
                    <input type="text" placeholder="Ejemplo: 1 año"
                    value={tiempo}
                    onChange={(e) => setTiempo(e.target.value)}/>
                </div>

                <div className="Grupo">
                    <label>Cargo</label>
                    <input type="text" placeholder="Cargo desempeñado" 
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}/>
                </div>

                <div className="Grupo">
                    <label>Funciones Desempeñadas</label>
                    <input type="text" placeholder="Describa las funciones realizadas" 
                    value={funciones}
                    onChange={(e) => setFunciones(e.target.value)}/>
                </div>

                <button type="button" onClick={agregarExperiencia}>Agregar</button>
                <div className="lista-experiencias">
                    {
                    persona.experiencias.map(
                        (experiencia, indice) => (
                        <div 
                        className="experiencia-item" 
                        key={indice}
                        >
                            <span>Empresa:{" "}
                                {experiencia.empresa}
                            </span>
                            
                            <span>Tiempo:{" "}
                                {experiencia.tiempo}
                            </span>
                            <span>
                                Cargo:{" "}
                                {experiencia.cargo}
                            </span>
                            <span>
                                Funciones:{" "}
                                {experiencia.funciones}
                            </span>
                            <button type="button" onClick={() => eliminarExperiencia(indice)}>Eliminar</button>
                        </div>
                    ))}
                </div>
            <button type="button" onClick={anterior}>← Anterior</button>
            <button type="submit"> Finalizar →</button>
            </form>
        </div>
    )
}
export default Experiencia;