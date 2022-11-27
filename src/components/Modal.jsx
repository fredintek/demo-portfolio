import ReactDOM from "react-dom";
import React from "react";
import Card from "./Card";
import "./Modal.css";
import { useModalContext } from "../context/modalContext";

// react portals takes in 2 arguments basically, the component and the htmlElement
// ReactDom.createPortal(<>Component</>, document.getElementById("overlay"))

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler, showModalHandler } = useModalContext();

  return (
    <>
      {showModal &&
        ReactDOM.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}>
              <Card className={className}>{children}</Card>
            </section>
          </>,
          document.getElementById("overlay")
        )}
    </>
  );
};

export default Modal;
