import "./App.css";
import {
  ChakraProvider,
  Box,
  Center,
} from "@chakra-ui/react";
import Links from "./components/Links";
import Bottom from "./components/Bottom";
import Experiments from "./components/Experiments";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Old theme config info
 * 
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  brand: {
    900: "#0c9128",
    800: "#012020",
    700: "#d82424;",
  },
  },
 */

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <div className='pattern'></div>
        <div className="main-content">
          <BrowserRouter>
            <Links />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiments" element={<Experiments />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <Bottom />
          </BrowserRouter>
        </div>
      </div>
    </ChakraProvider>
  );
}
