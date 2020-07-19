import React from "react";
import logo from "./logo.svg";
import "./App.css";

window.addEventListener("load", () => {
  let nav = document.getElementById("nav");
  let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };
  let observer = new IntersectionObserver(observerCallback, options);
  observer.observe(nav);
});
function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
    if (!entry.intersectionRatio) {
      document.getElementById("nav").style.position = "sticky";
      document.getElementById("nav").style.top = 0;
    } 
    // else if(entry.intersectionRatio === 1){
    //   document.getElementById("nav").style.position = "relative";
    //   document.getElementById('nav').style.removeProperty('top')
    // }
  });
}

function App() {
  return (
    <div className="App">
      <nav id="nav">
        <ul>
          <li>Home</li>
          <li>More..</li>
          <li>About US</li>
          <li>Contact</li>
        </ul>
      </nav>
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
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
        <p>asdasdasdasdas</p>
      </header>
    </div>
  );
}

export default App;
