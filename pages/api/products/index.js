// import { sendPizzaData } from "../../../lib/helpers";
// import dbConnect from "../../../lib/mongo";
import dbConnect from "../../../lib/mongo";
import Product from "../../../models/Product";

export const getPizzaData = async (res, data) => {
  await dbConnect();
  let products;
  try {
    products = await data.find();
    res.status(200).json(products);
    // res.end();
  } catch (err) {
    res.status(500).json(err);
  }

  return products;
};

const handler = async (req, res) => {
  const { method, cookies } = req;
  const token = cookies.token;
  await dbConnect();
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
      // console.log(products);
      // res.end();
    } catch (err) {
      res.status(500).json(err);
      // res.end();
    }
  }

  if (method === "POST") {
    if (!token || token !== process.env.token) {
      return res.status(401).json("Not authenticated!");
    }
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
      res.end();
    } catch (err) {
      res.status(500).json(err);
    }
  }
  res.end();
};

export default handler;
