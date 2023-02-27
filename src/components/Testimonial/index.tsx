import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { testimonials } from "../../data";

const Testimonial = () => {
  return (
    <Box mt={20}>
      <Heading textAlign={"center"} size="xl">
        Hear from our Clients
      </Heading>
      <SimpleGrid minChildWidth="20rem" spacing="40px" mt={10}>
        {testimonials.map((test) => {
          return (
            <Card
              mt={5}
              key={test.name}
              align="center"
              borderTop={"4px solid blue"}
              borderTopRadius={0}
            >
              <CardHeader>
                <Stack direction={"row"}>
                  <Avatar
                    src={test.avatar}
                    w={"55px"}
                    h={"55px"}
                    position="absolute"
                    top={0}
                    left={"50%"}
                    transform={"translate(-50%, -50%)"}
                  />
                  <Box>
                    <Heading size="md" pt={5}>
                      {test.name}
                    </Heading>
                    <Text mt={1} textAlign={"center"} color="blue.500">
                      {test.job}
                    </Text>
                  </Box>
                </Stack>
              </CardHeader>
              <CardBody py={1} pb={4}>
                {test.description}
              </CardBody>
            </Card>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonial;
