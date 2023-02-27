import PropTypes from "prop-types";
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

interface HomeCTAProps {
  link: string;
  image: string;
  title: string;
  description: string;
  btnText: string;
}

const HomeCTA = (cta: HomeCTAProps) => {
  const { image, title, description, btnText } = cta;

  return (
    <>
      <Card
        border={0}
        mb={5}
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={image}
          alt={title}
        />
        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2">{description}</Text>
          </CardBody>

          <CardFooter pt={0}>
            <Button variant="outline" colorScheme="blue">
              {btnText}
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

HomeCTA.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default HomeCTA;
