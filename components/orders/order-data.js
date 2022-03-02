import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from "./order-data.module.css";

const OrderData = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [email, setEmail] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);
  const [isLoading, setIsLoading] = useState(null);
  const router = useRouter();

  const noOrders = (
    <h4 className={classes.noOrders}>You have no pending order</h4>
  );
  const loading = (
    <p className={classes.loading}>
      Please hold on <span>...</span>
    </p>
  );
  const inputError = <p className={classes.error}>Enter correct details</p>;

  const fetchDataHandler = async () => {
    if (!email || !email.includes("@") || email.trim().length === 0) {
      setIsInputValid(false);
      return;
    }
    console.log(email);
    setIsInputValid(true);
    try {
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
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch(`/api/orders-data`, {
  //         method: "POST",
  //         body: JSON.stringify({ customer: "Jeremiah Lawrence" }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       let data = await response.json();
  //       setSelectedOrders(data);
  //       console.log(data);
  //     };
  //     fetchData().catch(console.error);
  //   }, []);

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
  return (
    <section className={classes.container}>
      <div className={classes.item}>
        <h2>Want to see the status of your order(s)?</h2>
        <h4>Simply follow these steps:</h4>
        <ol>
          <li>Enter your email below</li>
          <li>Click on the search button</li>
          <li>
            Proceed to view the status of your order by clicking on the{" "}
            <b>View Status</b> button
          </li>
          <li>There you have it!</li>
        </ol>
        {/* change to email and create email property */}
        <div className={classes.inputContainer}>
          <label className={classes.label}>ENTER YOUR EMAIL</label>
          <input
            type="email"
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
        {selectedOrders.length === 0 && isInputValid && noOrders}
        <table className={classes.table}>
          <thead>
            <tr className={classes.trTitle}>
              <th>Name</th>
              <th>Address</th>
              {/* <th>Email</th> */}
              <th>Amount</th>
              <th>Date of Order</th>
            </tr>
          </thead>
          {selectedOrders.map((order) => (
            <tbody key={order._id}>
              <tr className={classes.tr}>
                <td className={classes.customer}>{order.customer}</td>
                <td className={classes.address}>{order.address}</td>
                {/* <td className={classes.email}>{order.email}</td> */}
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
      </div>
    </section>
    // <ul>
    //   {selectedOrders.map((order) => (
    //     <li key={order._id}>
    //       <div onClick={() => router.push(`/orders/${order._id}`)}>
    //         {order.customer}
    //       </div>
    //     </li>
    //   ))}
    // </ul>
  );
};

export default OrderData;
