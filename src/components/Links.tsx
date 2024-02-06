import { Button, ButtonGroup, LinkOverlay, Link, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaFlickr, FaInstagram } from 'react-icons/fa'; //https://react-icons.github.io/react-icons/#/
import { FaXTwitter } from 'react-icons/fa6' 
import { useNavigate } from 'react-router-dom';
const Links = () => {
  
  const navigate = useNavigate();
  
  return (
    <ButtonGroup isAttached>
      {/* <nav class="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/experiments">Experiments</NavLink>
      </nav>  */}
      <Button onClick={() => {navigate('/')}} colorScheme='whatsapp' variant='solid'>
        Home
      </Button>
      <Button onClick={() => {navigate('/experiments')}} colorScheme='whatsapp' variant='solid'>
        Experiments
      </Button>
      <Button  colorScheme='whatsapp' variant='solid'>
        <LinkOverlay href='http://blog.reabelx.com' target="blank">
          Blog
        </LinkOverlay>
      </Button>
      {/* TOOD: Instead of linking to instagram, create an internal page w/ a photo grid */}
      <Menu>
        <MenuButton as={Button} colorScheme='whatsapp' rightIcon={<ChevronDownIcon />}>
          Photography
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href="https://www.instagram.com/reabel/" target="blank" isExternal>
              <FaInstagram /> Instagram
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="https://www.flickr.com/photos/reabel/" target="blank" isExternal>
              <FaFlickr /> Flickr
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} colorScheme='whatsapp' rightIcon={<ChevronDownIcon />}>
          Social
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link href="https://twitter.com/reabel" target="blank" isExternal>
            <FaXTwitter /> Twitter
            </Link>
          </MenuItem>
          <MenuItem >
            <Link href="https://www.linkedin.com/in/ryan-reabel-a7a33712/"
            target="blank" isExternal>
              <FaLinkedin /> LinkedIn
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroup>
  );
}

export default Links;
