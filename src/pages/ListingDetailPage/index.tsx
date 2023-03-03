import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  HStack,
  Link,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { TiChartAreaOutline } from "react-icons/ti";
import {
  MdOutlineBed,
  MdOutlineShower,
  MdOutlineDirectionsCar,
} from "react-icons/md";

import ImageCarousel from "../../components/carousel/ImageCarousel";

import ListingDescription from "./renders/ListingDescription";
import ListingFeature from "./renders/ListingFeature";
import ListingMap from "./renders/ListingMap";
import RealtorInfo from "./renders/RealtorInfo";
import ListingImages from "./renders/ListingImages";

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
      <Grid templateColumns="repeat(6, 1fr)" gap={6} mb={5}>
        <GridItem colSpan={{ base: 6, lg: 4 }}>
          <Box mb={8}>
            <ImageCarousel />
          </Box>
          <Grid templateColumns="repeat(6, 1fr)">
            <GridItem colSpan={{ base: 6, md: 4 }}>
              <ListingDescription />
            </GridItem>
            <GridItem colSpan={{ base: 6, md: 2 }}>
              <Box bg="red" mb={5}>
                <ListingMap />
              </Box>
            </GridItem>
          </Grid>
          <SimpleGrid mb={8} columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            <ListingFeature
              icon={<RiHome2Line fontSize={"21px"} />}
              title="Single Family"
              text=" Property Type"
            />
            <ListingFeature
              icon={<AiOutlineCalendar fontSize={"24px"} />}
              title="77 Days"
              text="Time on Market"
            />
            <ListingFeature
              icon={<MdOutlineDirectionsCar fontSize={"24px"} />}
              title="2 Cars"
              text=" Garage"
            />
            <ListingFeature
              icon={<TiChartAreaOutline fontSize={"24px"} />}
              title="1425"
              text="Square Feet"
            />
            <ListingFeature
              icon={<MdOutlineBed fontSize={"24px"} />}
              title="3 Beds"
              text="Bedrooms"
            />

            <HStack>
              <Box>
                <Box p={2}>
                  <MdOutlineShower fontSize={"24px"} />
                </Box>
              </Box>
              <Box>
                <Text fontWeight={"bold"}>3 Baths</Text>
                <Text fontSize={"14px"} color="gray.500">
                  Bathrooms
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
            <Link color={"blue"}>Interested? Send a quotation today.</Link>
          </Box>
          <Box>
            <Text mb={4}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis quod dolorum tempore vero adipisci harum laboriosam.
              Sed similique eligendi illum unde impedit in debitis voluptatibus,
              optio sequi ad alias tempore! Vitae natus excepturi ullam in
              molestias quidem error dolor asperiores neque sequi alias
              obcaecati velit sed, voluptates rem eveniet, sit fugit et incidunt
              hic corporis sint illum possimus. Illum, temporibus? Tempore aut
              officiis quibusdam, placeat suscipit aperiam, ipsa necessitatibus
              obcaecati at similique ea soluta itaque! Consequuntur aperiam unde
              corporis, velit ut id voluptatem eveniet eius tenetur quis
              provident. Dolores, animi.
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis quod dolorum tempore vero adipisci harum laboriosam.
              Sed similique eligendi illum unde impedit in debitis voluptatibus,
              optio sequi ad alias tempore! Vitae natus excepturi ullam in
              molestias quidem error dolor asperiores neque sequi alias
              obcaecati velit sed, voluptates rem eveniet, sit fugit et incidunt
              hic corporis sint illum possimus. Illum, temporibus? Tempore aut
              officiis quibusdam, placeat suscipit aperiam, ipsa necessitatibus
              obcaecati at similique ea soluta itaque! Consequuntur aperiam unde
              corporis, velit ut id voluptatem eveniet eius tenetur quis
              provident. Dolores, animi.
            </Text>
            <Text mb={4}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis quod dolorum tempore vero adipisci harum laboriosam.
              Sed similique eligendi illum unde impedit in debitis voluptatibus,
              optio sequi ad alias tempore! Vitae natus excepturi ullam in
              molestias quidem error dolor asperiores neque sequi alias
              obcaecati velit sed, voluptates rem eveniet, sit fugit et incidunt
              hic corporis sint illum possimus. Illum, temporibus? Tempore aut
              officiis quibusdam, placeat suscipit aperiam, ipsa necessitatibus
              obcaecati at similique ea soluta itaque! Consequuntur aperiam unde
              corporis, velit ut id voluptatem eveniet eius tenetur quis
              provident. Dolores, animi.
            </Text>
          </Box>
          <ListingImages />
        </GridItem>

        <GridItem w="100%" colSpan={{ base: 6, lg: 2 }}>
          <RealtorInfo />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default ListingDetailPage;
