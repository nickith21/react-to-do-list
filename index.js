function App() {
  const [todos, setTodos] = React.useState([
    { text: "learn react", isCompleted: false },
    { text: "meet friend", isCompleted: false },
    { text: "build app", isCompleted: false },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <>
      {todos.map((todo, i) => {
        return (
          <div className="app">
            <div className="todo-list">
              <Todo index={i} todo={todo} remove={removeTodo} />
            </div>
          </div>
        );
      })}
      <TodoForm addTodo={addTodo} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
