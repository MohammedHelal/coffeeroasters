import { useState } from "react";
import PropTypes from "prop-types";

function Accordion({
  id,
  title,
  first,
  second,
  third,
  selectStuff,
  disable,
  error,
}) {
  const [rotate, setRotate] = useState(false);

  return (
    <fieldset className="accordion-wrapper">
      <label className="accordion-text" onClick={() => setRotate(!rotate)}>
        <div className={`accordion-flex ${disable && "disable"}`}>
          <h2>{title}</h2>
          <i
            className={`fa-solid fa-angle-up fa-2xl ${
              !rotate && "fa-rotate-180"
            }`}
          ></i>
        </div>
        {error !== "" && <p className="error">Please select {error}</p>}
      </label>
      <div className="choices-container">
        <Choice
          id={id}
          title={first.title}
          para={first.para}
          rotate={rotate}
          selectStuff={selectStuff}
          disable={disable}
        />
        <Choice
          id={id}
          title={second.title}
          para={second.para}
          rotate={rotate}
          selectStuff={selectStuff}
          disable={disable}
        />
        <Choice
          id={id}
          title={third.title}
          para={third.para}
          rotate={rotate}
          selectStuff={selectStuff}
          disable={disable}
        />
      </div>
    </fieldset>
  );
}

export default Accordion;

function Choice({ id, title, para, rotate, selectStuff, disable }) {
  const handleSelection = () => {
    selectStuff(id, title);
  };

  return (
    <div className="radio-wrapper">
      <input
        type="radio"
        name={id}
        value={title}
        onChange={handleSelection}
        style={{
          maxHeight: `${rotate && !disable ? "250px" : "0"}`,
          padding: `${rotate && !disable ? "25px" : "0 25px"}`,
        }}
        disabled={disable}
      />
      <div
        className="choice-wrapper"
        style={{
          maxHeight: `${rotate && !disable ? "250px" : "0"}`,
          padding: `${rotate && !disable ? "25px" : "0 25px"}`,
        }}
      >
        <h4>{title}</h4>
        <p>{para}</p>
      </div>
    </div>
  );
}
//
Accordion.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  first: PropTypes.object.isRequired,
  second: PropTypes.object.isRequired,
  third: PropTypes.object.isRequired,
  selectStuff: PropTypes.func.isRequired,
  disable: PropTypes.bool,
  error: PropTypes.string.isRequired,
};

Choice.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  rotate: PropTypes.bool.isRequired,
  selectStuff: PropTypes.func.isRequired,
  disable: PropTypes.bool,
};
