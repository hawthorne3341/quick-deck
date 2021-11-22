import { createPortal } from "react-dom";

const QuickDeckModal = ({ isVisible, modalBody }) => {
  return isVisible ? createPortal(modalBody, document.body) : null;
};

export default QuickDeckModal;
