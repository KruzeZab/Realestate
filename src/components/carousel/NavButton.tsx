import { IconButton } from "@chakra-ui/react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const LeftArrow = ({ onClick }: any) => {
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton
      isRound
      aria-label="previous items carousel"
      icon={<MdArrowBackIos />}
      position="absolute"
      onClick={onClick}
    />
  );
};

export const RightArrow = ({ onClick }: any) => {
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton
      isRound
      aria-label="next items carousel"
      icon={<MdArrowForwardIos />}
      position="absolute"
      right="0"
      onClick={onClick}
    />
  );
};
