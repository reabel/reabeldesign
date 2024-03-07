import { Component } from "react";
import { Text } from "@chakra-ui/react";
class Home extends Component {
  render() {
    return (
      <div style={{ display: "flex", margin: "20px" }}>
        <div>
          <picture>
            <img
              src="me.jpg"
              alt="me"
              style={{
                width: "50%",
                borderRadius: "50%",
              }}
            />
          </picture>
        </div>
        <div>
          <Text
            id="home"
            fontSize="xl"
            fontWeight="bold"
            style={{ margin: "5% 10%" }}
          >
            Hi! I'm Ryan, a Full Stack Developer from Ontario, Canada. This site
            is designed to be a portolio portal for various experiments and
            projects that I have in progress. It's a work-in-progress and I full
            expect it to change a few times over the course of the following
            weeks. <br />
            <br />
            ReabelDesign is currently built on React with Typescript.
          </Text>
        </div>
      </div>
    );
  }
}

export default Home;
