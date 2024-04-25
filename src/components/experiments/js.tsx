import { useEffect } from "react";
import { Card, CardBody, TabPanel } from '@chakra-ui/react'
import { animate, init} from './boid';


const ExperimentsJS = () => {
    useEffect(() => {
        init()
    })
    init();
    return (
        <TabPanel>
            <Card align="center" size="lg" style={{margin: "10px"}}>
                <CardBody>
                <p> Boids </p>
                </CardBody>
            </Card>
            <Card size="lg" variant="filled" style={{margin: "10px"}}>
                <CardBody>
                    
                    <canvas id="boidsCanvas" width="490" height="490" style={{border: "1px solid black"}}></canvas>
                </CardBody>
            </Card>
        </TabPanel>
    )
};

export default ExperimentsJS;