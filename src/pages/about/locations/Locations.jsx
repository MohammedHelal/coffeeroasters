import uk from "../../../assets/about/desktop/illustration-uk.svg";
import canada from "../../../assets/about/desktop/illustration-canada.svg";
import australia from "../../../assets/about/desktop/illustration-australia.svg";

import PropTypes from "prop-types";
import "../About.css";

export default function Locations() {
  return (
    <section className="locations">
      <h4>Our headquarters</h4>
      <div className="locations-container">
        <Location
          img={uk}
          title="United Kingdom"
          para={["68 Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"]}
        />
        <Location
          img={canada}
          title="Canada"
          para={[
            "1528 Eglinton Avenue",
            "Toronto",
            "Ontario M4P 1A6",
            "+1 416 485 2997",
          ]}
        />
        <Location
          img={australia}
          title="Australia"
          para={["36 Swanston Street", "Kewell", "Victoria", "+61 4 9928 3629"]}
        />
      </div>
    </section>
  );
}

function Location({ img, title, para }) {
  return (
    <div className="locations-wrapper">
      <img src={img} alt="location image" />
      <h3>{title}</h3>
      <p>
        {para[0]}
        <br />
        {para[1]}
        <br />
        {para[2]}
        <br />
        {para[3]}
      </p>
    </div>
  );
}

Location.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired4,
};
