import classes from "./nav-bar.module.css";
import Image from "next/image";
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
        <ul className={classes.list}>
          <li className={classes.listItem}>Homepage</li>
          <li className={classes.listItem}>Products</li>
          <li className={classes.listItem}>Menu</li>
          <Image
            src="/images/logo.svg"
            alt="pizzaracks logo"
            width="160px"
            height="97px"
          />
          <li className={classes.listItem}>Events</li>
          <li className={classes.listItem}>Blog</li>
          <li className={classes.listItem}>Contact</li>
        </ul>
      </nav>
      <div className={classes.item}>
        <div className={classes.cart}>
          <Image
            src="/images/cart.svg"
            alt="pizzaracks logo"
            width="30px"
            height="30px"
          />
          <div className={classes.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
