import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MdCall, MdLanguage, MdMail } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

interface ContactProps {
  text: React.ReactNode;
  icon: React.ReactNode;
}

export const ContactAgent = ({ text, icon }: ContactProps) => {
  return (
    <HStack alignItems={"center"}>
      <Flex
        p={1}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"blue"}
        mb={1}
      >
        {icon}
      </Flex>
      {text}
    </HStack>
  );
};

const RealtorInfo = () => {
  return (
    <Box border="1px solid #cdcdcd" p={4} borderRadius={4}>
      <Box textAlign={"center"}>
        <Heading as="h3" size="md" mb={4}>
          Realtor Information
        </Heading>
        <Avatar
          size="xl"
          name="Kent Dodds"
          src="https://bit.ly/kent-c-dodds"
          mb={2}
        />
        <Link
          to="/agent"
          display="block"
          as={RouterLink}
          fontSize="xl"
          fontWeight={"medium"}
          color="blue.600"
          mb={1}
        >
          Tony Calimlim
        </Link>
        <Text fontSize="sm" color="gray.800">
          Real Estate Agent
        </Text>
        <Button
          variant="outline"
          borderRadius={40}
          colorScheme="blue"
          size="sm"
          my={3}
        >
          Message Agent
        </Button>
        <Flex
          mt={3}
          mb={6}
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Text color="gray.500">or</Text>
        </Flex>
      </Box>
      <VStack as="article" alignItems={"flex-start"} mb={2}>
        <Box>
          <ContactAgent
            icon={<MdCall fontSize={"18px"} />}
            text={<Text color={"gray.600"}>+977 9864 785 256</Text>}
          />
        </Box>
        <Box>
          <ContactAgent
            icon={<MdLanguage fontSize={"18px"} />}
            text={<Link color={"blue.600"}>pickaproperty.com</Link>}
          />
        </Box>
        <Box>
          <ContactAgent
            icon={<MdMail fontSize={"18px"} />}
            text={<Text color="gray.600">jimili@realestate.co</Text>}
          />
        </Box>
      </VStack>

      <Divider />

      <Text fontSize="sm" color="gray.600" mt={2}>
        By proceeding, you consent to receive calls and texts at the number you
        provided, including marketing by autodialer and prerecorded and
        artificial voice, and email, from realtor.com and others about your
        inquiry and other home-related matters, but not as a condition of any
        purchase. You also agree to our Terms of Use, and to our Privacy Policy
        regarding the information relating to you. Msg/data rates may apply.
        This consent applies even if you are on a corporate, state or national
        Do Not Call list.
      </Text>
    </Box>
  );
};

export default RealtorInfo;
