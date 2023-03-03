import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { MdCalendarToday } from "react-icons/md";

import ImageCarousel from "../../components/carousel/ImageCarousel";
import RealtorInfo from "./RealtorInfo";

const ListingDetailPage = () => {
  return (
    <Container maxW="container.xl">
      <Box pt={2}>
        <Text fontSize="sm">
          Presented by: &nbsp;
          <Text fontSize="bold" as="span" fontWeight={"bold"}>
            ToniRose Calimlim
          </Text>
        </Text>
      </Box>
      <Tag colorScheme={"green"} my={2} fontWeight="bold">
        For Sale
      </Tag>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 6, lg: 4 }}>
          <Box mb={10}>
            <ImageCarousel />
          </Box>
          <Grid templateColumns="repeat(6, 1fr)" gap={6}>
            <GridItem colSpan={5}>
              <Box>
                <HStack alignItems={"center"} mb={3}>
                  <Box
                    w={4}
                    h={4}
                    bg="green.600"
                    display="inline-block"
                    borderRadius={4}
                  />
                  <Text fontSize={"md"}> For Sale</Text>
                </HStack>
                <Heading as="h3" size="lg" mb={4}>
                  $499,528
                </Heading>
                <HStack spacing={3} mb={4}>
                  <Text fontSize="md" color="gray.800">
                    <Text as="span" fontWeight={"bold"}>
                      3
                    </Text>{" "}
                    Beds
                  </Text>
                  <Text fontSize="md" color="gray.800">
                    <Text as="span" fontWeight={"bold"}>
                      2
                    </Text>{" "}
                    Beds
                  </Text>
                  <Text fontSize="md" color="gray.800">
                    <Text as="span" fontWeight={"bold"}>
                      1,240
                    </Text>{" "}
                    sqft
                  </Text>
                  <Text fontSize="md" color="gray.800">
                    <Text as="span" fontWeight={"bold"}>
                      0.23
                    </Text>{" "}
                    Acre lot
                  </Text>
                </HStack>
                {/* Address */}
                <Text fontSize="md" color="gray.800" mb={6}>
                  13421 Gershwin Ln, Port Charlotte, FL 33981
                </Text>
              </Box>
            </GridItem>

            <Box>asd</Box>
          </Grid>
          <SimpleGrid mb={8} columns={3} spacing={6}>
            <HStack>
              <Box>
                <Box p={2}>
                  <MdCalendarToday fontSize={"21px"} />
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"}>Single Family</Text>
                <Text fontSize={"14px"} color="gray.500">
                  Property Type
                </Text>
              </Box>
            </HStack>

            <HStack>
              <Box>
                <Box p={2}>
                  <MdCalendarToday fontSize={"21px"} />
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"}>Single Family</Text>
                <Text fontSize={"14px"} color="gray.500">
                  Property Type
                </Text>
              </Box>
            </HStack>

            <HStack>
              <Box>
                <Box p={2}>
                  <MdCalendarToday fontSize={"21px"} />
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"}>Single Family</Text>
                <Text fontSize={"14px"} color="gray.500">
                  Property Type
                </Text>
              </Box>
            </HStack>
            <HStack>
              <Box>
                <Box p={2}>
                  <MdCalendarToday fontSize={"21px"} />
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"}>Single Family</Text>
                <Text fontSize={"14px"} color="gray.500">
                  Property Type
                </Text>
              </Box>
            </HStack>

            <HStack>
              <Box>
                <Box p={2}>
                  <MdCalendarToday fontSize={"21px"} />
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"}>Single Family</Text>
                <Text fontSize={"14px"} color="gray.500">
                  Property Type
                </Text>
              </Box>
            </HStack>

            <HStack>
              <Box>
                <Box p={2}>
                  <MdCalendarToday fontSize={"21px"} />
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"}>Single Family</Text>
                <Text fontSize={"14px"} color="gray.500">
                  Property Type
                </Text>
              </Box>
            </HStack>
          </SimpleGrid>
          <Box mb={4}>
            <Button
              borderRadius={40}
              colorScheme="blue"
              size="sm"
              variant="outline"
            >
              Share this home
            </Button>
          </Box>
          <Box mb={4}>
            <Link color={"blue.600"}>Interested? Send a quotation today.</Link>
          </Box>
          {/* Accordion goes here */}
          asd
        </GridItem>

        <GridItem w="100%" colSpan={{ base: 6, lg: 2 }}>
          <RealtorInfo />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ListingDetailPage;
