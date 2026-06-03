import buttonCloseCard from "../../../images/button_close.png";
import { createPortal } from "react-dom";

export default function Popup(props) {
  const { onClose, title, children } = props;
  return createPortal(
    <div className="popup">
      <div
        className={`popup__content ${
          !title ? "popup__content_content_image" : ""
        }`}
      >
        <button onClick={onClose} className="popup__close">
          <img
            src={buttonCloseCard}
            alt="Button close Image"
            className="popup__button-close"
            type="button"
          />
        </button>

        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>,
    document.body,
  );
}
