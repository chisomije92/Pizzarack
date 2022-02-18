import Product from "../models/Product";
import dbConnect from "./mongo";
import { MongoClient } from "mongodb";

// export const getPizzaData = async () => {
//   dbConnect();
//   let products = await Product.find();
//   res.status(200).json(products);
//   res.end();
//   // if (!products) {
//   //   throw new Error("Products not found!");
//   // }
//   //   return JSON.parse(products);
//   return products;
// };

export async function connectDatabase() {
  const client = await MongoClient.connect(`${process.env.MONGO_URL}`);

  return client;
}

export const sendPizzaData = async (req, res) => {
  dbConnect();
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
    res.end();
  } catch (err) {
    res.status(500).json(err);
    res.end();
  }
};
