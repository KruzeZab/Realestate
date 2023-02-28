import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";

const GarageFilter = () => {
  return (
    <>
      <ButtonGroup variant="outline" colorScheme="blue" mb={1}>
        <Button borderRadius="50%" size="sm">
          1+
        </Button>
        <Button borderRadius="50%" size="sm">
          2+
        </Button>
        <Button borderRadius="50%" size="sm">
          3+
        </Button>
      </ButtonGroup>

      <Box mt={2}>
        <Text fontSize="sm" mb={1} color="gray.600">
          Custom:
        </Text>
        <HStack>
          <Select placeholder="Min" color="gray.600">
            <option value="1000">1</option>
            <option value="1000">2</option>
            <option value="1000">3</option>
            <option value="1000">4</option>
            <option value="1000">5</option>
          </Select>
          <Text fontSize="sm" color="gray.600">
            to
          </Text>

          <Select placeholder="Max" color="gray.600">
            <option value="1000">1</option>
            <option value="1000">2</option>
            <option value="1000">3</option>
            <option value="1000">4</option>
            <option value="1000">5</option>
          </Select>
        </HStack>
      </Box>
    </>
  );
};

export default GarageFilter;
