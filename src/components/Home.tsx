import { Component } from "react";
import { Text } from "@chakra-ui/react"
class Home extends Component {
  render() {
    return (
      <>
        <Text id="home"
          fontSize="xl"
          fontWeight="bold"
        >
          Hi! I'm Ryan, a Full Stack Developer from Ontario, Canada. This site is designed to be a 
          portolio portal for various experiments and projects that I have in progress. It's a work-in-progress and 
          I full expect it to change a few times over the course of the following weeks. <br/><br/>

          ReabelDesign is currently built on React with Typescript.
        </Text>
      </>
    );
  }
}

export default Home;
