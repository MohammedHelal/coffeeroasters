import bean from "../../../assets/home/desktop/icon-coffee-bean.svg";
import gift from "../../../assets/home/desktop/icon-gift.svg";
import truck from "../../../assets/home/desktop/icon-truck.svg";

import PropTypes from "prop-types";
import "../Home.css";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="choose-1">
        <div>
          <h2>Why choose us?</h2>
          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
      </div>
      <div className="attributes-wrapper">
        <Attribute
          image={bean}
          title="Best quality"
          para="Discover an endless variety of the world’s best artisan coffee from each of our roasters."
        />
        <Attribute
          image={gift}
          title="Exclusive benefits"
          para="Special offers and swag when you subscribe, including 30% off your first shipment."
        />
        <Attribute
          image={truck}
          title="Free shipping"
          para="We cover the cost and coffee is delivered fast. Peak freshness, guaranteed."
        />
      </div>
    </section>
  );
}

function Attribute({ image, title, para }) {
  return (
    <div className="attributes">
      <img src={image} alt="attribute" />
      <div>
        <h4>{title}</h4>
        <p>{para}</p>
      </div>
    </div>
  );
}

Attribute.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
