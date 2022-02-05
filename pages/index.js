import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzRack Pizza Restaurant</title>
        <meta
          name="description"
          content="PizzaRack makes and deliver the best pizzas. Get delicious pizza conveniently, anytime and anywhere"
          title="  Pizza icons created by Freepik - Flaticon"
        />
        <link rel="icon" href="/pizza.png" />
      </Head>
      Homepage
    </div>
  );
}
