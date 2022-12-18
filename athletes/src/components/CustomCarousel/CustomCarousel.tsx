import Carousel from "react-bootstrap/Carousel";
import { IAthlete } from "../../models/athletes";
import { convertBufferToImage } from "../../utils/helpers";
import "./CustomCarousel.scss";

type Props = {
  athletes: IAthlete[];
  onAthleteClick: (athlete: IAthlete) => void;
};

const CustomCarousel = ({ athletes, onAthleteClick }: Props) => (
  <Carousel>
    {athletes.length !== 0 ? (
      athletes.map((athlete) => (
        <Carousel.Item key={athlete.athlete_id}>
          <div>
            <img
              className="athlete-photo"
              src={convertBufferToImage(athlete.athletePhoto)}
              alt="athlete"
              onClick={(e) => onAthleteClick(athlete)}
              onKeyDown={(e) => onAthleteClick(athlete)}
            />
          </div>
          <h3 className="athlete-name">
            {athlete.name} {athlete.surname}
          </h3>
        </Carousel.Item>
      ))
    ) : (
      <div className="empty-message">No Athletes Found for this Game</div>
    )}
  </Carousel>
);

export default CustomCarousel;
