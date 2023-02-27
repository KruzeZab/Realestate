import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

interface TestimonialProps {
  name: string;
  avatar: string;
  job: string;
  description: string;
}

const Testimonial = (props: TestimonialProps) => {
  const { name, avatar, job, description } = props;

  return (
    <Card
      mt={5}
      key={name}
      align="center"
      borderTop={"4px solid blue"}
      borderTopRadius={0}
    >
      <CardHeader>
        <Stack direction={"row"}>
          <Avatar
            src={avatar}
            w={"55px"}
            h={"55px"}
            position="absolute"
            top={0}
            left={"50%"}
            transform={"translate(-50%, -50%)"}
          />
          <Box>
            <Heading size="md" pt={5}>
              {name}
            </Heading>
            <Text mt={1} textAlign={"center"} color="blue.500">
              {job}
            </Text>
          </Box>
        </Stack>
      </CardHeader>
      <CardBody py={1} pb={4}>
        {description}
      </CardBody>
    </Card>
  );
};

export default Testimonial;
