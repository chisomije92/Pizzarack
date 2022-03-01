import classes from "./cart-data.module.css";
import ReactDom from "react-dom";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import CartModal from "./cart-modal";
const CartData = () => {
  const [showModal, setShowModal] = useState(false);
  const cart = useSelector((state) => state.cart);

  const router = useRouter();

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <table className={classes.table}>
          <thead>
            <tr className={classes.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr className={classes.tr} key={Date.now() * Math.random()}>
                <td>
                  <div className={classes.imageContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt="pizza"
                    />
                  </div>
                </td>
                <td>
                  <span className={classes.name}>{product.title}</span>
                </td>
                <td>
                  <span className={classes.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={classes.price}>₦{product.price}</span>
                </td>
                <td>
                  <span className={classes.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={classes.total}>
                    ₦{product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>CART TOTAL</h2>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Subtotal:</b> ₦{cart.total}
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Discount:</b> ₦0.00
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Total:</b> ₦{cart.total}
          </div>
          <button className={classes.button} onClick={() => setShowModal(true)}>
            PROCEED TO CHECKOUT
          </button>
          {showModal &&
            ReactDom.createPortal(
              <CartModal setShowModal={() => setShowModal(false)} />,
              document.getElementById("modal")
            )}
        </div>
      </div>
    </div>
  );
};

export default CartData;
