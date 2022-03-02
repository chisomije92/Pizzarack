import dbConnect from "../../../lib/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method } = req;
  const { email } = req.body;

  const db = await dbConnect();

  if (method === "POST") {
    const order = await Order.find({ email: email })
      .clone()
      .catch((err) => console.log(err));

    // console.log(order);
    res.status(201).json(order);
  }
};

export default handler;
