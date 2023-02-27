import { Box, Button, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import QuickCTA from "../../components/CTA/QuickCTA";
import Hero from "../../components/Hero";
import Listing from "../../components/Listing";
import Testimonial from "../../components/Testimonial";
import { homeCtas, testimonials } from "../../data";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Container maxW="container.xl">
        {/* Listings */}
        <Box>
          <Heading textAlign={"center"} size="xl">
            Browse houses near you
          </Heading>
          <SimpleGrid minChildWidth={"300px"} spacing="20px">
            <Listing />
            <Listing />
            <Listing />
          </SimpleGrid>
          <Box textAlign="center">
            <Button variant="outline" colorScheme="blue">
              Browse More
            </Button>
          </Box>
        </Box>

        {/* Quick CTA */}
        <Box>
          {homeCtas.map((cta) => (
            <QuickCTA key={cta.link} {...cta} />
          ))}
        </Box>

        {/* Testimonials */}
        <Box>
          <Heading textAlign={"center"} size="xl">
            Hear from our Clients
          </Heading>
          <SimpleGrid minChildWidth="20rem" spacing="40px">
            {testimonials.map((test) => (
              <Testimonial key={test.name} {...test} />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
