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

interface QuickCTAProps {
  link: string;
  image: string;
  title: string;
  description: string;
  btnText: string;
}

const QuickCTA = (cta: QuickCTAProps) => {
  const { image, title, description, btnText } = cta;

  return (
    <>
      <Card
        border={0}
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

QuickCTA.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export default QuickCTA;
