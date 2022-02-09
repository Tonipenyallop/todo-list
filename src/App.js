import "./App.css";

function App() {
  const todo = ["a", "b", "c"];
  return (
    <div>
      <input type="text" placeholder="smth to do" />
      <button>add</button>
      <button>Delete</button>
      <div>
        {todo.map((e, idx) => (
          <li key={idx}>{e}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
