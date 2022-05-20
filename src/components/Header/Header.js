import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <div className={classes["header-container"]}>
      <div className={classes.header}>
        <div className={classes["header-title"]}>
          <h1>Meals</h1>
        </div>
        <div className={classes["header-button"]}>
          <HeaderButton onClick={props.onModalShow}>Your Cart</HeaderButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
