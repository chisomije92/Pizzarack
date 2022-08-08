import dbConnect from "../../../lib/mongo";
import Order from "../../../models/Order";

const handler = async (req, res) => {
  const { method } = req;
  const { email } = req.body;

  dbConnect();

  if (method === "POST") {
    const order = await Order.find({ email: email }).catch((err) =>
      console.log(err)
    );

    res.status(201).json(order);
  }
};

export default handler;
