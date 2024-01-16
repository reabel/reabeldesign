import React, { Component } from "react";
import './experiments.css';
type Experiment = {
  name: String;
  value: String;
  className: any;
}


const fonts: Array<Experiment> = [
  { name: 'Shadow', value: 'Shadow', className: 'shadow'},
  { name: 'Shadow 2', value: 'Shadow 2', className: 'shadow2'},
]

const listFonts = fonts.map((font: Experiment, index) => {
  return (
    <div key={ font.name + index.toString() } className="experi-container">
      <div className="experi-box">
        <div className={font.className}>
          {font.value}
        </div>
      </div>
      <div className="experi-nfo">
          {font.name}: {font.className}
      </div>
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
