import { Card, CardHeader, CardBody, Link, useColorModeValue } from "@chakra-ui/react";
import { Text, Heading, Stack, StackDivider, Box } from "@chakra-ui/react";

interface PCProps {
  title: string;
  links: link[];
  description: string;
}

interface link {
  key: string;
  url: string;
}

const linkStyle: any = {
  Display: "flex",
  FlexDirection: "row",
};

export default function ProjectCard(props: PCProps) {
  return (
    <div>
      <Card align="center" size="md" style={{margin: "50px"}}>
        <CardHeader>
          <Heading size="md">{props.title}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase" style={linkStyle}>
                {props.links.map((link, index) => (
                  <div key={link.key}>
                    <Link color={useColorModeValue("red.800", "red.200")} href={link.url} isExternal>
                      {link.key}
                    </Link>
                    {index < props.links.length - 1 ? " | " : ""}
                  </div>
                ))}
              </Heading>
              <Text>{props.description}</Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
