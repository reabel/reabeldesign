import { Card, Text, useColorModeValue } from "@chakra-ui/react";
export default function Home() {
  return (
    <Card>
      <Text
        id="home"
        fontSize="xl"
        style={{ margin: "5% 10%" }}
        color={useColorModeValue("black", "white")}
      >
        Hi! I'm Ryan, a Full Stack Developer from Ontario, Canada. This site is
        designed to be a portolio portal for various experiments and projects
        that I have in progress. It's a work-in-progress and I full expect it to
        change a few times over the course of the following weeks. <br />
        <br />
        ReabelDesign is currently built on React with Typescript.
      </Text>
    </Card>
  );
}
