import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      bgImage={
        "linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), \
         url('./main-banner.jpg')"
      }
      bgSize={"cover"}
      bgPos={"center"}
      bgAttachment={"fixed"}
      bgRepeat={"no-repeat"}
      minHeight={"60vh"}
    >
      <Box flex={1} maxW={["80%", "70%", "65%", "60%", "45%"]}>
        <Box mb={6} textAlign={"center"}>
          <Heading color="white" size="3xl" mb={6}>
            Find your perfect home
          </Heading>
          <Heading color="white" size="xl">
            We&apos;ll do the work for you
          </Heading>
        </Box>
        <Box w={{ sm: "90%", md: "95%", lg: "90%", xl: "85%" }} m={"0 auto"}>
          <InputGroup size="lg">
            <Input
              borderRadius={"4rem"}
              fontSize="18px"
              height="52px"
              pr="4.5rem"
              pl={"1.5rem"}
              type="text"
              placeholder="Search neighbourhood, address, city, etc."
              bg="white"
              w={"100%"}
            />
            <InputRightElement width="3.5rem" h={"3.3rem"}>
              <IconButton
                aria-label="search properties"
                isRound
                colorScheme={"blue"}
                size="lg"
                onClick={() => {}}
                icon={<SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
        </Box>
      </Box>
    </Stack>
  );
};

export default Hero;
