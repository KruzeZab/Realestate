import {
  Card,
  CardBody,
  Heading,
  HStack,
  IconButton,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import { MdFavoriteBorder } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const Listing = () => {
  return (
    <LinkBox as={RouterLink} to="/details">
      <Card>
        {/* Arials */}
        <HStack position="absolute" top={2} left={2}>
          <Tag variant="solid" colorScheme="teal" fontWeight={"bold"}>
            3 days ago
          </Tag>
        </HStack>
        <IconButton
          aria-label="add to favorites"
          position="absolute"
          colorScheme={"blue"}
          top={2}
          right={2}
          w={8}
          h={8}
          icon={<MdFavoriteBorder fontSize="26px" color="white" />}
        />

        <Image
          src="https://loremflickr.com/320/240/home-for-sale"
          height={"260px"}
        />
        <CardBody px={2} py={2}>
          {/* Price */}
          <Heading as="h5" size="md" pb={2}>
            <LinkOverlay>$466,999</LinkOverlay>
          </Heading>
          {/* Info */}
          <Stack
            direction={"row"}
            divider={<StackDivider borderColor="gray.200" />}
            pb={2}
          >
            <Text fontSize={"sm"}>
              <strong>4</strong>&nbsp; bds
            </Text>
            <Text fontSize={"sm"}>
              <strong>2</strong>&nbsp; ba
            </Text>
            <Text fontSize={"sm"}>
              <strong>1,245</strong>&nbsp; sqft
            </Text>
          </Stack>

          {/* Address */}
          <Text fontSize={"sm"} color={"gray.700"} pb={1}>
            1234 Main St, Anytown, CA 12345
          </Text>

          {/* Agent Name */}
          <Text fontSize={"xs"} color={"gray.600"} textTransform="uppercase">
            Listing By:
            <Text as="span" color="blue.400">
              &nbsp;John Doe
            </Text>
          </Text>
        </CardBody>
      </Card>
    </LinkBox>
  );
};

export default Listing;
