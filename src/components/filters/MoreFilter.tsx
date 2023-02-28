import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Input,
  Text,
} from "@chakra-ui/react";
import BedFilter from "./BedFilter";
import GarageFilter from "./GarageFilter";
import LotFilter from "./LotFilter";
import PriceFilter from "./PriceFilter";
import BathFilter from "./BathFilter";

const MoreFilter = () => {
  return (
    <>
      <Box mb={2} p={2}>
        <Text fontSize="md" mb={2} color="gray.600">
          Keyword search:
        </Text>

        <Input placeholder="Search" />
      </Box>

      <Box mb={2}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <PriceFilter />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" flex="1" textAlign="left">
                  Garage
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <GarageFilter />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" flex="1" textAlign="left">
                  Area
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <LotFilter />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" flex="1" textAlign="left">
                  Beds
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <BedFilter />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton p={3}>
                <Box as="span" flex="1" textAlign="left">
                  Baths
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <BathFilter />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </>
  );
};

export default MoreFilter;
