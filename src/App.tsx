import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <nav>
        <Link to="/kvocab">Kvocab</Link>
      </nav>
      <Outlet />.
    </div>
  );
}

export default App;
