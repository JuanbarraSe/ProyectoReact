import { useState } from "react";
function Formulario({siguiente}){

    const [foto, setFoto] = useState(null);
    const [nombre, setNombre] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [edad, setEdad] = useState("");
    const [programa, setPrograma] = useState("");
    const [correo, setCorreo] = useState("");
    const [ficha, setFicha] = useState("");
    const [jornada, setJornada] = useState("Mañana");

    const continuar = (e) => {

        e.preventDefault();
        alert("Los datos fueron capturados correctamente");
        if(siguiente){
            siguiente();
        }
    }
    return (
        <div className="formulario">
            <h2>Registro de Aprendices</h2>

            <form onSubmit={continuar}>

                <div className="Grupo">
                    <label>Fotografia</label>
                    <input type="file" accept="image/*"
                    onChange={(e) => setFoto(e.target.files[0])}
                    />
                </div>

                <div className="Grupo">
                    <label>Nombre Completo</label>
                    <input type="text" placeholder="Ingrese su nombre"
                    value={nombre}
                    onChange = {(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="Grupo">
                    <label>Ciudad</label>
                    <input type="text" placeholder="Ingrese su ciudad"
                    value={ciudad} 
                    onChange={(e) => setCiudad(e.target.value)}
                    />
                </div>

                <div className="Grupo">
                    <label>Edad</label>
                    <input type="number" placeholder="Ingrese su edad"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    />
                </div>

                <div className="Grupo">
                    <label>Programa de formación</label>
                    <input type="text" placeholder="Ejemplo: ADSO"
                    value={programa}
                    onChange={(e) => setPrograma(e.target.value)}
                    />
                </div>

                <div className="Grupo">
                    <label>Correo Electrónico</label>
                    <input type="email" placeholder="correo@misena.edu.co"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>

                <div className="Grupo">
                    <label>Número de ficha</label>
                    <input type="number" placeholder="Ingrese su ficha"
                    value={ficha}
                    onChange={(e) => setFicha(e.target.value)}
                    />
                </div>

                <div className="Grupo">
                    <label>Jornada</label>
                    <select value={jornada}
                    onChange={(e) => setJornada(e.target.value)}>
                        <option>Mañana</option>
                        <option>Tarde</option>
                        <option>Noche</option>
                        <option>Mixta</option>
                    </select>
                </div>

                <button type="submit">
                    Continuar Registro
                </button>
            </form>
        </div>
    )
}
export default Formulario