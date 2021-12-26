import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>CI/CD- Pipleline over vercel using Github Actions</p>
        <a
          className="App-link"
          href="https://ahb.deskcloud.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal Profile
        </a>
      </header>
    </div>
  );
}

export default App;
