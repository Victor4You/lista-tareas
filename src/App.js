import { useState, useEffect } from "react";
import "./App.css";
import { Creadortareas } from "./componente/Creadortareas";
import { TablaTareas } from "./componente/TablaTareas";
import { ControlVisible } from "./componente/ControlVisible";
import {Container } from "./componente/Container";

function App() {
  const [TaskItem, setTaskItem] = useState([]);
  const [showCompleted, setshowCompleted] = useState(false);
  function CrearTarea(taskName) {
    if (!TaskItem.find((task) => task.name === taskName)) {
      setTaskItem([...TaskItem, { name: taskName, done: false }]);
    }
  }

  const CambioTarea = (task) => {
    setTaskItem(
      TaskItem.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItem(JSON.parse(data));
    }
  }, []);

  const LimpiarTarea = () => {
    setTaskItem(TaskItem.filter((task) => !task.done));
    setshowCompleted(false);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(TaskItem));
  }, [TaskItem]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
      <Creadortareas CrearTarea={CrearTarea} />
        <TablaTareas tasks={TaskItem} CambioTarea={CambioTarea} />
        <ControlVisible
          isChecked={showCompleted}
          setshowCompleted={(checked) => setshowCompleted(checked)}
          LimpiarTarea={LimpiarTarea}
        />

        {showCompleted === true && (
          <TablaTareas
            tasks={TaskItem}
            CambioTarea={CambioTarea}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
