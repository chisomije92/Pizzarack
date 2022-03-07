import classes from "./nav-bar.module.css";
import Image from "next/image";
import MobileList from "./mobile-list";
import NavList from "./nav-list";
import { CgMenu } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [open, setOpen] = useState(false);

  const [isLoaded, setLoaded] = useState(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

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
        <div>
          <Image
            src="/images/logo.png"
            alt="pizzaracks logo"
            width="110px"
            height="110px"
            objectFit="contain"
          />
        </div>
      </div>
      <nav className={classes.item}>
        <NavList className={classes.list} />
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
            <MobileList
              className={classes.listMobile}
              onClick={() => setOpen(false)}
            />
          </motion.nav>
        )}
      </AnimatePresence>
      <Link href={"/cart"} passHref>
        <div className={classes.item}>
          <div className={classes.cart}>
            <Image
              src="/images/cart.svg"
              alt="cart"
              width="40px"
              height="40px"
            />
            <div className={classes.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
      <div className={classes.item}>
        {open ? (
          <motion.span
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.02 }}
            exit={{ opacity: 0 }}
          >
            {closeIcon}
          </motion.span>
        ) : (
          <motion.span
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.3 }}
            exit={{ opacity: 0 }}
          >
            {hamburgerIcon}
          </motion.span>
        )}
      </div>
    </header>
  );
};

export default NavBar;
