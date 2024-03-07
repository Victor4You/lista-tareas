import {TaskRow } from "./TaskRow";
export const TablaTareas = ({tasks, CambioTarea, showCompleted = false}) => {

  const tasktableRows = (doneValor) =>{
    return(
      tasks
      .filter(task => task.done === doneValor)
      .map(task => (
        <TaskRow task={task} key={task.name} CambioTarea={CambioTarea}/>
  ))
    )
  }
    return (
        <table className="table table-dark table-stripe table-border border-secondary">
        <thead>
          <tr className="table-primary">
            <th>Tareas</th>
          </tr>
        </thead>
        <tbody>
              {
                tasktableRows(showCompleted)
             }
        </tbody>
      </table>
    )
}