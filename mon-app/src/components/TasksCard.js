function Tasks({ title, done }) {
  return (
    <div className={`task-card ${done ? "done" : "not-done"}`}>
      <h3 className="task-title">{title}</h3>
      <p className="task-status">
        {done ? "Non terminée ❌" : "Terminée ✅"}
      </p>
    </div>
  );
}

export default Tasks;