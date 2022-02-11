import classes from "../../styles/order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return classes.done;
    if (index - status === 1) return classes.inProgress;
    if (index - status > 1) return classes.notDone;
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.row}>
          <table className={classes.table}>
            <tr className={classes.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={classes.tr}>
              <td>
                <span className={classes.id}>129837819237</span>
              </td>
              <td>
                <span className={classes.name}>John Doe</span>
              </td>
              <td>
                <span className={classes.address}>Elton st. 212-33 LA</span>
              </td>
              <td>
                <span className={classes.total}>$79.80</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={classes.row}>
          <div className={statusClass(0)}>
            <Image src="/images/paid.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={classes.checkedIcon}>
              <Image
                className={classes.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/images/bake.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={classes.checkedIcon}>
              <Image
                className={classes.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/images/bike.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={classes.checkedIcon}>
              <Image
                className={classes.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/images/delivered.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={classes.checkedIcon}>
              <Image
                className={classes.checkedIcon}
                src="/images/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>CART TOTAL</h2>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={classes.totalText}>
            <b className={classes.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={classes.button}>
            PAID!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;