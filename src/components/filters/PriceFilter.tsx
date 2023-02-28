import { HStack, Select, Text } from "@chakra-ui/react";

const PriceFilter = () => {
  return (
    <HStack>
      <Select placeholder="No Min" color="gray.600">
        <option value="1000">$90K</option>
        <option value="1000">$180K</option>
        <option value="1000">$350K</option>
        <option value="1000">$500K</option>
        <option value="1000">$800K</option>
        <option value="1000">$1M+</option>
      </Select>
      <Text fontSize="sm">to</Text>
      <Select placeholder="No Max" color="gray.600">
        <option value="1000">$90K</option>
        <option value="1000">$180K</option>
        <option value="1000">$350K</option>
        <option value="1000">$500K</option>
        <option value="1000">$800K</option>
        <option value="1000">$1M+</option>
      </Select>
    </HStack>
  );
};

export default PriceFilter;
