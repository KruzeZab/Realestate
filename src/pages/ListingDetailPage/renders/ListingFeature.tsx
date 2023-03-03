import PropTypes from "prop-types";

import { Box, HStack, Text } from "@chakra-ui/react";

interface ListingFeatureProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const ListingFeature = (props: ListingFeatureProps) => {
  const { icon, title, text } = props;
  return (
    <HStack>
      <Box>
        <Box p={2}>{icon}</Box>
      </Box>
      <Box>
        <Text fontWeight={"bold"}>{title}</Text>
        <Text fontSize={"14px"} color="gray.500">
          {text}
        </Text>
      </Box>
    </HStack>
  );
};

ListingFeature.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ListingFeature;
