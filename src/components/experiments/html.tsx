import { Component } from "react";
import { Card, CardBody, Code, TabPanel } from '@chakra-ui/react';

// TODO: Make experiment a global type
type Experiment = {
    name: String;
    value: String;
    className: any;
    html?: String;
    css?: any;
    js?: String;
  }

const fonts: Array<Experiment> = [
    { name: 'Canvas', value: 'Canvas', className: 'shadow', css: 'filter: drop-shadow(30px 10px 4px #4444dd)'},
  ]

const canvasHTML = (
    <div>
    <canvas id="canvas"></canvas>
    <script>
    var canvas = document.getElementById("canvas");;
    var ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
    </script>
    </div>
);
  
  
//Could use an extendsion here
const listHtml = fonts.map((font: Experiment, index) => {
    return (
      <TabPanel key={ font.name + index.toString() }  alignItems='center'>
        <div className="experi-container">
          <Card align="center" size="lg" style={{margin: "10px"}}>
            <CardBody>
              <p> A Sample of the <code> code tag. </code></p>
            </CardBody>
          </Card>
          <Card size="lg" variant="filled" style={{margin: "10px"}}>
            <CardBody>
              <div ><Code colorScheme="whatsapp">{`
              <code> Code </code>
              `}</Code></div>
            </CardBody>
          </Card>
        </div>
      </TabPanel>
      
    );
      
  })


class ExperimentsHtml extends Component {
    render () {
        return (
            <TabPanel>
              {listHtml}
            </TabPanel>
        )
    }
}

export default ExperimentsHtml;