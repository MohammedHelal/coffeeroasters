import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/OrderSteps.css";

function OrderSteps({ sectionClass }) {
  return (
    <section className={`how-it-works ${sectionClass}`}>
      <h4>How it works</h4>
      <div className="lines">
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
        <div className="circle"></div>
      </div>
      <div className="steps-container">
        <Step
          number="01"
          title="Pick your coffee"
          para="Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."
        />
        <Step
          number="02"
          title="Choose the frequency"
          para="Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."
        />
        <Step
          number="03"
          title="Receive and enjoy!"
          para="We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."
        />
      </div>
      {!sectionClass && (
        <Link to="/subscribe">
          <button className="btn">Create your plan</button>
        </Link>
      )}
    </section>
  );
}

OrderSteps.propTypes = {
  sectionClass: PropTypes.string.isRequired,
};

export default OrderSteps;

function Step({ number, title, para }) {
  return (
    <div className="steps-wrapper">
      <h1>{number}</h1>
      <div>
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
}

Step.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
