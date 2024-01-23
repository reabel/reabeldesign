import { Component } from "react";
import { Card, CardBody, Code, TabPanel } from '@chakra-ui/react';


type Experiment = {
    name: String;
    value: String;
    className: any;
    style: String;
  }
  
  const font: Experiment ={ name: 'Shadow', value: 'Shadow', className: 'shadow', style: 'filter: drop-shadow(0 0 0.75rem crimson);'};

class ExperimentsJS extends Component {
    render () {
        // Not working currently, cheating the html portion
        // May be better to see if there's a prebuilt component to let me do these, and just populate with the code.
        const testHTML = (
            <div>
                <p id="test">Test2</p>
                <script>
                    document.getElementById("test").innerHTML = "Test2";
                </script>
            </div>
        );

        return (
            <TabPanel>
                <div key={ font.name + '1' } className="experi-container">
                    <Card align="center" size="lg" style={{margin: "10px"}}>
                    <CardBody>
                        {testHTML}
                    </CardBody>
                    </Card>
                    <Card size="lg" variant="filled" style={{margin: "10px"}}>
                    <CardBody>
                        <div ><Code colorScheme="whatsapp">document.getElementById("test").innerHTML = "Test2";</Code></div>
                    </CardBody>
                    </Card>
                </div>
            </TabPanel>
        )
    }
}

export default ExperimentsJS;