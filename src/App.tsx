import "./App.css";
import { ChakraProvider, Heading, Link } from "@chakra-ui/react";
import Links from "./components/Links";
import Experiments from "./components/Experiments";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./rdsmall.png";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <div className="main-content">
          <Heading as="h1" size="4xl" colorScheme="whatsapp">
            <img src={logo} className="logo" alt="Logo" />
          </Heading>
          <BrowserRouter>
            <Links />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiments" element={<Experiments />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </BrowserRouter>
        </div>
        <footer>
          ©{" "}
          <Link color="red.800" href="http://reabelx.com">
            ReabelX
          </Link>{" "}
          2024
        </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
