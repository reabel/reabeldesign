import {
  Box,
  Container,
  Text,
  Stack,
  HStack,
  IconButton,
  Divider,
  Link as ChakraLink,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaFlickr, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";
import logo from "../rdsmall.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.600", "gray.400");
  
  return (
    <Box bg={footerBg} borderTop="1px" borderColor={borderColor}>
      <Container maxW="container.xl" py={8}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 10 }}
          justify="space-between"
          align="start"
        >
          <Box>
            <Image
              src={logo}
              h="36px"
              mb={4}
              style={{
                filter: useColorModeValue("invert(0%)", "invert(100%)"),
              }}
              alt="Reabel Design Logo"
            />
            <Text fontSize="sm" color={textColor}>
              Design • Development • Photography
            </Text>
          </Box>
          
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 8 }}>
            <Stack align="flex-start" spacing={3}>
              <Text fontWeight="600">Navigation</Text>
              <ChakraLink as={RouterLink} to="/" color={textColor}>Home</ChakraLink>
              <ChakraLink as={RouterLink} to="/projects" color={textColor}>Projects</ChakraLink>
              <ChakraLink as={RouterLink} to="/experiments" color={textColor}>Experiments</ChakraLink>
              <ChakraLink href="http://blog.reabelx.com" isExternal color={textColor}>Blog</ChakraLink>
            </Stack>
            
            <Stack align="flex-start" spacing={3}>
              <Text fontWeight="600">Photography</Text>
              <ChakraLink href="https://www.instagram.com/reabel/" isExternal color={textColor}>
                Instagram
              </ChakraLink>
              <ChakraLink href="https://www.flickr.com/photos/reabel/" isExternal color={textColor}>
                Flickr
              </ChakraLink>
            </Stack>
          </Stack>
        </Stack>
        
        <Divider my={6} borderColor={borderColor} />
        
        <Stack direction={{ base: "column", md: "row" }} spacing={6} justify="space-between" align="center">
          <Text fontSize="sm" color={textColor}>
            © {currentYear} Reabel Design. All rights reserved.
          </Text>
          
          <HStack spacing={3}>
            <IconButton
              aria-label="GitHub"
              icon={<FaGithub />}
              size="sm"
              variant="ghost"
              color={textColor}
              as="a"
              href="https://github.com/reabel"
              target="_blank"
            />
            <IconButton
              aria-label="Twitter"
              icon={<FaXTwitter />}
              size="sm"
              variant="ghost"
              color={textColor}
              as="a"
              href="https://twitter.com/reabel"
              target="_blank"
            />
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="sm"
              variant="ghost"
              color={textColor}
              as="a"
              href="https://www.linkedin.com/in/ryan-reabel-a7a33712/"
              target="_blank"
            />
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              size="sm"
              variant="ghost"
              color={textColor}
              as="a"
              href="https://www.instagram.com/reabel/"
              target="_blank"
            />
            <IconButton
              aria-label="Flickr"
              icon={<FaFlickr />}
              size="sm"
              variant="ghost"
              color={textColor}
              as="a"
              href="https://www.flickr.com/photos/reabel/"
              target="_blank"
            />
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;