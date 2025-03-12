import { Card, Text, useColorModeValue, Link } from "@chakra-ui/react";
export default function Home() {

  const github = (
    <Link
    color={useColorModeValue("red.800", "red.200")}
    href="https://github.com/reabel"
    isExternal
   >
    GitHub
    </Link>
  )

  return (
    <Card>
      <Text
        id="home"
        fontSize="xl"
        style={{ margin: "5% 10%" }}
        color={useColorModeValue("black", "white")}
      >
        Hi! I'm Ryan, a Full Stack Developer from Ontario, Canada. This site is
        designed as a portfolio & portal for various experiments and projects
        that I have in progress. It's an evolving site, so feel free to take a look at my
        {' '}{github}{' '}
        in the meantime. <br />
        <br />
        ReabelDesign is currently built on React with Typescript.
      </Text>
    </Card>
  );
}
