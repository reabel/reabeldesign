import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import ExpermentsHtml from "../components/experiments/html";
import ExpermentsCSS from "../components/experiments/css";
import ExpermentsJS from "../components/experiments/js";
import "../components/experiments.css";

const Experiments = () => {
  return (
    <div>
      <Heading size="lg" style={{marginTop: '20px'}}>Experiments</Heading>
      <Tabs size="md" align="center">
        <TabList>
          <Tab color={useColorModeValue("black", "white")}>HTML</Tab>
          <Tab color={useColorModeValue("black", "white")}>CSS</Tab>
          <Tab color={useColorModeValue("black", "white")}>JS</Tab>
        </TabList>
        <TabPanels>
          <ExpermentsHtml />
          <ExpermentsCSS />
          <ExpermentsJS />
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Experiments;
