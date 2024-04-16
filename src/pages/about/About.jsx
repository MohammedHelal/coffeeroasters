import Landing from "../../components/Landing";
import PropTypes from "prop-types";
import "./About.css";

//importing images
import whitecup from "../../assets/about/desktop/image-hero-whitecup.jpg";
import whitecupTablet from "../../assets/about/tablet/image-hero-whitecup.jpg";
import whitecupMobile from "../../assets/about/mobile/image-hero-whitecup.jpg";
import commitment from "../../assets/about/desktop/image-commitment.jpg";
import commitmentTablet from "../../assets/about/tablet/image-commitment.jpg";
import commitmentMobile from "../../assets/about/mobile/image-commitment.jpg";
import quality from "../../assets/about/desktop/image-quality.jpg";
import qualityTablet from "../../assets/about/tablet/image-quality.jpg";
import qualityMobile from "../../assets/about/mobile/image-quality.jpg";

import Commitment from "./commitment/Commitment";
import Quality from "./quality/Quality";
import Locations from "./locations/Locations";

function About({ screenSize }) {
  //Landing section's paragraph
  const LANDING_PARA = `Coffeeroasters began its journey of exotic discovery in 1999,
  highlighting stories of coffee from around the world. We have since
  been dedicated to bring the perfect cup - from bean to brew - in every
  shipment.`;

  return (
    <>
      <Landing
        backgroundImg={
          screenSize > 1024
            ? whitecup
            : screenSize >= 768
            ? whitecupTablet
            : whitecupMobile
        }
        title={"About us"}
        para={LANDING_PARA}
        needBtn={false}
        aboutClass={"about-text"}
      />
      <Commitment
        commitment={
          screenSize > 1024
            ? commitment
            : screenSize >= 768
            ? commitmentTablet
            : commitmentMobile
        }
      />
      <Quality
        quality={
          screenSize > 1024
            ? quality
            : screenSize >= 768
            ? qualityTablet
            : qualityMobile
        }
      />
      <Locations />
    </>
  );
}

About.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default About;
