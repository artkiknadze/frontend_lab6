import "./App.css";
import { Task1 } from "./components/Task1";
import { Task2 } from "./components/Task2";
import { Task3 } from "./components/Task3";
import { Task4 } from "./components/Task4";
import { Task5 } from "./components/Task5";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Завдання 1</h1>
        <Task1></Task1>
      </div>

      <div className="container">
        <h1>Завдання 2</h1>
        <Task2></Task2>
      </div>

      <div className="container">
        <h1>Завдання 3</h1>
        <Task3></Task3>
      </div>

      <div className="container">
        <h1>Завдання 4</h1>
        <Task4></Task4>
      </div>
      
      <div className="container">
        <h1>Завдання 5</h1>
        <Task5></Task5>
      </div>
    </div>
  );
}

export default App;
