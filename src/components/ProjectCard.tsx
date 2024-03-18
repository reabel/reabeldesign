import { Card, CardHeader, CardBody } from "@chakra-ui/react";
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
      <Card>
        <CardHeader>
          <Heading size="md">{props.title}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase" style={linkStyle}>
                {props.links.map((link, index) => (
                  <div key="link.key">
                    <a href={link.url} target="_blank">
                      {link.key}
                    </a>
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
