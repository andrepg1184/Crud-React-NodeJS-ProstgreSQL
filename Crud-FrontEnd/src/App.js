import './App.css';
import {AiOutlineEdit, AiOutlineDelete} from "react-icons/ai";
import {useState , useEffect} from "react";
import {axios} from "axios";

const Todos = ({ todos }) => {
    return (
      <div className="todos">
        {todos.map((todo) => {
          return (
            <div className="todo">
              <button
                className="checkbox"
                style={{ backgroundColor: todo.status ? "#A879E6" : "white" }}
              ></button>
              <p>{todo.name}</p>
              <button>
                <AiOutlineEdit size={20} color={"#64697b"}></AiOutlineEdit>
              </button>
              <button >
                <AiOutlineDelete size={20} color={"#64697b"}></AiOutlineDelete>
              </button>
            </div>
          );
        })}
      </div>
    );
  };

function App() {
  async function getTodos() {
    const response = await axios.get("http://localhost:3333/todos");
    console.log(response)
    setTodos(response.data);
  }
  
  const [todos, setTodos] = useState([]);
  useEffect(() => {
      getTodos()
  }, []);

  return (
    <div className="App">
      <header className="container">
        <div className="header">
          <h1>Dont be lazzy</h1>
        </div>
        <Todos todos={todos}></Todos>
      <input className="inputName"></input>
      <button className="newTaskButton">+ New task</button>
      </header>
    </div>
  );
}

export default App;
