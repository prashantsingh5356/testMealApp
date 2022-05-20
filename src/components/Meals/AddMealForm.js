import { useState } from "react";
import classes from "./AddMealForm.module.css";

const AddMealForm = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mealName, setMealName] = useState("");
  const [mealDescription, setMealDescription] = useState("");
  const [mealPrice, setMealPrice] = useState(0);

  const mealOpenFormHandler = () => {
    setIsVisible(true);
  };

  const mealCloseFormhandler = (e) => {
    e.preventDefault();

    if (
      mealName.trim() === "" ||
      mealName === Number(mealName) ||
      mealDescription.trim() === "" ||
      mealDescription === Number(mealDescription) ||
      Number(mealPrice) === 0 ||
      Number(mealPrice) === "" ||
      Number(mealPrice) <= 0
    ) {
      setIsVisible(false);
      return;
    }

    const newMeal = {
      id: Math.random().toString(),
      name: mealName,
      description: mealDescription,
      price: +mealPrice,
    };

    props.onMealUpdate(newMeal);
    setMealDescription("");
    setMealName("");
    setMealPrice("");
    // console.log(newMeal);

    setIsVisible(false);
  };

  const mealNameHandler = (e) => {
    setMealName(e.target.value);
  };

  const mealDescriptionHandler = (e) => {
    setMealDescription(e.target.value);
    // console.log(e.target.value);
  };

  const mealPriceHandler = (e) => {
    setMealPrice(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <>
      {!isVisible && (
        <button
          onClick={mealOpenFormHandler}
          type="button"
          className={classes.btn}
        >
          ADD MEALS
        </button>
      )}
      {isVisible && (
        <form onSubmit={mealCloseFormhandler} className={classes.form}>
          <label className={classes["meal-name"]}>Meal Name</label>

          <input
            className={classes["meal-name__input"]}
            type="text"
            onChange={mealNameHandler}
          />
          <br />
          <label className={classes["meal-description"]}>Description</label>

          <input
            className={classes["meal-description__input"]}
            type="text"
            onChange={mealDescriptionHandler}
          />
          <br />
          <label className={classes["meal-price"]}>Price</label>
          <input
            className={classes["meal-price__input"]}
            type="number"
            onChange={mealPriceHandler}
          />
          <br />
          <button className={classes["form-btn"]} type="submit">
            ADD Meal
          </button>
        </form>
      )}
    </>
  );
};

export default AddMealForm;
