import axios from "axios";
import Head from "next/head";
import dbConnect from "../lib/mongo";
import Product from "../models/Product";
import Featured from "../components/featured";
// import { getPizzaData } from "./api/products";
import PizzaList from "../components/pizza-list";
// import { connectDatabase } from "../lib/helpers";
// import { getPizzaData } from "../lib/helpers";

export default function Home({ pizzaList, admin }) {
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

      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  await dbConnect();
  const data = await Product.find();

  return {
    props: {
      pizzaList: JSON.parse(JSON.stringify(data)),
      admin,
    },
  };
};
