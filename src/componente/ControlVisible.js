export const ControlVisible = ({
  isChecked,
  setshowCompleted,
  LimpiarTarea,
}) => {
  const Borrar = () => {
    if (window.confirm("esta seguro de borrarlo?")) {
      LimpiarTarea();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secundary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => setshowCompleted(e.target.checked)}
        />
        <label>Mostrar tareas hechas</label>
      </div>
      <button onClick={Borrar} className="btn btn-danger btn-sm">
        Borrar
      </button>
    </div>
  );
};
