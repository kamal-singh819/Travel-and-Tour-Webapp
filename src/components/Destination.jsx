import "./destination.css";

import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus suscipit obcaecati, aspernatur, officia corporis doloribus harum eaque soluta unde odit quis commodi sapiente dolores quaerat minima. Nobis culpa neque exercitationem commodi sit nihil dolores voluptas maxime. Temporibus quia, dolor aliquam porro quibusdam deserunt, provident tenetur ipsam eveniet, reiciendis veniam voluptatum."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Dagaldul, Batangas"
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus suscipit obcaecati, aspernatur, officia corporis doloribus harum eaque soluta unde odit quis commodi sapiente dolores quaerat minima. Nobis culpa neque exercitationem commodi sit nihil dolores voluptas maxime. Temporibus quia, dolor aliquam porro quibusdam deserunt, provident tenetur ipsam eveniet, reiciendis veniam voluptatum."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
