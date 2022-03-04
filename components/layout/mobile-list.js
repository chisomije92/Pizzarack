import classes from "./nav-list.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
const MobileList = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul className={props.className}>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        exit={animateFrom}
        className={classes.listItem}
        onClick={props.onClick}
      >
        <Link href={"/"}>Homepage</Link>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        exit={animateFrom}
        className={classes.listItem}
        onClick={props.onClick}
      >
        <Link href={"/menu"}>Menu</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        exit={animateFrom}
        transition={{ delay: 0.15 }}
        className={classes.listItem}
        onClick={props.onClick}
      >
        <Link href={"/cart"}>Cart</Link>
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        exit={animateFrom}
        transition={{ delay: 0.2 }}
        className={classes.listItem}
        onClick={props.onClick}
      >
        <Link href={"/orders"}>Tracker</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        exit={animateFrom}
        transition={{ delay: 0.25 }}
        className={classes.listItem}
        onClick={props.onClick}
      >
        <Link href={"/stores"}>Stores</Link>
      </motion.li>
    </ul>
  );
};

export default MobileList;
