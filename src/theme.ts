import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

export default theme;

// textStyles: {
//   h1: {
//     // you can also use responsive styles
//     fontSize: ["48px", "72px"],
//     fontWeight: "bold",
//     lineHeight: "110%",
//     letterSpacing: "-2%",
//   },
//   h2: {
//     fontSize: ["36px", "48px"],
//     fontWeight: "semibold",
//     lineHeight: "110%",
//     letterSpacing: "-1%",
//   },
// },
// brand: {
//   900: "#0c9128",
//   800: "#012020",
//   700: "#d82424;",
//},
