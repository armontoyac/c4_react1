import { Fragment, useState } from "react";



const CrudActividades = function (props) {
    return (
        <Fragment>
            <div className="container">
                <div className="card text-center">
                    <div className="card-body">
                        <h5 className="card-title">Gestión de actividades del proyecto: </h5>
                        
                    </div>
                </div>


                <div class="card w-100">
                    <div class="card-body">
                        <h5 class="card-title">Actividad 1</h5>
                        <p class="card-text">Descripción del desarrollo de la actividad</p>
                        <a href="#3" class="btn btn-outline-primary">Modificar</a>                    
                        <a href="#3" class="btn btn-outline-primary">Borrar</a>
                    </div>
                </div>

                <div class="card w-100">
                    <div class="card-body">
                        <h5 class="card-title">Actividad 2</h5>
                        <p class="card-text">Descripción del desarrollo de la actividad</p>
                        <a href="#3" class="btn btn-outline-primary">Modificar</a>                    
                        <a href="#3" class="btn btn-outline-primary">Borrar</a>
                    </div>
                </div>    

                <div class="card w-100">
                    <div class="card-body">
                        <h5 class="card-title">Actividad 3</h5>
                        <p class="card-text">Descripción del desarrollo de la actividad</p>
                        <a href="#3" class="btn btn-outline-primary">Modificar</a>                    
                        <a href="#3" class="btn btn-outline-primary">Borrar</a>
                    </div>
                </div>   

                    
            </div>
        </Fragment>
        
    );
}

export default CrudActividades;