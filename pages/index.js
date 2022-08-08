import Head from "next/head";
import dbConnect from "../lib/mongo";
import Product from "../models/Product";
import Featured from "../components/featured";

import PizzaList from "../components/pizza-list";
import { useEffect, useMemo, useState } from "react";

export default function Home({ pizzaList }) {
  const [featuredPizza, setFeaturedPizza] = useState([]);
  const featuredPizzArr = useMemo(
    () => [pizzaList[0], pizzaList[1], pizzaList[2]],
    [pizzaList]
  );

  useEffect(() => {
    featuredPizzArr.forEach((item, index, arr) => {
      if (!item) {
        featuredPizza.splice(index, 1);
        setFeaturedPizza(arr);
      }
    });

    setFeaturedPizza(featuredPizzArr);
  }, [featuredPizza, pizzaList, featuredPizzArr]);

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

      <PizzaList pizzaList={featuredPizza} />
    </div>
  );
}

// export const getServerSideProps = async ({ res }) => {
//   res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
//   await dbConnect();
//   const data = await Product.find();
//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       pizzaList: JSON.parse(JSON.stringify(data)),
//     },
//   };
// };

export const getStaticProps = async () => {
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
    revalidate: 5000,
  };
};
