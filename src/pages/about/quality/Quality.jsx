import PropTypes from "prop-types";
import "../About.css";

export default function Quality({ quality }) {
  return (
    <section className="quality">
      <div className="quality-text">
        <h2>Uncompromising quality</h2>
        <p>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
      <img src={quality} alt="uncomprimising quality image" />
    </section>
  );
}

Quality.propTypes = {
  quality: PropTypes.string.isRequired,
};
