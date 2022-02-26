import Head from "next/head";
import dbConnect from "../lib/mongo";
import Product from "../models/Product";
import Featured from "../components/featured";

import PizzaList from "../components/pizza-list";
import { useState } from "react";
import AddButton from "../components/add/add-button";
import Add from "../components/add/add";
export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);
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
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add />}
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
