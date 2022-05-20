import Header from "./components/Header/Header";
import { useState } from "react";

import "./App.css";
import MealsList from "./components/Meals/MealsLIst";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModal = () => {
    setModalIsShown(true);
  };

  const closeModal = () => {
    setModalIsShown(false);
  };

  return (
    <CartProvider>
      {modalIsShown && <Cart onModalClose={closeModal} />}
      <Header onModalShow={showModal} />
      <div className="meal-list">
        <MealsList />
      </div>
    </CartProvider>
  );
}

export default App;
