import logo from "./logo.svg";
import "./App.css";
import quoteWebsocket from './WebSockets/WebSocket';
import { useEffect } from "react";


function App() {
  useEffect(() => {
    quoteWebsocket.start();
  }, []);


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
          Learn React
        </a>
        <div>Huh</div>
        <button onClick={quoteWebsocket.start}>Connect</button>
        <button onClick={quoteWebsocket.callQuoting}>Send Request</button>
        <div id="messageList"></div>
      </header>
    </div>
  );
}

export default App;