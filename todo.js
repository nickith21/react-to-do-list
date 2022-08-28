function Todo({ todo, index, remove }) {
  function handle() {
    remove(index);
  }
  return (
    <div className="todo">
      <input type="checkbox" onClick={handle} checked={false} />
      {todo.text}
    </div>
  );
}
