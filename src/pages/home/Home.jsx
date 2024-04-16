import OrderSteps from "../../components/OrderSteps";
import Landing from "../../components/Landing";
import coffeepress from "../../assets/home/desktop/image-hero-coffeepress.jpg";
import coffeepressTablet from "../../assets/home/tablet/image-hero-coffeepress.jpg";
import coffeepressMobile from "../../assets/home/mobile/image-hero-coffeepress.jpg";
import CoffeeTypeCollection from "./coffee/CoffeeTypeCollection";
import WhyChooseUs from "./why/WhyChooseUs";
import PropTypes from "prop-types";
import "./Home.css";

const LANDING_PARA = `Start your mornings with the world’s best coffees. 
  Try our expertly curated artisan coffees from our 
  best roasters delivered directly to your door, 
  at your schedule.`;

function Home({ screenSize }) {
  return (
    <>
      <Landing
        backgroundImg={
          screenSize > 1024
            ? coffeepress
            : screenSize >= 768
            ? coffeepressTablet
            : coffeepressMobile
        }
        title={"Great coffee made simple"}
        para={LANDING_PARA}
        needBtn={true}
      />
      <CoffeeTypeCollection />
      <WhyChooseUs />
      <OrderSteps sectionClass={""} />
    </>
  );
}

Home.propTypes = {
  screenSize: PropTypes.number.isRequired,
};

export default Home;
