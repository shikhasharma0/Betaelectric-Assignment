import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <title>Search Bar</title>
        <body>
            <div className = "container">
                <form>
                    <input type={text} placeholder= "Search any favorite packages"></input>
                    <button type ="Submit"> Search </button>
                </form>
            </div>
        </body>
        </a>
      </header>
    </div>
  );
}

export default App;
