import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, Text, Code } from '@chakra-ui/react'
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
      {/* <div className="experi-box">
        <div className={font.className}>
        </div>
      </div>
      <div className="experi-nfo">
          {font.name}: {font.className}
  </div> */}
      <Card align="center" size="lg" colorScheme="red">
        <CardBody>
          <div className={font.className}>
          {font.value}
          </div>
        </CardBody>
      </Card>
      <Card size="lg" variant="filled">
        <CardBody>
          <div >style: <Code colorScheme="whatsapp">{font.style}</Code></div>
        </CardBody>
      </Card>
    </div>
  );
    
})

class Experiments extends Component {
  render() {
    return (
      <div>
        {listFonts}
      </div>
    );
  }
}

export default Experiments;
