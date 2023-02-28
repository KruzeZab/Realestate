import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { MdArrowDropDown, MdSearch } from "react-icons/md";
import FilterDrawer from "../drawer/FilterDrawer";
import {
  BathFilter,
  BedFilter,
  GarageFilter,
  LotFilter,
  MoreFilter,
  PriceFilter,
} from "../filters";

const SearchFilter = () => {
  return (
    <>
      <HStack>
        <InputGroup w={{ base: "100%", lg: "auto" }}>
          <Input type="text" placeholder="Search for a listing..." />
          <InputRightElement h="100%">
            <IconButton
              h="100%"
              w="10px"
              bg="transparent"
              aria-label="Search database"
              _hover={{ bg: "transparent" }}
              icon={<MdSearch fontSize="24px" color="gray" />}
            />
          </InputRightElement>
        </InputGroup>
        <Box display={{ base: "block", lg: "none" }}>
          <FilterDrawer />
        </Box>
        <Box display={{ base: "none", lg: "block" }}>
          <ButtonGroup variant="outline">
            <Popover>
              <PopoverTrigger>
                <Button
                  color="gray.600"
                  fontWeight="medium"
                  rightIcon={<MdArrowDropDown fontSize="18px" />}
                >
                  Price
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Box p={4}>
                  <Text fontSize="sm" mb={2} color="gray.600">
                    Price range:
                  </Text>
                  <PriceFilter />
                </Box>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Button
                  color="gray.600"
                  fontWeight="medium"
                  rightIcon={<MdArrowDropDown fontSize="18px" />}
                >
                  Garage
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Box p={4}>
                  <Text fontSize="md" mb={2} color="gray.600">
                    Garage:
                  </Text>
                  <GarageFilter />
                </Box>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Button
                  color="gray.600"
                  fontWeight="medium"
                  rightIcon={<MdArrowDropDown fontSize="18px" />}
                >
                  Area
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Box p={4}>
                  <Text fontSize="md" mb={2} color="gray.600">
                    Area (sqft):
                  </Text>
                  <LotFilter />
                </Box>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Button
                  color="gray.600"
                  fontWeight="medium"
                  rightIcon={<MdArrowDropDown fontSize="18px" />}
                >
                  Beds
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Box p={4}>
                  <Text fontSize="md" mb={2} color="gray.600">
                    Beds:
                  </Text>
                  <BedFilter />
                </Box>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Button
                  color="gray.600"
                  fontWeight="medium"
                  rightIcon={<MdArrowDropDown fontSize="18px" />}
                >
                  Baths
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Box p={4}>
                  <Text fontSize="md" mb={2} color="gray.600">
                    Baths:
                  </Text>
                  <BathFilter />
                </Box>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Button
                  color="gray.600"
                  fontWeight="medium"
                  rightIcon={<MdArrowDropDown fontSize="18px" />}
                >
                  More Filters
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <MoreFilter />
              </PopoverContent>
            </Popover>
          </ButtonGroup>
        </Box>
      </HStack>
    </>
  );
};

export default SearchFilter;
