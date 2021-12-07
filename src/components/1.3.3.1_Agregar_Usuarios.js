import { Fragment } from "react";

const AgregarUsuarios = function (props) {

    return (
        
            <div className="card">
          <div>
            <h3>Crear Nuevo Usuario</h3>
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

            <label>Usuario</label>
            <input
              className="form-control"
              type="text"
              name="usuario"
              value=""
            />
            <br />

            <label>Nombres</label>
            <input
              className="form-control"
              type="text"
              name="nombres"
              value=""
            />
            <br />

            <label>Tipo de Usuario</label>
            <input
              className="form-control"
              type="text"
              name="rol"
              value=""
            />
            <br />

          </div>
          <button className="btn btn-primary">Agregar Usuario</button>
          <button className="btn btn-danger">Cancelar</button>

        </div>
       
    );

}

export default AgregarUsuarios;
