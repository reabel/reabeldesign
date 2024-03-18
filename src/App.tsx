import "./App.css";
import { ChakraProvider, extendTheme, Heading, Link } from "@chakra-ui/react";
import Links from "./components/Links";
import Experiments from "./components/Experiments";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./rdsmall.png";

const theme = extendTheme({
  initialColorMode: "dark",
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
  },
  brand: {
    900: "#0c9128",
    800: "#012020",
    700: "#d82424;",
  },
});

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
