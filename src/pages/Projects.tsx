import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import { Heading } from "@chakra-ui/react";

class Projects extends Component {
  render() {
    return (
      <>
        <Heading size="lg" style={{marginTop: '20px'}}>Projects</Heading>
        <ProjectCard
          title={"Knowledge Base"}
          links={[{ key: "Github", url: "https://github.com/reabel/reabs-KB" }]}
          description={
            "a place for me to hold dev related notes and smaller sandboxes."
          }
        />
        <ProjectCard
          title={"Resume"}
          links={[
            { key: "Github", url: "https://github.com/reabel/Resume" },
            { key: "Live Demo", url: "https://resume-reabel.vercel.app/" },
          ]}
          description={
            "My most recently updated resume, online whenever it's needed."
          }
        />
      </>
    );
  }
}

export default Projects;
