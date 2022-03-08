import { useRouter } from "next/router";
import { useState } from "react";
import classes from "./order-data.module.css";
import Spinner from "../UI/spinner";

const OrderData = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [email, setEmail] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(null);
  const router = useRouter();

  const formatDate = (date) => {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  const formatTime = (data) => {
    return new Date(data).toLocaleTimeString("en-US");
  };
  const noOrders = (
    <p className={classes.noOrders}>You have no pending order</p>
  );
  // const loading = (
  //   <div className={classes["lds-roller"]}>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //   </div>
  // );
  const inputError = <p className={classes.error}>Invalid values</p>;

  const tableContent = (
    <table className={classes.table}>
      <thead>
        <tr className={classes.trTitle}>
          <th>Name</th>
          <th>Address</th>

          <th>Amount</th>
          <th>Date of Order</th>
        </tr>
      </thead>
      {selectedOrders.map((order) => (
        <tbody key={order._id}>
          <tr className={classes.tr}>
            <td className={classes.customer}>{order.customer}</td>
            <td className={classes.address}>{order.address}</td>
            <td className={classes.total}>₦{order.total}</td>

            <td className={classes.createdAt}>
              {formatDate(order.createdAt)} {formatTime(order.createdAt)}
            </td>

            <td>
              <button onClick={() => router.push(`/orders/${order._id}`)}>
                View status
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );

  const fetchDataHandler = async () => {
    if (!email || !email.includes("@") || email.trim().length === 0) {
      setIsInputValid(false);
      return;
    }

    setIsInputValid(true);
    setIsFirstLoad(false);
    try {
      setIsLoading(true);
      const response = await fetch(`/api/orders-data`, {
        method: "POST",
        body: JSON.stringify({ email: email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Data fetching failed...");
      }
      let data = await response.json();
      setSelectedOrders(data);
      setIsLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={classes.container}>
      <div className={classes.item}>
        <h2>Want to see the status of your order(s)?</h2>
        <h4>Simply follow these steps:</h4>
        <ol>
          <li>
            Enter your <b>email</b> below
          </li>
          <li>
            Click on the <b>search</b> button
          </li>
          <li>
            Proceed to view the status of your order by clicking on the{" "}
            <b>view status</b> button
          </li>
          <li>There you have it!</li>
        </ol>

        <div className={classes.inputContainer}>
          <label className={classes.label} htmlFor="email">
            ENTER YOUR EMAIL
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <button className={classes.searchButton} onClick={fetchDataHandler}>
            Search
          </button>
          {!isInputValid && inputError}
        </div>
      </div>
      <div className={classes.item}>
        <h1 className={classes.title}>Your Order(s)</h1>
        {isLoading && <Spinner />}
        {!isFirstLoad &&
          selectedOrders.length === 0 &&
          isInputValid &&
          !isLoading &&
          noOrders}
        {!isFirstLoad &&
          selectedOrders.length >= 1 &&
          isInputValid &&
          !isLoading &&
          tableContent}
      </div>
    </section>
  );
};

export default OrderData;
