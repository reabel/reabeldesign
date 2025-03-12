import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Links from "./Links";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Links />
      <Box as="main" flex="1" py={{ base: 6, md: 10 }}>
        <Container maxW="container.xl" px={4}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;