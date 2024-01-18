import { Button, ButtonGroup, LinkOverlay } from '@chakra-ui/react'
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
      <Button colorScheme='whatsapp'>
        <LinkOverlay href="https://www.instagram.com/reabel/" target="blank">
          Photography
        </LinkOverlay>
      </Button>
      <Button colorScheme='whatsapp'>
        <LinkOverlay href="https://twitter.com/reabel" target="blank">
        Social
        </LinkOverlay>
      </Button>
      <Button colorScheme='whatsapp'>
        <LinkOverlay href="https://www.linkedin.com/in/ryan-reabel-a7a33712/"
        target="blank">
          LinkedIn
        </LinkOverlay>
      </Button>
    </ButtonGroup>
  );
}

export default Links;
