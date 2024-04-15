import "./App.css";
import {
  ChakraProvider,
  Heading,
  Link,
  useColorModeValue,
  Text,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import Links from "./components/Links";
import Experiments from "./components/Experiments";
import Projects from "./components/Projects";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./rdsmall.png";

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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <ChakraProvider>
      <div className="App">
        <div className="main-content">
          <BrowserRouter>
            <Heading as="h1" size="4xl" colorScheme="whatsapp">
              <img
                src={logo}
                className="logo"
                style={{
                  filter: useColorModeValue("invert(0%)", "invert(100%)"),
                }}
                alt="Logo"
              />
            </Heading>
            <Links />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiments" element={<Experiments />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
            <footer>
              <Text
                id="footertext"
                fontSize="xl"
                style={{ margin: "5% 10%" }}
                color={useColorModeValue("black", "white")}
              >
                ©{" "}
                <Link
                  color={useColorModeValue("red.800", "red.200")}
                  href="http://reabelx.com"
                >
                  ReabelX
                </Link>{" "}
                2024
              </Text>
              <Button
                colorScheme="whatsapp"
                variant="solid"
                onClick={toggleColorMode}
              >
                Toggle {colorMode === "light" ? "Dark" : "Light"}
              </Button>
            </footer>
          </BrowserRouter>
        </div>
      </div>
    </ChakraProvider>
  );
}
