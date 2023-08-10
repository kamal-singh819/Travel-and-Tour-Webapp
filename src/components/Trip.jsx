import "./trip.css";
import TripData from "./TripData";

import trip1 from "../assets/5.jpg";
import trip2 from "../assets/8.jpg";
import trip3 from "../assets/6.jpg";

const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google map</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Trip in Varanasi"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus suscipit obcaecati, aspernatur, officia corporis doloribus harum eaque soluta unde odit quis commodi sapiente dolores quaerat minima. Nobis culpa neque exercitationem commodi sit nihil dolores voluptas maxime. Temporibus quia, dolor aliquam porro quibusdam deserunt, provident tenetur ipsam eveniet, reiciendis veniam voluptatum."
        />
        <TripData
          image={trip2}
          heading="Trip in Ayodhya"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus suscipit obcaecati, aspernatur, officia corporis doloribus harum eaque soluta unde odit quis commodi sapiente dolores quaerat minima. Nobis culpa neque exercitationem commodi sit nihil dolores voluptas maxime. Temporibus quia, dolor aliquam porro quibusdam deserunt, provident tenetur ipsam eveniet, reiciendis veniam voluptatum."
        />
        <TripData
          image={trip3}
          heading="Trip in Ujjain"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus suscipit obcaecati, aspernatur, officia corporis doloribus harum eaque soluta unde odit quis commodi sapiente dolores quaerat minima. Nobis culpa neque exercitationem commodi sit nihil dolores voluptas maxime. Temporibus quia, dolor aliquam porro quibusdam deserunt, provident tenetur ipsam eveniet, reiciendis veniam voluptatum."
        />
      </div>
    </div>
  );
};

export default Trip;
