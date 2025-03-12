import {
  Box,
  Heading,
  Text,
  Link,
  Stack,
  HStack,
  Flex,
  Tag,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

interface LinkItem {
  key: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  links: LinkItem[];
  tags?: string[];
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  links,
  tags = [],
  imageUrl,
}: ProjectCardProps) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const tagBg = useColorModeValue("gray.100", "gray.700");
  
  // Get icon based on link key
  const getLinkIcon = (key: string) => {
    if (key.toLowerCase().includes('github')) return FaGithub;
    return BiLinkExternal;
  };
  
  return (
    <Box 
      mb={6}
      p={5}
      borderRadius="lg"
      bg={cardBg}
      boxShadow="md"
      border="1px"
      borderColor={borderColor}
      transition="all 0.3s ease"
      _hover={{ 
        transform: "translateY(-4px)", 
        boxShadow: "lg",
        borderColor: "red.300" 
      }}
    >
      {imageUrl && (
        <Box 
          mb={4} 
          borderRadius="md" 
          overflow="hidden" 
          height="200px"
        >
          <Box 
            as="img"
            src={imageUrl}
            alt={title}
            objectFit="cover"
            width="100%"
            height="100%"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>
      )}
      
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      
      <Text 
        mb={4}
        color={useColorModeValue("gray.600", "gray.300")}
      >
        {description}
      </Text>
      
      {tags.length > 0 && (
        <HStack spacing={2} mb={4}>
          {tags.map((tag) => (
            <Tag key={tag} size="sm" bg={tagBg}>
              {tag}
            </Tag>
          ))}
        </HStack>
      )}
      
      <Flex>
        {links.map((link) => (
          <Link 
            key={link.key} 
            href={link.url} 
            isExternal 
            mr={4}
            color={useColorModeValue("blue.500", "blue.300")}
          >
            <HStack spacing={1}>
              <Icon as={getLinkIcon(link.key)} />
              <Text>{link.key}</Text>
            </HStack>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default ProjectCard;
