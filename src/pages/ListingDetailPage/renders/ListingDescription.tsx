import { Box, Heading, HStack, Text } from "@chakra-ui/react";

const ListingDescription = () => {
  return (
    <Box>
      <HStack alignItems={"center"} mb={3}>
        <Box
          w={4}
          h={4}
          bg="green.600"
          display="inline-block"
          borderRadius={4}
        />
        <Text fontSize={"md"}> For Sale</Text>
      </HStack>
      <Heading as="h3" size="lg" mb={4}>
        $499,528
      </Heading>
      <HStack spacing={3} mb={4}>
        <Text fontSize="md" color="gray.800">
          <Text as="span" fontWeight={"bold"}>
            3
          </Text>{" "}
          Beds
        </Text>
        <Text fontSize="md" color="gray.800">
          <Text as="span" fontWeight={"bold"}>
            2
          </Text>{" "}
          Beds
        </Text>
        <Text fontSize="md" color="gray.800">
          <Text as="span" fontWeight={"bold"}>
            1,240
          </Text>{" "}
          sqft
        </Text>
        <Text fontSize="md" color="gray.800">
          <Text as="span" fontWeight={"bold"}>
            0.23
          </Text>{" "}
          Acre lot
        </Text>
      </HStack>
      {/* Address */}
      <Text fontSize="md" color="gray.800" mb={6}>
        13421 Gershwin Ln, Port Charlotte, FL 33981
      </Text>
    </Box>
  );
};

export default ListingDescription;
