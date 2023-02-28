import { HStack, Input, Text } from "@chakra-ui/react";

const LotFilter = () => {
  return (
    <HStack>
      <Input type="number" placeholder="Min" />
      <Text fontSize="sm">to</Text>
      <Input type="number" placeholder="Max" />
    </HStack>
  );
};

export default LotFilter;
