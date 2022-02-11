import classes from "./nav-bar.module.css";
import Image from "next/image";
import NavList from "./nav-list";
const NavBar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.callButton}>
          <Image
            src="/images/desktop_phone.svg"
            alt="telephone"
            width="42"
            height="42"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={classes.texts}>
          <div className={classes.text}>ORDER NOW</div>
          <div className={classes.text}>+234-PIZZARACKS</div>
        </div>
      </div>
      <nav className={classes.item}>
        <NavList />
      </nav>
      <div className={classes.item}>
        <div className={classes.cart}>
          <Image src="/images/cart.svg" alt="cart" width="30px" height="30px" />
          <div className={classes.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
