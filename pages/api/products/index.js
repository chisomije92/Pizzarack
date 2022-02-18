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
  const { method } = req;
  dbConnect();
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
    //   try {
    //     await getPizzaData(res);
    //     // res.status(200).json(products);
    //     // res.end();
    //   } catch (err) {
    //     res.status(500).json(err);
    //   }
    // await getPizzaData(res, Product);
  }

  if (method === "POST") {
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
