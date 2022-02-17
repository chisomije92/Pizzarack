import dbConnect from "../../../lib/mongo";
import Product from "../../../models/Product";

const handler = async (req, res) => {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
      res.end();
    } catch (err) {
      res.status(500).json(err);
      res.end();
    }
  }

  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
      res.end();
    } catch (err) {
      res.status(500).json(err);
      res.end();
    }
  }
  res.end();
};

export default handler;
