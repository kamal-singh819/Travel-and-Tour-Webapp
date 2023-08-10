import Hero from "../components/Hero";
import img from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
const Home = () => {
  return (
    <>
      <Hero
        cName="hero"
        heroImg={img}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        url="/"
        btnClass="show"
        buttonText="Travel Plan"
      />
      <Destination />
      <Trip />
    </>
  );
};

export default Home;
