import { Component } from "react";
import { Card, CardBody, Code, TabPanel } from '@chakra-ui/react'

class ExperimentsJS extends Component {
    render () {
        return (
            <TabPanel>
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
            </TabPanel>
        )
    }
}

export default ExperimentsJS;