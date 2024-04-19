import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ estudiante, estudiantes, setEstudiante, setEstudiantes }) => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();

    if ([documento, nombre, apellido, telefono, email].includes("")) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    const obj = { documento, nombre, apellido, telefono, email };
    if (estudiante.id) {
      obj.id = estudiante.id;
      const lista = estudiantes.map((est) =>
        est.id === estudiante.id ? obj : est
      );
      setEstudiantes(lista);
    } else {
      obj.id = getID();
      setEstudiantes([...estudiantes, obj]);
    }
    limpiarCampos();
  };

  const getID = () => {
    let id = Math.random().toString(36).substring(2) + Date.now().toString(36);
    return id;
  };

  const limpiarCampos = () => {
    setDocumento("");
    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setError(false);
    setEstudiante({});
  };

  useEffect(() => {
    if (estudiante.id && estudiante.id !== "") {
      setDocumento(estudiante.documento);
      setNombre(estudiante.nombre);
      setApellido(estudiante.apellido);
      setTelefono(estudiante.telefono);
      setEmail(estudiante.email);
    }
  }, [estudiante]);

  return (
    <div className="col-md-5 mt-2">
      <form onSubmit={enviarFormulario}>
        <div className="card">
          <div className="card-header mb-2">Formulario</div>
          {error && <Error mensaje=" Todos los campos son obligatorios" />}
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                NIF / NIE:
              </span>
              <input
                type="text"
                className="form-control"
                value={documento}
                onChange={(e) => setDocumento(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Nombre:
              </span>
              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Apellidos:
              </span>
              <input
                type="text"
                className="form-control"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Teléfono:
              </span>
              <input
                type="tel"
                className="form-control"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Email:
              </span>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                {estudiante.id ? "Editar" : "Registrar"}
              </button>
              <input onClick={limpiarCampos} value='Cancelar' type="button" className="btn btn-info my-2" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
