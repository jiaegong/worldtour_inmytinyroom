import reactDom from "react-dom";

const ModalPortal = ({ children }: any) => {
  const el: any = document.getElementById("modal");
  return reactDom.createPortal(children, el);
};

export default ModalPortal;
