import Login from "./Login.jsx";
import Register from "./Register.jsx";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">Welcome</h1>

      <div className="stack-container">
        <div className="card">
        
          <Login />
        </div>

        <div className="card">
         
          <Register />
        </div>
      </div>
    </div>
  );
}

export default App;
