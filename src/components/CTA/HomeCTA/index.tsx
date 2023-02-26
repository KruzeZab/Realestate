import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { homeCtas } from "../../../data";

const HomeCTA = () => {
  return (
    <>
      {homeCtas.map((cta) => (
        <Card
          key={cta.link}
          border={0}
          mb={5}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={cta.image}
            alt={cta.title}
          />
          <Stack>
            <CardBody>
              <Heading size="md">{cta.title}</Heading>

              <Text py="2">{cta.description}</Text>
            </CardBody>

            <CardFooter pt={0}>
              <Button variant="outline" colorScheme="blue">
                {cta.btnText}
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </>
  );
};

export default HomeCTA;
