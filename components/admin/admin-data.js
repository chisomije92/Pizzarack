import classes from "./admin-data.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
const AdminData = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [ordersList, setOrdersList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];

  const deleteHandler = async (id) => {
    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const statusFN = (id) => {
    const item = ordersList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;
    if (currentStatus < 2) {
      return {
        status: currentStatus + 1,
      };
    } else {
      return {
        status: 2,
      };
    }
  };

  const statusHandler = async (id) => {
    const statusObj = statusFN(id);
    try {
      const res = await fetch(`/api/orders/${id}`, {
        method: "PUT",
        body: JSON.stringify(statusObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setOrdersList([data, ...ordersList.filter((order) => order._id !== id)]);
      console.log(ordersList);
    } catch (err) {
      console.log(err);
    }
  };
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
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={classes.trTitle}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit="cover"
                    alt="pizza"
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>{product.prices[0]}</td>
                <td>
                  <button className={classes.button}>Edit</button>
                  <button
                    className={classes.button}
                    onClick={() => deleteHandler(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
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
          {ordersList.map((order) => (
            <tbody key={order._id}>
              <tr className={classes.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>₦{order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={statusHandler.bind(null, order._id)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default AdminData;
