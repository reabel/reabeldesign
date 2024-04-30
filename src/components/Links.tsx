import {
  Button,
  ButtonGroup,
  Heading,
  LinkOverlay,
  Link,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaFlickr, FaInstagram } from "react-icons/fa"; //https://react-icons.github.io/react-icons/#/
import { CgDarkMode } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import logo from "../rdsmall.png";
const Links = () => {
  const navigate = useNavigate();
  const linkStyle: any = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  };
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Heading as="h1" size="4xl" colorScheme="red">
        <img
          src={logo}
          className="logo"
          style={{
            filter: useColorModeValue("invert(0%)", "invert(100%)"),
          }}
          alt="Logo"
        />
      </Heading>
      <ButtonGroup isAttached>
        {/* <nav class="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experiments">Experiments</NavLink>
      </nav>  */}
        <Button
          onClick={() => {
            navigate("/");
          }}
          colorScheme="red"
          variant="solid"
        >
          Home
        </Button>
        <Button
          onClick={() => {
            navigate("/projects");
          }}
          colorScheme="red"
          variant="solid"
        >
          Projects
        </Button>
        <Button
          onClick={() => {
            navigate("/experiments");
          }}
          colorScheme="red"
          variant="solid"
        >
          Experiments
        </Button>
        <Button colorScheme="red" variant="solid">
          <LinkOverlay href="http://blog.reabelx.com" target="blank">
            Blog
          </LinkOverlay>
        </Button>
        {/* TOOD: Instead of linking to instagram, create an internal page w/ a photo grid */}
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="red"
            rightIcon={<ChevronDownIcon />}
          >
            Photography
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link
                href="https://www.instagram.com/reabel/"
                target="blank"
                color={useColorModeValue("black", "white")}
                isExternal
              >
                <div style={linkStyle}>
                  <FaInstagram style={{ marginTop: "4px", marginRight: "4px"}} /> Instagram
                </div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="https://www.flickr.com/photos/reabel/"
                target="blank"
                color={useColorModeValue("black", "white")}
                isExternal
              >
                <div style={linkStyle}>
                  <FaFlickr style={{ marginTop: "4px", marginRight: "4px"}} /> Flickr
                </div>
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="red"
            rightIcon={<ChevronDownIcon />}
          >
            Social
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link
                href="https://twitter.com/reabel"
                target="blank"
                color={useColorModeValue("black", "white")}
                isExternal
              >
                <div style={linkStyle}>
                  <FaXTwitter style={{ marginTop: "4px", marginRight: "4px"}} /> Twitter
                </div>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="https://www.linkedin.com/in/ryan-reabel-a7a33712/"
                target="blank"
                color={useColorModeValue("black", "white")}
                isExternal
              >
                <div style={linkStyle}>
                  <FaLinkedin style={{ marginTop: "4px", marginRight: "4px"}} /> LinkedIn
                </div>
              </Link>
            </MenuItem>
          </MenuList>
          <Button
            colorScheme="red"
            variant="solid"
            onClick={toggleColorMode}
          >
            <CgDarkMode />
          </Button>
        </Menu>
      </ButtonGroup>
    </>
  );
};

export default Links;
