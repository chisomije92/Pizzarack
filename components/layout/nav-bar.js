import classes from "./nav-bar.module.css";
import Image from "next/image";
import NavList from "./nav-list";
import { CgMenu } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <CgMenu
      className={classes.menuIcon}
      size="35px"
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgCloseR
      className={classes.menuIcon}
      size="35px"
      onClick={() => setOpen(!open)}
    />
  );
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <header className={classes.container}>
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
        <NavList className={classes.list} showImage />
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            key="motion"
            initial={animateFrom}
            animate={animateTo}
            transition={{ delay: 0.04 }}
            exit={animateFrom}
            className={classes.itemMobile}
          >
            <NavList
              className={classes.listMobile}
              onClick={() => setOpen(false)}
            />
          </motion.nav>
        )}
      </AnimatePresence>

      <div className={classes.item}>
        <div className={classes.cart}>
          <Image src="/images/cart.svg" alt="cart" width="30px" height="30px" />
          <div className={classes.counter}>2</div>
        </div>
      </div>

      <div className={classes.item}>{open ? closeIcon : hamburgerIcon}</div>
    </header>
  );
};

export default NavBar;
