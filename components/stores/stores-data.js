import { useState } from "react";
import classes from "./stores-data.module.css";

const StoresData = () => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const emailIsValid = email.includes("@") && email !== "";

  const cssInputClassFn = () => {
    if (!isLoading && !isFirstLoad && !emailIsValid) {
      return [classes.input, classes.error].join(" ");
    }
    return [classes.input].join(" ");
  };
  const subscribeHandler = async (email) => {
    setIsFirstLoad(false);
    if (!emailIsValid) {
      return;
    }

    try {
      setIsLoading(true);
      const res = await fetch("/api/stores", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Email could not be sent!");
      }
      setIsSubscribed(true);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return (
    <section className={classes.container}>
      <div className={classes.item}>
        <div className={classes.card}>
          <h4>Abuja</h4>
          <p className={classes.text}>
            1774 CONVENT AVENUE.
            <br /> ABUJA, 110012
            <br /> +234-20772917
          </p>
        </div>
        <div className={classes.card}>
          <h4>Lagos</h4>
          <p className={classes.text}>
            1774 LAGOS AVENUE.
            <br /> Lagos, 110001
            <br /> +234-91189827
          </p>
        </div>
        <div className={classes.card}>
          <h4>Lagos</h4>
          <p className={classes.text}>
            1773 JOHN AVENUE.
            <br /> Lagos, 110022
            <br /> +234-20772917
          </p>
        </div>
        <div className={classes.card}>
          <h4>Imo</h4>
          <p className={classes.text}>
            1774 CHARLES STREET.
            <br /> IMO, 110088
            <br /> +234-20882917
          </p>
        </div>
        <div className={classes.card}>
          <h4>Kaduna</h4>
          <p className={classes.text}>
            1774 BENSON AVENUE.
            <br /> Kaduna, 120011
            <br /> +234-20772990
          </p>
        </div>
        <div className={classes.card}>
          <h4>Ibadan</h4>
          <p className={classes.text}>
            1774 WURA AVENUE.
            <br /> IBADAN, 110099
            <br /> +234-20772891
          </p>
        </div>
        <div className={classes.card}>
          <h4>Kano</h4>
          <p className={classes.text}>
            1774 KANJI AVENUE.
            <br /> KANO, 120012
            <br /> +234-20772999
          </p>
        </div>
        <div className={classes.card}>
          <h4>Calabar</h4>
          <p className={classes.text}>
            1774 PROSPER AVENUE.
            <br /> CALABAR, 191012
            <br /> +234-20772900
          </p>
        </div>
        <div className={classes.card}>
          <h4>Abia</h4>
          <p className={classes.text}>
            1774 DOMINION ESTATE.
            <br /> ABIA, 1939012
            <br /> +234-20771223
          </p>
        </div>
        <div className={classes.card}>
          <h4>Enugu</h4>
          <p className={classes.text}>
            1774 MAXWELL AVENUE.
            <br /> ENUGU, 231012
            <br /> +234-20772800
          </p>
        </div>
        <div className={classes.card}>
          <h4>Port-Harcourt</h4>
          <p className={classes.text}>
            1774 EMMANUEL ESTATE.
            <br /> PORT-HARCOURT, 191012
            <br /> +234-20772901
          </p>
        </div>
        <div className={classes.card}>
          <h4>Anambra</h4>
          <p className={classes.text}>
            1774 DIVINE ESTATE.
            <br /> ANAMBRA, 211012
            <br /> +234-20772910
          </p>
        </div>
        <div className={classes.card}>
          <h4>Yenegoa</h4>
          <p className={classes.text}>
            1774 MEKKY AVENUE.
            <br /> YENEGOA, 191912
            <br /> +234-20772666
          </p>
        </div>
      </div>
      <div className={classes.inputContainer}>
        <label className={classes.label} htmlFor="email">
          Subscribe to our Newsletter!
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onPointerDown={(e) => setIsFirstLoad(true)}
          className={cssInputClassFn()}
          required
        />
        <button
          className={classes.subscribeButton}
          onClick={subscribeHandler.bind(null, email)}
        >
          Subscribe
        </button>

        {!isLoading && !isFirstLoad && emailIsValid && isSubscribed && (
          <p className={classes.subscribed}>Subscribed!</p>
        )}
        {isLoading && <p className={classes.subscribing}>Subscribing...</p>}
      </div>
    </section>
  );
};

export default StoresData;
