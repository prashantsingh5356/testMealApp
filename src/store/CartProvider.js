import React, { useReducer } from "react";
import CartContext from "./cart-context";

const initialValue = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    const newItems = [action.item, ...state.items];

    return {
      items: newItems,
      totalAmount: newTotalAmount,
    };
  }

  return initialValue;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, initialValue);

  const addToCartHandler = (item) => {
    dispatchCartState({ type: "ADD", item: item });
  };

  const removeFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addCart: addToCartHandler,
    removeCart: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
