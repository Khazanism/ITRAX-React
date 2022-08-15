// import logo from './logo.svg';
import "./App.css";

function App() {
  const myName = "ahmed";

  function greeting(name: any) {
    return <h2> Hello, {name}</h2>;
  }
  // const element = <h2> hello, {myName} </h2>;
  return (
    <>
    <div className="App">
      <h1> hello react app </h1>
      {greeting(myName)} 
      {/* {element} */}
    </div>
    </>
  );
}

export default App;
