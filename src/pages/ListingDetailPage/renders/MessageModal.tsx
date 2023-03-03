import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdCall, MdLanguage, MdMail } from "react-icons/md";
import { ContactAgent } from "./RealtorInfo";

const MessageModal = () => {
  const initialRef = useRef<null | HTMLTextAreaElement>(null);

  return (
    <Modal
      isOpen={true}
      size="xl"
      isCentered
      onClose={() => {}}
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Message Tony Calimlim</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Box>
              <Text fontSize="md" mb={3}>
                You can contact via:
              </Text>

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
            </Box>

            <Divider my={3} />
            <Box>
              <FormControl mb={3}>
                <FormLabel color="gray.700">Leave a Message:</FormLabel>
                <Textarea
                  rows={10}
                  cols={60}
                  ref={initialRef}
                  placeholder="Hi! I'd like to enquire about this property."
                />
              </FormControl>
              <FormControl mb={3}>
                <Checkbox defaultChecked>
                  <Text color="gray.700">
                    I have read and agree to the terms and conditions.
                  </Text>
                </Checkbox>
              </FormControl>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button mr={3}>Close</Button>
          <Button colorScheme={"blue"}>Send</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MessageModal;
