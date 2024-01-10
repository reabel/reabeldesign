import "./App.css";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <body>
        <div styleClass="main-body">
          <h1>ReabelDesign</h1>
          <Links />
        </div>
      </body>
      <footer>
        © <a href="http://reabelx.com">ReabelX</a> 2024
      </footer>
    </div>
  );
}

export default App;
