import Hero from "../components/Hero";
import img from "../assets/night.jpg";
const About = () => {
  return (
    <>
      <Hero cName="hero-about" heroImg={img} title="About" btnClass="hide" />
    </>
  );
};

export default About;
