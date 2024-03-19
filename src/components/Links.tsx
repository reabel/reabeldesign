import {
  Button,
  ButtonGroup,
  LinkOverlay,
  Link,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaFlickr, FaInstagram } from "react-icons/fa"; //https://react-icons.github.io/react-icons/#/
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Links = () => {
  const navigate = useNavigate();
  const linkStyle: any = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  };
  return (
    <ButtonGroup isAttached>
      {/* <nav class="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experiments">Experiments</NavLink>
      </nav>  */}
      <Button
        onClick={() => {
          navigate("/");
        }}
        backgroundColor="red.800"
        color="white"
        variant="solid"
      >
        Home
      </Button>
      <Button
        onClick={() => {
          navigate("/projects");
        }}
        colorScheme="whatsapp"
        variant="solid"
      >
        Projects
      </Button>
      <Button
        onClick={() => {
          navigate("/experiments");
        }}
        colorScheme="whatsapp"
        variant="solid"
      >
        Experiments
      </Button>
      <Button colorScheme="whatsapp" variant="solid">
        <LinkOverlay href="http://blog.reabelx.com" target="blank">
          Blog
        </LinkOverlay>
      </Button>
      {/* TOOD: Instead of linking to instagram, create an internal page w/ a photo grid */}
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="whatsapp"
          rightIcon={<ChevronDownIcon />}
        >
          Photography
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link
              href="https://www.instagram.com/reabel/"
              target="blank"
              isExternal
            >
              <div style={linkStyle}>
                <FaInstagram /> Instagram
              </div>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="https://www.flickr.com/photos/reabel/"
              target="blank"
              isExternal
            >
              <div style={linkStyle}>
                <FaFlickr /> Flickr
              </div>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="whatsapp"
          rightIcon={<ChevronDownIcon />}
        >
          Social
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href="https://twitter.com/reabel" target="blank" isExternal>
              <div style={linkStyle}>
                <FaXTwitter /> Twitter
              </div>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="https://www.linkedin.com/in/ryan-reabel-a7a33712/"
              target="blank"
              isExternal
            >
              <div style={linkStyle}>
                <FaLinkedin /> LinkedIn
              </div>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroup>
  );
};

export default Links;
