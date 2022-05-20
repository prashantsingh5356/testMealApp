import classes from "./MealItem.module.css";
import { useState } from "react";

const MealItem = (props) => {
  const price = `$${props.price}`;

  const [quantity, setQuantity] = useState("1");

  const quantityHandler = (e) => {
    setQuantity(e.target.value);
  };

  const addToCartHandler = () => {
    const newItemCart = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      quantity: Number(quantity),
    };

    props.onClick(newItemCart);
  };

  return (
    <div className={classes.meal}>
      <div className={classes["meal-detail"]}>
        <span className={classes["meal-detail__name"]}>{props.name}</span>
        <br />
        <span className={classes["meal-detail__description"]}>
          {props.description}
        </span>
        <br />
        <span className={classes["meal-detail__price"]}>{price}</span>
      </div>
      <div className={classes["meal-quant"]}>
        <label className={classes["meal-quant__label"]}>Quantity</label>
        <input
          onChange={quantityHandler}
          className={classes["meal-quant__input"]}
          type="number"
        />
        <br />
        <button
          onClick={addToCartHandler}
          className={classes["meal-quant__btn"]}
        >
          +Add
        </button>
      </div>
    </div>
  );
};

export default MealItem;
