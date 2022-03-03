import classes from "./stores-data.module.css";

const StoresData = () => {
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
          className={classes.input}
          required
        />
        <button className={classes.subscribeButton}>Subscribe</button>
      </div>
    </section>
  );
};

export default StoresData;
