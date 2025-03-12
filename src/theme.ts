import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: "#ffe5e5",
      100: "#fbb8b8",
      200: "#f48a8a",
      300: "#ed5c5c",
      400: "#e62e2e",
      500: "#cc1515", // Primary brand red
      600: "#a00f0f",
      700: "#730a0a",
      800: "#470505",
      900: "#1f0000",
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "md",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "brand.500" : "brand.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "brand.400" : "brand.600",
            _disabled: {
              bg: props.colorMode === "dark" ? "brand.500" : "brand.500",
            },
          },
        }),
        outline: (props) => ({
          borderColor: props.colorMode === "dark" ? "brand.400" : "brand.500",
          color: props.colorMode === "dark" ? "brand.400" : "brand.500",
          _hover: {
            bg: props.colorMode === "dark" ? "rgba(237, 92, 92, 0.12)" : "rgba(204, 21, 21, 0.12)",
          },
        }),
        ghost: (props) => ({
          _hover: {
            bg: props.colorMode === "dark" ? "gray.700" : "gray.100",
          },
        }),
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: props.colorMode === "dark" ? "brand.300" : "brand.500",
        _hover: {
          textDecoration: "none",
          color: props.colorMode === "dark" ? "brand.200" : "brand.600",
        },
      }),
    },
    Card: {
      baseStyle: (props) => ({
        bg: props.colorMode === "dark" ? "gray.800" : "white",
        borderRadius: "lg",
        boxShadow: "md",
        overflow: "hidden",
        transition: "all 0.2s ease",
      }),
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
});

export default theme;
