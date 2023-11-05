import { Heading, HStack, Image, Text, VStack, Box  } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack       
      spacing={1}
      align="stretch"
    >      
      <Box borderRadius='2xl' bg="white" color="black">
        <Image borderRadius='2xl' src={imageSrc} />
        <Box m={2}>
          <Heading size='md' textAlign="left" as="h2">{title}</Heading>
        </Box>
        <Box m={2} color="blue">
          <Text>{description}</Text>
        </Box> 
        <Box m={2}>
          <HStack>
            <Text textAlign={["left"]}>See more</Text> 
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Box>        
      </Box>
    </VStack>
  );
};

export default Card;
