import { Fragment } from "react";

const Modificarproyecto = function (props) {

    return (
        
        <div className="card">


        <div>
          <h3>Modificar Proyecto</h3>
        </div>

        <div className="form-group">
          <label>ID</label>
          <input
            className="form-control"
            readOnly
            type="text"
            name="id"
            value="1"
          />
          <br />

          <label>Proyecto</label>
          <input
            className="form-control"
            type="text"
            name="nombre"
            value="Hoteles"
          />
          <br />

          <label>Descripción</label>
          <input
            className="form-control"
            type="text"
            name="descripcion"
            value="Aplicación para gestión de reservas de un hotel"
          />
          <br />


          <label>SubAlterno Asignado</label>
          <input
            className="form-control"
            type="text"
            name="usuario_asignado"
            value="Usuario 1"
          />
          <br />


          <label>Finalizado?</label>
          <input
            className="form-control"
            type="text"
            name="finalizado"
            value="No"
          />
          <br />


          <label>Fecha Inicial</label>
          <input
            className="form-control"
            type="text"
            name="fecha_inicial"
            value="2021-10-12"
          />
          <br />

        </div>

        <button className="btn btn-primary">Modificar Proyecto</button>
        <button className="btn btn-danger">Cancelar</button>
          
        </div>
   
       
    );

}

export default Modificarproyecto;
