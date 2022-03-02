import Image from "next/image";
import classes from "./nav-list.module.css";

const NavList = (props) => {
  return (
    <ul className={props.className}>
      <li className={classes.listItem}>Homepage</li>
      <li className={classes.listItem}>Products</li>
      <li className={classes.listItem}>Cart</li>
      <li className={classes.listItem}>Events</li>
      <li className={classes.listItem}>Blog</li>
      <li className={classes.listItem}>Contact</li>
    </ul>
  );
};

export default NavList;
