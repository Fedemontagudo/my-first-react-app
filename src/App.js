import logo from './Bryozoa27.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Mi primera aplicacion web con React, chavales
        </p>
        <a
          className="App-link"
          href="https://www.benditofutbol.com/files/article_main/uploads/2015/01/14/54b6caab9a8c1.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pincha aqui para ver mi felicidad
        </a>
      </header>
    </div>
  );
}

export default App;


