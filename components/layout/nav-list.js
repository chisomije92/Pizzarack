import Link from "next/link";
import classes from "./nav-list.module.css";

const NavList = (props) => {
  return (
    <ul className={props.className}>
      <li className={classes.listItem}>
        <Link href={"/"}>Homepage</Link>
      </li>
      <li className={classes.listItem}>
        <Link href={"/menu"}>Menu</Link>
      </li>
      <li className={classes.listItem}>
        <Link href={"/cart"}>Cart</Link>
      </li>
      <li className={classes.listItem}>
        <Link href={"/orders"}>Tracker</Link>
      </li>

      <li className={classes.listItem}>
        <Link href={"/stores"}>Stores</Link>
      </li>
    </ul>
  );
};

export default NavList;
