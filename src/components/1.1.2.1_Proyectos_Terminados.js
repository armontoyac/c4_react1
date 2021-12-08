import { Fragment, useState } from "react";
import ProyectListItem from "./ProyectListItem";
import dataProyectos from "../Data/dataProyectos";

const ProyectosTerminados = function (props) {

    const [ lista_datos, setListaDatos ] = useState(props.proyectos);

    // const lista_datos = props.proyectos;

    // const [ lista_datos, setListaDatos ] = useState([
    //     { id:"1", nombre: "Sistema de Control de Reservas", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", director:"MisionTIC 2022", completado: true },
    //     { id:"3", nombre: "Sistema de Reconocimiento Facial de Mascarillas", fechaInicio: "11/12/2021", fechaFinal: "31/12/2021", descripcion: "Sistema para reconocer si las personas traen o no puesta la mascarilla.", director:"MisionTIC 2022", completado: true },
    //   ]);
      
    const listaProyectos = lista_datos.map ( function(p) 
        { if (p.finalizado == "Si") {
            return <ProyectListItem 
                key={ p.id }
                layout="ProyTerminados"
                {...p}
            />
    }}
    );

    return (
        <Fragment>
             <div class="card text-center">
                <div class="card-body">
                    <h2 class="card-title">Informe Proyectos Terminados</h2>
                    <p class="card-text">Proyectos que a la fecha han finalizado su ejecución.</p>
                </div>
            </div>
            <div className="container">
                <div className="list-group mt-lg-5">{listaProyectos}</div>
                {/* <Paginator /> */}
            </div>
    </Fragment>
    );
}

export default ProyectosTerminados;