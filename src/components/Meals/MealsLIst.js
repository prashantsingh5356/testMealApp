import AddMealForm from "./AddMealForm";
import MealItem from "./MealItem";
import classes from "./MealsList.module.css";
import { useState, useContext } from "react";
import CartContext from "../../store/cart-context";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealsList = (props) => {
  const [meal, setMeal] = useState(DUMMY_MEALS);

  const updateMealList = (meal) => {
    setMeal((prevMeals) => {
      return [...prevMeals, meal];
    });
  };

  const cartCtx = useContext(CartContext);

  const mealList = meal.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        onClick={cartCtx.addCart}
      />
    );
  });
  return (
    <>
      <div className={classes["meal-list__container"]}>
        <AddMealForm onMealUpdate={updateMealList} />
        {mealList}
      </div>
    </>
  );
};

export default MealsList;
