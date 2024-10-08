import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles/Modal.css";

function Modal({ selection, thankYou, price, setThankYou, open, setOpen }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      dialog.current.showModal();
    }
  });

  function closeModal() {
    dialog.current.close();
    setThankYou(false);
    setOpen(false);
  }

  return createPortal(
    <dialog ref={dialog} className="modal-container">
      {!thankYou ? (
        <>
          <h2>Order Summary</h2>
          <div className="modal-main-section">
            <div className="modal-main-text">
              <h4>
                “I drink my coffee{" "}
                <span className="cyan-span">{selection.preference}</span>, with
                a <span className="cyan-span">{selection.type}</span> type of
                bean. <span className="cyan-span">{selection.amount}</span>
                {"  "}
                {!(selection.preference !== "Filter") && (
                  <span>
                    ground ala{" "}
                    <span className="cyan-span">{selection.grind}</span>
                  </span>
                )}
                , sent to me{" "}
                <span className="cyan-span">{selection.delivery}</span>
                .”
              </h4>
              <p>
                Is this correct? You can proceed to checkout or go back to plan
                selection if something is off. Subscription discount codes can
                also be redeemed at the checkout.
              </p>
            </div>
            <div className="modal-checkout">
              <h3>{price}/ mo</h3>
              <button className="btn" onClick={() => setThankYou(true)}>
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Thank you</h2>
          <div className="modal-main-section">
            <div className="modal-main-text">
              <h4>
                <span className="cyan-span">Thank you</span> for choosing us.{" "}
                <br />
                Your order should arrive in the next 48 hours.
              </h4>
            </div>
            <div className="modal-checkout">
              <button
                className="btn"
                onClick={closeModal}
                style={{ marginLeft: "auto" }}
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;

Modal.propTypes = {
  selection: PropTypes.object.isRequired,
  thankYou: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  setThankYou: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
