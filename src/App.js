import "./App.css";
import Topbar from "./components/Topbar";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <header>
        <Topbar />
      </header>
      <body>
        <div styleClass="main-body">
          <h1>ReabelDesign</h1>
          <Links />
        </div>
      </body>
      <footer>
        © <a href="http://reabelx.com">ReabelX</a> 2022
      </footer>
    </div>
  );
}

export default App;
