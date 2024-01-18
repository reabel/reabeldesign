import "./App.css";
import Links from "./components/Links";
import Experiments from "./components/Experiments";

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const Home = () => (<span>
    Hi! I'm Ryan, a Full Stack Developer from Ontario, Canada. This site is designed to be a 
    portolio portal for various experiments and projects that I have in progress.

    This site is a work-in-progress and I full expect it to change a few times over the course of the following weeks.

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
