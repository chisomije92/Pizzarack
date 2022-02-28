import Product from "../models/Product";
import dbConnect from "./mongo";
import { MongoClient } from "mongodb";

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
