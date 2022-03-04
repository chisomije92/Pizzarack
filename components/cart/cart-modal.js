import CartForm from "./cart-form";
import classes from "./cart-form.module.css";
import { motion, AnimatePresence } from "framer-motion";

const CartModal = ({ setShowModal }) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <motion.div
      className={classes.modal}
      key="motion"
      initial={animateFrom}
      animate={animateTo}
      transition={{ delay: 0.04 }}
      exit={animateFrom}
    >
      <div className={classes.close} onClick={() => setShowModal(false)}>
        X
      </div>
      <CartForm setShowModal={setShowModal} />
    </motion.div>
  );
};

export default CartModal;
