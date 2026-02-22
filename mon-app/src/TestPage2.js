import './css/pageTest2.css';
import './css/Tasks.css';
import Navbar from './components/Navbar';
import TasksCard from "./components/TasksCard";
import { tasks as initialTasks } from '../src/data/tasks'
import { useState, useEffect } from "react";


function TestPage2({ goToExercice, goToHome, goToTest }) {

  const [tasks, setTasks] = useState(initialTasks);

useEffect(() => {
  setTasks(initialTasks.filter(task => task.done));
}, []);

  return (
    <div>
      <div >
        <Navbar title="Page test 2" goToExercice={goToExercice} goToHome={goToHome} goToTest={goToTest} goToTest2={() => { }} />
      </div>

<div className="reset-container">
  <button className="reset-btn" onClick={() => setTasks([])}>
    Reset
  </button>
</div>

      <div className="tasks-container">
        {tasks.map((x) => (
          <TasksCard key={x.id} title={x.title} done={x.done === true} />
        ))}
      </div>
    </div>


  );
}

export default TestPage2;