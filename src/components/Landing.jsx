import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./styles/Landing.css";

function Landing({ backgroundImg, title, para, needBtn, aboutClass }) {
  return (
    <article className="landing">
      <img src={backgroundImg} alt="landing image" />
      <div className={`landing-text ${aboutClass || "grey-para"}`}>
        <h1>{title}</h1>
        <p>{para}</p>
        {needBtn && (
          <Link to="/subscribe">
            <button className="btn">Create your plan</button>
          </Link>
        )}
      </div>
    </article>
  );
}

Landing.propTypes = {
  backgroundImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  needBtn: PropTypes.bool.isRequired,
  aboutClass: PropTypes.string,
};

export default Landing;
