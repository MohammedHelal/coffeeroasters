import { useState } from "react";
import Form from "./form/Form";
import Modal from "../../../components/Modal";

function Plan() {
  const [selection, setSelection] = useState({
    preference: "_____",
    type: "_____",
    amount: "_____",
    grind: "_____",
    delivery: "_____",
  });
  const [current, setCurrent] = useState("");
  const [thankYou, setThankYou] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const price =
    selection.delivery === "Every week"
      ? "$ 14.00"
      : selection.delivery === "Every 2 weeks"
      ? "$ 17.25"
      : selection.delivery === "Every month"
      ? "$ 22.50"
      : "";

  return (
    <section className="plan-container">
      <aside className="sidebar">
        <h4 className={`plan-side-title ${current >= 1 ? "black" : ""}`}>
          <span className="cyan-span">01</span> Preferences
        </h4>
        <h4 className={`plan-side-title ${current >= 2 ? "black" : ""}`}>
          <span>02</span> Bean type
        </h4>
        <h4 className={`plan-side-title ${current >= 3 ? "black" : ""}`}>
          <span>03</span> Quantity
        </h4>
        <h4 className={`plan-side-title ${current >= 4 ? "black" : ""}`}>
          <span>04</span> Grind option
        </h4>
        <h4 className={`plan-side-title ${current >= 5 ? "black" : ""}`}>
          <span>05</span> Deliveries
        </h4>
      </aside>
      <Form
        current={current}
        setCurrent={setCurrent}
        selection={selection}
        setSelection={setSelection}
        openModal={setOpenModal}
      />
      <Modal
        selection={selection}
        thankYou={thankYou}
        setThankYou={setThankYou}
        price={price}
        open={openModal}
        setOpen={setOpenModal}
      />
    </section>
  );
}

export default Plan;
