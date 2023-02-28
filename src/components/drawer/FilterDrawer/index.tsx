import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdFilterAlt } from "react-icons/md";
import MoreFilter from "../../filters/MoreFilter";
// import MoreFilter from "../../filters/MoreFilter";

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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
