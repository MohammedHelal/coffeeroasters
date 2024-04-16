import espresso from "../../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../../assets/home/desktop/image-planalto.png";
import piccollo from "../../../assets/home/desktop/image-piccollo.png";
import danche from "../../../assets/home/desktop/image-danche.png";

import PropTypes from "prop-types";
import "../Home.css";

export default function CoffeeTypeCollection() {
  return (
    <section className="collection">
      <h1 className="title">our collection</h1>
      <div className="coffee-collection">
        <CoffeeType
          image={espresso}
          title="Gran Espresso"
          para="Light and flavorful blend with cocoa and black pepper for an intense experience"
        />
        <CoffeeType
          image={planalto}
          title="Planalto"
          para="Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
        />
        <CoffeeType
          image={piccollo}
          title="Piccollo"
          para="Mild and smooth blend featuring notes of toasted almond and dried cherry"
        />
        <CoffeeType
          image={danche}
          title="Danche"
          para="Ethiopian hand-harvested blend densely packed with vibrant fruit notes"
        />
      </div>
    </section>
  );
}

function CoffeeType({ image, title, para }) {
  return (
    <div className="coffee">
      <img src={image} alt="coffee type" />
      <div>
        <h4>{title}</h4>
        <p>{para}</p>
      </div>
    </div>
  );
}

CoffeeType.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
