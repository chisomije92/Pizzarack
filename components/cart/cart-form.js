import { useEffect, useState } from "react";
import classes from "./cart-form.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";
const CartForm = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(null);
  const cart = useSelector((state) => state.cart);

  const nameIsValid = name !== "";
  const emailIsValid = email.includes("@") && email !== "";
  const addressIsValid = address !== "";
  const phoneNumberIsValid = phoneNumber !== "";

  const router = useRouter();

  useEffect(() => {
    setIsValid(
      nameIsValid && emailIsValid && addressIsValid && phoneNumberIsValid
    );
  }, [
    setIsValid,
    nameIsValid,
    emailIsValid,
    phoneNumberIsValid,
    addressIsValid,
  ]);

  const createOrder = async (data) => {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resData = await res.json();
      res.status === 201 && router.push(`/orders/${resData._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const componentProps = {
    email: email,
    amount: cart.total * 100,
    metadata: {
      name: name,
      phone: phoneNumber,
    },
    publicKey: "pk_test_f3d22f397b9d064d5acd5cca37a3c68bdaa2f88a",
    text: "CHECKOUT NOW!",
    onSuccess: () => {
      setShowModal(false);
      createOrder({
        customer: name,
        address: address,
        email: email,
        total: cart.total,
        method: 1,
      });
    },
  };

  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <h3>CHECKOUT FORM</h3>
      </div>

      <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
        <div className={classes.item}>
          <label className={classes.label}>FULL NAME</label>
          <input
            type="text"
            placeholder="Enter full name"
            className={classes.input}
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label} htmlFor="email">
            EMAIL
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
            className={classes.input}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label} htmlFor="address">
            ADDRESS
          </label>
          <input
            id="address"
            type="text"
            placeholder="Enter Address"
            className={classes.input}
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            required
          />
        </div>

        <div className={classes.item}>
          <label className={classes.label} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="number"
            placeholder="Enter Phone Number"
            className={classes.input}
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            required
          />
        </div>
        {!isValid && (
          <button className={classes.buttonMod}>ENTER DETAILS!</button>
        )}
        {isValid && (
          <PaystackButton className={classes.button} {...componentProps} />
        )}
      </form>
    </div>
  );
};

export default CartForm;
