import { useState } from "react";
import PropTypes from "prop-types";
import Accordion from "./accordion/Accordion";

function Form({ current, setCurrent, selection, setSelection, openModal }) {
  const [error, setError] = useState({
    preference: false,
    type: false,
    amount: false,
    grind: false,
    delivery: false,
  });

  function changeHandler(id, selection) {
    setSelection((prevState) => {
      return {
        ...prevState,
        [id]: selection,
      };
    });

    setError((prevState) => {
      return {
        ...prevState,
        [id]: false,
      };
    });

    //determining the current selection
    let tempCurrent =
      id === "preference"
        ? 1
        : id === "type"
        ? 2
        : id === "amount"
        ? 3
        : id === "grind"
        ? 4
        : id === "delivery"
        ? 5
        : 0;

    setCurrent(tempCurrent > current ? tempCurrent : current);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isError = false;

    if (selection.preference === "_____") {
      setError((prevState) => {
        return { ...prevState, preference: true };
      });
      isError = true;
    }
    if (selection.type === "_____") {
      setError((prevState) => {
        return { ...prevState, type: true };
      });
      isError = true;
    }
    if (selection.amount === "_____") {
      setError((prevState) => {
        return { ...prevState, amount: true };
      });
      isError = true;
    }
    if (selection.grind === "_____" && selection.preference === "Filter") {
      setError((prevState) => {
        return { ...prevState, grind: true };
      });
      isError = true;
    }
    if (selection.delivery === "_____") {
      setError((prevState) => {
        return { ...prevState, delivery: true };
      });
      isError = true;
    }

    if (!isError) openModal(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Accordion
        id="preference"
        title="How do you drink your coffee?"
        first={{
          title: "Capsule",
          para: "Compatible with Nespresso systems and similar brewers",
        }}
        second={{
          title: "Filter",
          para: "For pour over or drip methods like Aeropress, Chemex, and V60",
        }}
        third={{
          title: "Espresso",
          para: "Dense and finely ground beans for an intense, flavorful experience",
        }}
        selectStuff={changeHandler}
        error={error.preference ? "a preference" : ""}
      />
      <Accordion
        id="type"
        title="What type of coffee?"
        first={{
          title: "Single origin",
          para: "Distinct, high quality coffee from a specific family-owned farm",
        }}
        second={{
          title: "Decaf",
          para: "Just like regular coffee, except the caffeine has been removed",
        }}
        third={{
          title: "Blended",
          para: "Combination of two or three dark roasted beans of organic coffees",
        }}
        selectStuff={changeHandler}
        error={error.type ? "a type" : ""}
      />
      <Accordion
        id="amount"
        title="How much would you like?"
        first={{
          title: "250g",
          para: "Perfect for the solo drinker. Yields about 12 delicious cups.",
        }}
        second={{
          title: "500g",
          para: "Perfect option for a couple. Yields about 40 delectable cups.",
        }}
        third={{
          title: "1000g",
          para: "Perfect for offices and events. Yields about 90 delightful cups.",
        }}
        selectStuff={changeHandler}
        error={error.amount ? "an amount" : ""}
      />
      <Accordion
        id="grind"
        title="Want us to grind them?"
        first={{
          title: "Wholebean",
          para: "Best choice if you cherish the full sensory experience",
        }}
        second={{
          title: "Filter",
          para: "For drip or pour-over coffee methods such as V60 or Aeropress",
        }}
        third={{
          title: "Cafetiére",
          para: "Course ground beans specially suited for french press coffee",
        }}
        selectStuff={changeHandler}
        disable={
          selection.preference !== "" && selection.preference !== "Filter"
        }
        error={error.grind ? "a grind" : ""}
      />
      <Accordion
        id="delivery"
        title="How often should we deliver?"
        first={{
          title: "Every week",
          para: "$14.00 per shipment. Includes free first-class shipping.",
        }}
        second={{
          title: "Every 2 weeks",
          para: "$17.25 per shipment. Includes free priority shipping.",
        }}
        third={{
          title: "Every month",
          para: "$22.50 per shipment. Includes free priority shipping.",
        }}
        selectStuff={changeHandler}
        error={error.delivery ? "a delivery time" : ""}
      />
      <div className="order-summary">
        <p>ORDER SUMMARY</p>
        <h4>
          “I drink coffee{" "}
          <span className="cyan-span">{selection.preference}</span>, with a{" "}
          <span className="cyan-span">{selection.type}</span> type of bean.{" "}
          <span className="cyan-span">{selection.amount}</span>
          {"  "}
          {!(selection.preference !== "Filter") && (
            <span>
              ground ala <span className="cyan-span">{selection.grind}</span>
            </span>
          )}
          , sent to me <span className="cyan-span">{selection.delivery}</span>
          .”
        </h4>
      </div>
      <button type="submit" className="btn submit-btn">
        Create your plan
      </button>
    </form>
  );
}

export default Form;

Form.propTypes = {
  current: PropTypes.number.isRequired,
  setCurrent: PropTypes.func.isRequired,
  selection: PropTypes.object.isRequired,
  setSelection: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
};
