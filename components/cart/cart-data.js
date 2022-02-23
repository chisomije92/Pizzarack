import classes from "./cart-data.module.css";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
import axios from "axios";
const CartData = () => {
  const [isPaid, setIsPaid] = useState(false);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const router = useRouter();

  const createOrder = async (data) => {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = res.json();
      res.status === 201 && router.push(`/orders/${resData._id}`);
    } catch (err) {
      console.log(err);
    }
  };
  const componentProps = {
    email: "jeremiahlawrence14@gmail.com",
    amount: cart.total * 100,
    metadata: {
      name: "Jeremiah Lawrence",
      phone: "08135069250",
    },
    publicKey: "pk_test_f3d22f397b9d064d5acd5cca37a3c68bdaa2f88a",
    text: "CHECKOUT NOW!",
    onSuccess: () => {
      setIsPaid(true);
      createOrder({
        customer: "Jeremiah Lawrence",
        address: "2, Great Road, Lagos, Nigeria",
        total: cart.total,
        method: 1,
      });
    },
  };

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
          {isPaid && <button className={classes.paidButton}>PAID!</button>}
          {!isPaid && (
            <PaystackButton className={classes.button} {...componentProps} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CartData;
