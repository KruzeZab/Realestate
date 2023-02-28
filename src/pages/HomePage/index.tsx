import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import QuickCTA from "../../components/CTA/QuickCTA";
import Hero from "../../components/Hero";
import Listing from "../../components/Listing";
import Testimonial from "../../components/Testimonial";
import { homeCtas, testimonials } from "../../data";

const HomePage = () => {
  return (
    <>
      <Box mb={5}>
        <Hero />
      </Box>
      <Container maxW="container.xl">
        {/* Listings */}
        <Box mb={5}>
          <Heading textAlign={"center"} size="xl" mb={5}>
            Browse houses near you
          </Heading>
          <SimpleGrid minChildWidth={"300px"} spacing="20px">
            <Listing />
            <Listing />
            <Listing />
          </SimpleGrid>
        </Box>

        {/* Quick CTA */}
        <Box mb={5}>
          {homeCtas.map((cta) => (
            <QuickCTA key={cta.link} {...cta} />
          ))}
        </Box>

        {/* Testimonials */}
        <Box mb={5}>
          <Heading textAlign={"center"} size="xl" mb={5}>
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
