const Estudiante = ({ estudiante, setEstudiante, borrarEstudiante }) => {
  const { id, documento, nombre, apellido, telefono, email } = estudiante;

  return (
    <tr>
      <th scope="row">{documento}</th>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{telefono}</td>
      <td>{email}</td>
      <td>
        <button className="btn btn-info" onClick={() => setEstudiante(estudiante)}>Editar</button>
        <button className="btn btn-danger" onClick={() => borrarEstudiante(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Estudiante;
