import classes from "./CartItem.module.css";
import { useState } from "react";

const CartItem = (props) => {
  const [updatesQuantity, setUpdatedQuantity] = useState(props.quantity);

  const quantityDecreaseHandler = (e) => {
    setUpdatedQuantity((prevQuant) => (prevQuant -= 1));
  };

  const quantityIncreaseHandler = (e) => {
    setUpdatedQuantity((prevQuant) => (prevQuant += 1));
  };

  const itemTotal = props.price * props.quantity;
  return (
    <>
      <div className={classes["cart-item"]}>
        <span className={classes["cart-item__name"]}>{props.name}</span>
        <span className={classes["cart-item__value"]}>
          <button onClick={quantityDecreaseHandler}>-</button>
          <span className={classes.value}>{updatesQuantity}</span>
          <button onClick={quantityIncreaseHandler}>+</button>
        </span>
        <span className={classes["cart-item__total"]}>{`$${itemTotal.toFixed(
          2
        )}`}</span>
      </div>
      <div className={classes.divider}></div>
    </>
  );
};

export default CartItem;
