import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdFilterAlt } from "react-icons/md";
import MoreFilter from "../../filters/MoreFilter";

const FilterDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        variant="outline"
        aria-label="filter listings"
        icon={<MdFilterAlt fontSize={"24px"} color="gray" />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={"1px"} mb={2}>
            Filter Homes
          </DrawerHeader>

          <DrawerBody p={0}>
            <MoreFilter />
            <HStack px={3} pt={3} spacing={4}>
              <Button onClick={onClose} variant="solid" colorScheme={"blue"}>
                Apply
              </Button>
              <Button onClick={onClose}>Reset</Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
