function Tasks({ title, done }) {
  return (
    <div className="not-done">
      <h3 className="task-title">{title}</h3>
      <p className="task-status"> Non terminée ❌
      </p>
    </div>
  );
}

export default Tasks;