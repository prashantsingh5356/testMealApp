import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const closeModal = () => {
    props.onModalClose();
  };

  const cartCtx = useContext(CartContext);

  return (
    <Modal modalClose={props.onModalClose}>
      <div className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className={classes["cart-summery"]}>
        <div className={classes["cart-summery__total"]}>
          <h2>Total</h2>
          <h2>${cartCtx.totalAmount.toFixed(2)}</h2>
        </div>
        <div className={classes["cart-summery__btns"]}>
          <button onClick={closeModal} className={classes["button-close"]}>
            Close
          </button>
          <button className={classes["button-checkout"]}>Checkout</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
