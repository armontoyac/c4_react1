import { Fragment } from "react";

const AgregarActividades = function (props) {
    return (
        <Fragment>
            <div className="card">
            <div>
            <h3>Agregar Actividad</h3>
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
              value="Proyecto 1"
            />
            <br />

            <label>Descripción</label>
            <input
              className="form-control"
              type="text"
              name="descripcion"
              value="Actividad 1"
            />
            <br />

            <label>Duración estimada en horas</label>
            <input
              className="form-control"
              type="text"
              name="horas_planeado"
              value="10"
            />
            <br />

            <label>Estado</label>
            <input
              className="form-control"
              type="text"
              name="estado"
              value="Iniciada"
            />
            <br />

            <label>Fecha Inicial</label>
            <input
              className="form-control"
              type="text"
              name="fecha_inicio"
              value="2021-11-25"
            />
            <br />
          </div>
          <button className="btn btn-primary">Agregar Actividad</button>
          <button className="btn btn-danger">Cancelar</button>
            </div>
        </Fragment>
    );
}

export default AgregarActividades;