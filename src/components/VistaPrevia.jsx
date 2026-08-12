function VistaPrevia({persona, anterior}){
    return (
        <div className="formulario">
            <h2>Vista Previa</h2>
            <h3>Datos Personales</h3>

            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
            <p>Ciudad: {persona.ciudad}</p>
            <p>Programa: {persona.programa}</p>
            <p>Correo: {persona.correo}</p>
            <p>Ficha: {persona.ficha}</p>
            <p>Jornada: {persona.jornada}</p>

            <h3>Información Academica</h3>

            <p>Nivel de formación:{persona.nivel}</p>
            <p>Título Obtenido:{persona.titulo}</p>
            <p>Institución:{persona.institución}</p>
            <p>Año de Graduación:{persona.anio}</p>

            <div className="detalle">
                <span>Cursos</span>
                <div>
                    {persona.cursos.map((curso,indice) =>(
                        <p key={indice}>
                            {curso}
                        </p>
                    ))}
                </div>
            </div>

            <h3>Experiencia Laboral</h3>

            <p>Empresa:{persona.empresa}</p>
            <p>Tiempo de Experiencia: {persona.tiempo}</p>
            <p>Cargo:{persona.cargo}</p>
            <p>Funciones Desempeñadas{persona.funciones}</p>

            <button type="button" onClick={anterior}>
                Anterior
            </button>
        </div>
    )
}

export default VistaPrevia