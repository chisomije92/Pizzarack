import axios from "axios";
import Head from "next/head";
import dbConnect from "../lib/mongo";
import Product from "../models/Product";
import Featured from "../components/featured";
// import { getPizzaData } from "./api/products";
import PizzaList from "../components/pizza-list";
// import { connectDatabase } from "../lib/helpers";
// import { getPizzaData } from "../lib/helpers";

export default function Home({ pizzaList }) {
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

export const getServerSideProps = async ({ req, res }) => {
  // const { req, res } = context;
  // console.log(req);
  // let products = await getPizzaData(res, Product);
  // console.log(products);
  // products = JSON.stringify(JSON.parse(products));
  // res.status(200).json(products);
  // console.log(products);
  // const res = await axios.get("http://localhost:3000/api/products");
  // console.log(res);

  // const response = await fetch("http://localhost:3000/api/products");
  // const data = await response.json();

  // const client = await connectDatabase();
  // const db = client.db().collection("products").find({});
  // const data = await db.toArray();
  await dbConnect();
  const data = await Product.find();
  // console.log(JSON.parse(JSON.stringify(data)));

  return {
    props: {
      pizzaList: JSON.parse(JSON.stringify(data)),
    },
  };
};
