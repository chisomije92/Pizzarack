import CartForm from "./cart-form";
import classes from "./cart-form.module.css";
const CartModal = ({ setShowModal }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.close} onClick={() => setShowModal(false)}>
        X
      </div>
      <CartForm setShowModal={setShowModal} />
    </div>
  );
};

export default CartModal;
