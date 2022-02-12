import Image from "next/image";
import classes from "./nav-list.module.css";
import { motion } from "framer-motion";
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
        Homepage
      </motion.li>

      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        exit={animateFrom}
        className={classes.listItem}
        onClick={props.onClick}
      >
        Products
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        exit={animateFrom}
        transition={{ delay: 0.15 }}
        className={classes.listItem}
        onClick={props.onClick}
      >
        Menu
      </motion.li>
      {props.showImage && (
        <Image
          src="/images/logo.png"
          alt="pizzaracks logo"
          width="160px"
          height="97px"
        />
      )}
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        exit={animateFrom}
        transition={{ delay: 0.2 }}
        className={classes.listItem}
        onClick={props.onClick}
      >
        Events
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        exit={animateFrom}
        transition={{ delay: 0.25 }}
        className={classes.listItem}
        onClick={props.onClick}
      >
        Blog
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        exit={animateFrom}
        transition={{ delay: 0.3 }}
        className={classes.listItem}
        onClick={props.onClick}
      >
        Contact
      </motion.li>
    </ul>
  );
};

export default MobileList;
