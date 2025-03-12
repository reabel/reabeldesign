import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
  Link,
  Container,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaFlickr, FaInstagram } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../rdsmall.png";

const Links = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);
  
  // Track scrolling for navbar style changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if route is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  // Style for navbar based on scroll position
  const navbarBg = useColorModeValue(
    scrolled ? 'white' : 'rgba(255, 255, 255, 0.8)',
    scrolled ? 'gray.800' : 'rgba(26, 32, 44, 0.8)'
  );
  
  // Colors
  const accentColor = useColorModeValue("red.500", "red.300");
  const menuBg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  
  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experiments", path: "/experiments" },
    { name: "Blog", url: "http://blog.reabelx.com", external: true }
  ];

  return (
    <Box position="sticky" top={0} zIndex={1000}>
      <Container maxW="container.xl" px={4}>
        <Flex 
          as="nav" 
          align="center" 
          justify="space-between" 
          wrap="wrap" 
          py={3}
          bg={navbarBg}
          backdropFilter="blur(10px)"
          borderBottom={scrolled ? "1px" : "0px"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          transition="all 0.3s ease"
          boxShadow={scrolled ? "sm" : "none"}
        >
          {/* Logo */}
          <Flex align="center" mr={5} cursor="pointer" onClick={() => navigate('/')}>
            <Image
              src={logo}
              h="40px"
              style={{
                filter: useColorModeValue("invert(0%)", "invert(100%)"),
                transition: "filter 0.2s ease"
              }}
              alt="Reabel Design Logo"
            />
          </Flex>

          {/* Desktop Navigation */}
          <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
            {navItems.map(item => (
              item.external ? (
                <Link 
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  px={4}
                  py={2}
                  borderRadius="md"
                  fontWeight="medium"
                  color={useColorModeValue("gray.600", "gray.200")}
                  _hover={{ textDecoration: "none", bg: hoverBg }}
                >
                  {item.name}
                </Link>
              ) : (
                <Button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  px={4}
                  variant="ghost"
                  fontWeight="medium"
                  colorScheme={isActive(item.path) ? "red" : "gray"}
                  borderBottom={isActive(item.path) ? "2px" : "0px"}
                  borderColor={accentColor}
                  borderRadius={0}
                  _hover={{ bg: hoverBg }}
                >
                  {item.name}
                </Button>
              )
            ))}

            {/* Photography Menu */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                colorScheme="gray"
                _hover={{ bg: hoverBg }}
              >
                Photography
              </MenuButton>
              <MenuList bg={menuBg} boxShadow="lg">
                <MenuItem 
                  as={Link} 
                  href="https://www.instagram.com/reabel/" 
                  isExternal
                  _hover={{ bg: hoverBg }}
                >
                  <Flex align="center">
                    <FaInstagram style={{ marginRight: "8px" }} />
                    Instagram
                  </Flex>
                </MenuItem>
                <MenuItem 
                  as={Link} 
                  href="https://www.flickr.com/photos/reabel/" 
                  isExternal
                  _hover={{ bg: hoverBg }}
                >
                  <Flex align="center">
                    <FaFlickr style={{ marginRight: "8px" }} />
                    Flickr
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>

            {/* Social Menu */}
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                colorScheme="gray"
                _hover={{ bg: hoverBg }}
              >
                Social
              </MenuButton>
              <MenuList bg={menuBg} boxShadow="lg">
                <MenuItem 
                  as={Link} 
                  href="https://github.com/reabel" 
                  isExternal
                  _hover={{ bg: hoverBg }}
                >
                  <Flex align="center">
                    <FaGithub style={{ marginRight: "8px" }} />
                    Github
                  </Flex>
                </MenuItem>
                <MenuItem 
                  as={Link} 
                  href="https://twitter.com/reabel" 
                  isExternal
                  _hover={{ bg: hoverBg }}
                >
                  <Flex align="center">
                    <FaXTwitter style={{ marginRight: "8px" }} />
                    Twitter
                  </Flex>
                </MenuItem>
                <MenuItem 
                  as={Link} 
                  href="https://www.linkedin.com/in/ryan-reabel-a7a33712/" 
                  isExternal
                  _hover={{ bg: hoverBg }}
                >
                  <Flex align="center">
                    <FaLinkedin style={{ marginRight: "8px" }} />
                    LinkedIn
                  </Flex>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          {/* Color Mode Toggle */}
          <IconButton
            aria-label="Toggle dark mode"
            icon={<CgDarkMode />}
            onClick={toggleColorMode}
            size="md"
            variant="ghost"
            colorScheme="gray"
            ml={2}
            _hover={{ bg: hoverBg }}
            display={{ base: 'none', md: 'flex' }}
          />

          {/* Mobile Menu Button */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            aria-label={"Open Menu"}
            size="md"
            variant="ghost"
            colorScheme="gray"
          />
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={10}>
            <VStack spacing={4} align="stretch">
              {navItems.map(item => (
                item.external ? (
                  <Link 
                    key={item.name}
                    href={item.url} 
                    target="_blank"
                    py={2}
                    fontWeight="medium"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Box 
                    key={item.name}
                    py={2} 
                    fontWeight="medium"
                    borderLeft={isActive(item.path) ? "4px" : "0px"}
                    borderColor={accentColor}
                    pl={isActive(item.path) ? 3 : 0}
                    bg={isActive(item.path) ? useColorModeValue("gray.50", "gray.700") : "transparent"}
                    onClick={() => {
                      navigate(item.path);
                      onClose();
                    }}
                  >
                    {item.name}
                  </Box>
                )
              ))}
              
              <Box py={2} fontWeight="medium">Photography</Box>
              <VStack pl={4} align="start" spacing={2}>
                <Link href="https://www.instagram.com/reabel/" isExternal onClick={onClose}>
                  <Flex align="center">
                    <FaInstagram style={{ marginRight: "8px" }} />
                    Instagram
                  </Flex>
                </Link>
                <Link href="https://www.flickr.com/photos/reabel/" isExternal onClick={onClose}>
                  <Flex align="center">
                    <FaFlickr style={{ marginRight: "8px" }} />
                    Flickr
                  </Flex>
                </Link>
              </VStack>
              
              <Box py={2} fontWeight="medium">Social</Box>
              <VStack pl={4} align="start" spacing={2}>
                <Link href="https://github.com/reabel" isExternal onClick={onClose}>
                  <Flex align="center">
                    <FaGithub style={{ marginRight: "8px" }} />
                    Github
                  </Flex>
                </Link>
                <Link href="https://twitter.com/reabel" isExternal onClick={onClose}>
                  <Flex align="center">
                    <FaXTwitter style={{ marginRight: "8px" }} />
                    Twitter
                  </Flex>
                </Link>
                <Link href="https://www.linkedin.com/in/ryan-reabel-a7a33712/" isExternal onClick={onClose}>
                  <Flex align="center">
                    <FaLinkedin style={{ marginRight: "8px" }} />
                    LinkedIn
                  </Flex>
                </Link>
              </VStack>
              
              <Button 
                leftIcon={<CgDarkMode />} 
                onClick={toggleColorMode} 
                variant="outline"
                size="sm"
                mt={4}
              >
                {colorMode === "light" ? "Dark" : "Light"} Mode
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Links;
