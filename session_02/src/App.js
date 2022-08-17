import logo from "./logo.svg";
import "./App.css";
// import Welcome from "./Components/Welcome";
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
function App() {
  return (
    <>
    <div className="App">
      {/* <Welcome /> */}
      <AddTask />
      <TaskList />
    </div>
    </>
  );
}

export default App;
