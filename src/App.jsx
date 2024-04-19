import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import ListaEstudiantes from "./components/ListaEstudiantes";

const App = () => {
  const [estudiante, setEstudiante] = useState({});
  const [estudiantes, setEstudiantes] = useState(
    JSON.parse(localStorage.getItem("estudiantes")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
  }, [estudiantes]);

  const borrarEstudiante = (id) => {
    if (confirm("¿Está seguro que desea borrar este estudiante?")) {
      const eliminar = estudiantes.filter((estudiante) => estudiante.id !== id);
      setEstudiantes(eliminar);
    }
  };

  return (
    <div className="container text-center">
      <div className="row mt-3">
        <Formulario
          estudiante={estudiante}
          estudiantes={estudiantes}
          setEstudiante={setEstudiante}
          setEstudiantes={setEstudiantes}
        />
        <ListaEstudiantes
          estudiante={estudiante}
          estudiantes={estudiantes}
          setEstudiante={setEstudiante}
          borrarEstudiante={borrarEstudiante}
        />
      </div>
    </div>
  );
};

export default App;
