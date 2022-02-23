import classes from "./admin-data.module.css";
import Image from "next/image";
const AdminData = () => {
  return (
    <section className={classes.container}>
      <div className={classes.item}>
        <h1 className={classes.title}>Products</h1>
        <table className={classes.table}>
          <thead>
            <tr className={classes.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes.trTitle}>
              <td>
                <Image
                  src="/images/pizza.png"
                  width={50}
                  height={50}
                  objectFit="cover"
                  alt="pizza"
                />
              </td>
              <td>PizzaId</td>
              <td>Pizza Title</td>
              <td>₦3400</td>
              <td>
                <button className={classes.button}>Edit</button>
                <button className={classes.button}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.item}>
        <h1 className={classes.title}>Orders</h1>
        <table className={classes.table}>
          <thead>
            <tr className={classes.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes.trTitle}>
              <td>{"12348489495788490".slice(0, 5)}...</td>
              <td>John Doe</td>
              <td>₦3400</td>
              <td>Paid</td>
              <td>preparing</td>
              <td>
                <button>Next Stage</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminData;
