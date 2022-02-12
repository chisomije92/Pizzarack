import Image from "next/image";
import classes from "./nav-list.module.css";

const NavList = (props) => {
  return (
    <ul className={props.className}>
      <li className={classes.listItem}>Homepage</li>

      <li className={classes.listItem}>Products</li>
      <li className={classes.listItem}>Menu</li>
      <Image
        src="/images/logo.png"
        alt="pizzaracks logo"
        width="160px"
        height="97px"
      />
      <li className={classes.listItem}>Events</li>
      <li className={classes.listItem}>Blog</li>
      <li className={classes.listItem}>Contact</li>
    </ul>
  );
};

export default NavList;
