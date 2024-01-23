import React, { Component } from "react";
import { Tabs, TabList, TabPanels, Tab } from '@chakra-ui/react'
import ExpermentsHtml from "./experiments/html";
import ExpermentsCSS from "./experiments/css";
import ExpermentsJS from "./experiments/js";
import './experiments.css';




class Experiments extends Component {
  render() {
    return (
      <div>
        <Tabs size='md' align="center">
          <TabList>
            <Tab>HTML</Tab>
            <Tab>CSS</Tab>
            <Tab>JS</Tab>
          </TabList>
          <TabPanels>
            <ExpermentsHtml />
            <ExpermentsCSS />
            <ExpermentsJS />
          </TabPanels>
        </Tabs>
      </div>
    );
  }
}

export default Experiments;
