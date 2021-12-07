import { Fragment } from "react";

const ModificarUsuarios = function (props) {

    return (
        
        <div className="card">
      <div>
        <h3>Modificar Usuario</h3>
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

        <label>Usuario</label>
        <input
          className="form-control"
          type="text"
          name="usuario"
          value="Usuario 1"
        />
        <br />

        <label>Nombres</label>
        <input
          className="form-control"
          type="text"
          name="nombres"
          value="Nombres Usuario 1"
        />
        <br />

        <label>Tipo de Usuario</label>
        <input
          className="form-control"
          type="text"
          name="rol"
          value="SubAlterno"
        />
        <br />

      </div>
      <button className="btn btn-primary">Modificar datos del Usuario</button>
      <button className="btn btn-danger">Cancelar</button>

    </div>
   
);
}

export default ModificarUsuarios;
