import Hero from "../components/Hero";
import img from "../assets/night.jpg";
import Trip from "../components/Trip";

const Service = () => {
  return (
    <>
      <Hero cName="hero-about" heroImg={img} title="Service" btnClass="hide" />
      <Trip />
    </>
  );
};

export default Service;
