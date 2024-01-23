import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Code } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './experiments.css';
type Experiment = {
  name: String;
  value: String;
  className: any;
  style: String;
}


const fonts: Array<Experiment> = [
  { name: 'Shadow', value: 'Shadow', className: 'shadow', style: 'filter: drop-shadow(0 0 0.75rem crimson);'},
  { name: 'Shadow 2', value: 'Shadow 2', className: 'shadow2', style: 'filter: drop-shadow(30px 10px 4px #4444dd);'},
]

const listFonts = fonts.map((font: Experiment, index) => {
  return (
    <div key={ font.name + index.toString() } className="experi-container">
      <Card align="center" size="lg" style={{margin: "10px"}}>
        <CardBody>
          <div className={font.className}>
          {font.value} HTML
          </div>
        </CardBody>
      </Card>
      <Card size="lg" variant="filled" style={{margin: "10px"}}>
        <CardBody>
          <div ><Code colorScheme="whatsapp">{font.style}</Code></div>
        </CardBody>
      </Card>
    </div>
  );
    
})

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
            <TabPanel>
              <p>HTML</p>
            </TabPanel>
            <TabPanel>
              <p>CSS</p>
            </TabPanel>
            <TabPanel>
              <p>JS</p>
            </TabPanel>
            {listFonts}
          </TabPanels>
        </Tabs>
      </div>
    );
  }
}

export default Experiments;
