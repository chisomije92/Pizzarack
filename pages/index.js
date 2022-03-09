import Head from "next/head";
import dbConnect from "../lib/mongo";
import Product from "../models/Product";
import Featured from "../components/featured";

import PizzaList from "../components/pizza-list";
import { useEffect, useMemo, useState } from "react";

export default function Home({ pizzaList }) {
  const [pizzaArr, setPizzaArr] = useState([]);
  const pizzaArray = useMemo(
    () => [pizzaList[0], pizzaList[1], pizzaList[2]],
    [pizzaList]
  );

  useEffect(() => {
    pizzaArray.forEach((item, index, arr) => {
      if (!item) {
        pizzaArray.splice(index, 1);
        setPizzaArr(arr);
      }
    });

    setPizzaArr(pizzaArray);
  }, [pizzaArr, pizzaList, pizzaArray]);

  return (
    <div>
      <Head>
        <title>Pizza Rack Pizzas</title>
        <meta
          name="description"
          content="PizzaRack makes and deliver the best pizzas. Get delicious pizza conveniently, anytime and anywhere"
        />
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <Featured />

      <PizzaList pizzaList={pizzaArr} />
    </div>
  );
}

export const getServerSideProps = async () => {
  await dbConnect();
  const data = await Product.find();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pizzaList: JSON.parse(JSON.stringify(data)),
    },
  };
};
