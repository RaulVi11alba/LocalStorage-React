import Estudiante from "./Estudiante";

const ListaEstudiantes = ({ estudiante, estudiantes, setEstudiante, borrarEstudiante }) => {
  return (
    <div className="col-md-7 mt-2">
      <div className="card">
        <div className="card-header">Lista de Estudiantes</div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">NIF / NIE</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {estudiantes && estudiantes.length ? (
                estudiantes.map((est) => (
                  <Estudiante estudiante={est} key={est.id} setEstudiante={setEstudiante} borrarEstudiante={borrarEstudiante} />
                ))
              ) : (
                <tr>
                  <th colSpan={5} scope="row">
                    No hay estudiantes
                  </th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListaEstudiantes;
