import classes from "./cart-data.module.css";
import Image from "next/image";
const CartData = () => {
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
            </tr>{" "}
          </thead>
          <tbody>
            <tr className={classes.tr}>
              <td>
                <div className={classes.imageContainer}>
                  <Image
                    src="/images/pizza_select.png"
                    layout="fill"
                    objectFit="cover"
                    alt="pizza"
                  />
                </div>
              </td>
              <td>
                <span className={classes.name}>CORALZO</span>
              </td>
              <td>
                <span className={classes.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={classes.price}> ₦5500</span>
              </td>
              <td>
                <span className={classes.quantity}>2</span>
              </td>
              <td>
                <span className={classes.total}> ₦11000</span>
              </td>
            </tr>
            <tr className={classes.tr}>
              <td>
                <div className={classes.imageContainer}>
                  <Image
                    src="/images/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt="pizza"
                  />
                </div>
              </td>
              <td>
                <span className={classes.name}>CORALZO</span>
              </td>
              <td>
                <span className={classes.extras}>
                  Double ingredient, spicy sauce
                </span>
              </td>
              <td>
                <span className={classes.price}> ₦5500</span>
              </td>
              <td>
                <span className={classes.quantity}>2</span>
              </td>
              <td>
                <span className={classes.total}> ₦11000</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>CART TOTAL</h2>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Subtotal:</b> ₦22000
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Discount:</b> ₦0.00
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Total:</b> ₦22000
          </div>
          <button className={classes.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default CartData;
