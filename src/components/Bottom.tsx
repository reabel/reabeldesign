import { Link, useColorModeValue, Text } from "@chakra-ui/react";
const Bottom = () => {
  return (
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
          target="blank"
          isExternal
        >
          ReabelX
        </Link>{" "}
        2024
      </Text>
    </footer>
  );
};
export default Bottom;
