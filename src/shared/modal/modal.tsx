import React from "react";
import "./modal.css";

const Modal = ({ onClose, children }: any) => {
  return (
    <div className="background" onClick={onClose}>
      {children}
    </div>
  );
};

export default Modal;
