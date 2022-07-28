import classes from "./cart-data.module.css";
import ReactDom from "react-dom";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import CartModal from "./cart-modal";
import { BsArrowLeftSquareFill } from "react-icons/bs";

const CartData = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  const cart = useSelector((state) => state.cart);
  window.addEventListener(
    "swipe.connect.on_exit",
    function (evt) {
      setShowWidget(false);
    },
    false
  );

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        {cart.products.length === 0 && (
          <>
            <p className={classes.noOrders}>
              No pending cart orders(s).
              <br />
              Please proceed to{" "}
              <Link href="/menu" passHref>
                <a>
                  {" "}
                  <b>MENU</b>
                </a>
              </Link>{" "}
              to make an order.
            </p>
          </>
        )}
        {cart.products.length > 0 && (
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
                        objectFit="contain"
                        alt="pizza"
                      />
                    </div>
                  </td>
                  <td>
                    <span className={classes.name}>{product.title}</span>
                  </td>
                  <td>
                    {product.extras.map((extra) => (
                      <span key={extra._id} className={classes.extras}>
                        {extra.text},{" "}
                      </span>
                    ))}
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
        )}
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
          <button
            className={classes.button}
            onClick={() => setShowModal(true)}
            disabled={cart.products.length === 0}
          >
            PROCEED TO CHECKOUT
          </button>
          <button
            className={classes.button}
            onClick={() => {
              setShowWidget(true);
            }}
            disabled={cart.products.length === 0}
          >
            BUY NOW, PAY LATER (SwipePay)
          </button>
          {showWidget &&
            ReactDom.createPortal(
              <div className={classes["swipe-modal"]}>
                <div
                  className={classes.close}
                  onClick={() => setShowWidget(false)}
                >
                  <BsArrowLeftSquareFill width={90} />
                </div>

                <swipe-pay-widget
                  style={{
                    width: "100%",
                    position: "relative",
                    zIndex: "100",
                  }}
                  merchant-id="999612213216313344" //merchantid
                  pay-amount="240" //amount
                  fallback-url="/menu" //fallbackurl
                ></swipe-pay-widget>
              </div>,
              document.getElementById("modal")
            )}
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
