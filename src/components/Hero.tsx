import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Need to install framer-motion: npm install framer-motion

const MotionBox = motion(Box);

const Hero = () => {
  const navigate = useNavigate();
  const bgGradient = useColorModeValue(
    "linear(to-br, white, gray.50)",
    "linear(to-br, gray.800, gray.900)"
  );
  
  return (
    <Box 
      position="relative" 
      overflow="hidden"
      bgGradient={bgGradient}
      borderRadius="xl"
      mb={10}
    >
      <Container maxW="container.xl" position="relative" zIndex={2}>
        <Stack
          align="center"
          textAlign="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 16, md: 28 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              lineHeight="shorter"
            >
              Design • Development • Photography
            </Heading>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            maxW="2xl"
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.600", "gray.300")}
            >
              Creating beautiful digital experiences through thoughtful design, 
              robust development, and evocative photography.
            </Text>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              justify="center"
            >
              <Button
                size="lg"
                colorScheme="red"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                colorScheme="red"
                onClick={() => navigate("/experiments")}
              >
                Explore Experiments
              </Button>
            </Stack>
          </MotionBox>
        </Stack>
      </Container>
      
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        width="30%"
        height="30%"
        borderRadius="full"
        bg="red.500"
        opacity="0.1"
        zIndex={1}
      />
      <Box
        position="absolute"
        bottom="-15%"
        left="-10%"
        width="50%"
        height="50%"
        borderRadius="full"
        bg="red.500"
        opacity="0.07"
        zIndex={1}
      />
    </Box>
  );
};

export default Hero;