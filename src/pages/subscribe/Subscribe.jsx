import Plan from "./plan/Plan";
import Landing from "../../components/Landing";
import OrderSteps from "../../components/OrderSteps";
import blackcup from "../../assets/plan/desktop/image-hero-blackcup.jpg";
import blackcupTablet from "../../assets/plan/tablet/image-hero-blackcup.jpg";
import blackcupMobile from "../../assets/plan/mobile/image-hero-blackcup.jpg";
import PropTypes from "prop-types";
import "./Subscribe.css";

const LANDING_PARA = `Build a subscription plan that best fits your needs. We offer an
assortment of the best artisan coffees from around the globe delivered
fresh to your door.`;

function Subscribe({ screenSize }) {
  return (
    <>
      <Landing
        backgroundImg={
          screenSize > 1024
            ? blackcup
            : screenSize >= 768
            ? blackcupTablet
            : blackcupMobile
        }
        title={"Create a plan"}
        para={LANDING_PARA}
        needBtn={false}
        aboutClass={"about-text"}
      />
      <OrderSteps sectionClass={"subscribe-steps"} />
      <Plan />
    </>
  );
}

Subscribe.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default Subscribe;
