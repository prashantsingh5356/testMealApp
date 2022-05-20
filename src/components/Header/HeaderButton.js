import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderButton.module.css";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderButton = (props) => {
  const activateModal = () => {
    props.onClick();
  };

  const cartCtx = useContext(CartContext);

  const totalQuantity = cartCtx.items.reduce((acc, item) => {
    return (acc += item.quantity);
  }, 0);

  return (
    <>
      <button className={classes.cart} onClick={activateModal}>
        <span className={classes["cart-icon"]}>
          <CartIcon />
        </span>
        <span className={classes["cart-name"]}>Your Cart</span>
        <span className={classes["cart-quantity"]}>{totalQuantity}</span>
      </button>
    </>
  );
};

export default HeaderButton;
