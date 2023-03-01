import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";

import ListingCarousel from "../../components/carousel/ListingCarousel";
import QuickCTA from "../../components/CTA/QuickCTA";
import Hero from "../../components/Hero";
import Testimonial from "../../components/Testimonial";
import { homeCtas, testimonials } from "../../data";

const HomePage = () => {
  return (
    <>
      <Box mb={8}>
        <Hero />
      </Box>
      <Container maxW="container.xl">
        <Box mb={8}>
          <Heading textAlign={"center"} size="xl" mb={5}>
            Browse houses near you
          </Heading>
          <ListingCarousel />
        </Box>

        {/* Quick CTA */}
        <Box mb={8}>
          {homeCtas.map((cta) => (
            <QuickCTA key={cta.link} {...cta} />
          ))}
        </Box>

        {/* Testimonials */}
        <Box mb={8}>
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
