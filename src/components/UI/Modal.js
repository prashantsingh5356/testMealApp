import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  const modalClose = () => {
    props.onClick();
  };
  return <div onClick={modalClose} className={classes.backdrop}></div>;
};

const OverLay = (props) => {
  return <div className={classes.overlay}>{props.children}</div>;
};

const selectedPortal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClick={props.modalClose} />,
        selectedPortal
      )}
      ;
      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        selectedPortal
      )}
    </>
  );
};

export default Modal;
