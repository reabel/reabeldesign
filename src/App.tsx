import "./App.css";
import Links from "./components/Links";
import Experiments from "./components/Experiments";
import Home from "./components/Home";

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const Home = () => (<span>
  </span>);
  return (
    
    <div className="App">
        <div className="main-body">
          <h1>ReabelDesign</h1>
          <BrowserRouter>
            <nav class="nav">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/experiments">Experiments</NavLink>
              <Links />
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experiments" element={<Experiments />} />
            </Routes>
          </BrowserRouter>
        </div>
      <footer>
        © <a class="reabelx" href="http://reabelx.com">ReabelX</a> 2024
      </footer>
    </div>
  );
}

export default App;
