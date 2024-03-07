export const TaskRow = ({task, CambioTarea}) =>{
    return(
        <tr key={task.name}>
        <td className="d-flex justify-content-between">
        {task.name}
        <input type="checkbox" 
        checked={task.done}
        onChange={() => CambioTarea(task) }
        />
        </td>
      </tr>
    )
}