import Head from "next/head";
import Featured from "../components/featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>PizzRack Pizza Restaurant</title>
        <meta
          name="description"
          content="PizzaRack makes and deliver the best pizzas. Get delicious pizza conveniently, anytime and anywhere"
        />
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <Featured />
    </div>
  );
}
