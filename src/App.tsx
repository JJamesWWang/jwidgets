import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello! This is a site that contains all of James' totally helpful widgets</h1>
      <nav>
        <Link to="/kvocab">KVocab</Link>
      </nav>
    </div>
  );
}

export default App;
