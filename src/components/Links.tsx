import { Button, ButtonGroup, LinkOverlay, Menu, MenuItem, MenuButton, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
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
      <Button colorScheme='whatsapp'>
        <LinkOverlay href="https://www.instagram.com/reabel/" target="blank">
          Photography
        </LinkOverlay>
      </Button>
      <Menu>
        <MenuButton as={Button} colorScheme='whatsapp' rightIcon={<ChevronDownIcon />}>
          Social
        </MenuButton>
        <MenuList>
          <MenuItem>
            <LinkOverlay href="https://twitter.com/reabel" target="blank">
            Twitter
            </LinkOverlay>
          </MenuItem>
          <MenuItem >
            <LinkOverlay href="https://www.linkedin.com/in/ryan-reabel-a7a33712/"
            target="blank">
              LinkedIn
            </LinkOverlay>
          </MenuItem>
        </MenuList>
      </Menu>
    </ButtonGroup>
  );
}

export default Links;
