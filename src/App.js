import React, { Component } from "react";
import EventSource from "eventsource";

class App extends Component {
  componentDidMount() {
    const es = new EventSource("http://localhost:5000");
    console.log(es);
    es.onopen = e => {
      console.log("Open", e);
    };
    es.onmessage = e => {
      console.log("Message", e);
    };
    es.onerror = e => {
      console.log(e);
      es.close();
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button>Hit ajax</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
