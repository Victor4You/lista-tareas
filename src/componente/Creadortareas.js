import { useState } from "react";

export const Creadortareas = ({ CrearTarea }) => {
  const [newTask, setnewTask] = useState("");

  const eventoEnvio = (e) => {
    e.preventDefault();
    CrearTarea(newTask);
    setnewTask("");
  };
  return (
    <form onSubmit={eventoEnvio} className="my-2 row">
      <div className="col-9">
      <input
        type="text"
        placeholder="Ingresa una nueva tarea"
        value={newTask}
        onChange={(e) => setnewTask(e.target.value)}
        className="form-control"
      />
      </div>
      <div className="col-3">
      <button className="btn btn-primary btn-sm">Guardar tarea</button>
      </div>
    </form>
  );
};
