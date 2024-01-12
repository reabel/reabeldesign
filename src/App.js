import "./App.css";
import Links from "./components/Links";

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  const Home = () => (<span>Home</span>);
  const Dashboard = () => (<span>Dashboard</span>);
  const Guides = () => (<span>Guides</span>);
  return (
    
    <div className="App">
        <div styleClass="main-body">
          <h1>ReabelDesign</h1>
          <Links />
          <BrowserRouter>
            <nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/guides">Guides</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/guides" element={<Guides />} />
            </Routes>
          </BrowserRouter>
        </div>
      <footer>
        © <a href="http://reabelx.com">ReabelX</a> 2024
      </footer>
    </div>
  );
}

export default App;
