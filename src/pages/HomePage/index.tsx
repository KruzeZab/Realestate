import { Container } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import HomeCTA from "../../components/CTA/QuickCTA";
import Hero from "../../components/Hero";
import Testimonial from "../../components/Testimonial";
import { homeCtas } from "../../data";
// import ListingCarousel from "../../components/carousel/ListingCarousel";

const HomePage = () => {
  return (
    <>
      <Hero />
      {/* <ListingCarousel /> */}
      <Container maxW="container.xl" pt={10}>
        {homeCtas.map((cta) => (
          <HomeCTA key={cta.link} {...cta} />
        ))}
        <Testimonial />
      </Container>
    </>
  );
};

export default HomePage;
