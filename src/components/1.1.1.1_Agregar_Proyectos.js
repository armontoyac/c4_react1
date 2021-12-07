import { Fragment } from "react";


const Agregarproyecto = function (props) {

  return (
      
          <div className="card">


          <div>
            <h3>Crear Nuevo Proyecto</h3>
          </div>

          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value=""
            />
            <br />

            <label>Proyecto</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value=""
            />
            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value=""
            />
            <br />


            <label>SubAlterno Asignado</label>
            <input
              className="form-control"
              type="text"
              name="usuario_asignado"
              value=""
            />
            <br />


            <label>Finalizado?</label>
            <input
              className="form-control"
              type="text"
              name="finalizado"
              value=""
            />
            <br />


            <label>Fecha Inicial</label>
            <input
              className="form-control"
              type="text"
              name="fecha_inicial"
              value=""
            />
            <br />

          </div>

          <button className="btn btn-primary">Agregar Proyecto</button>
          <button className="btn btn-outline-primary">Cancelar</button>
            
          </div>
     
  );

}

export default Agregarproyecto;
