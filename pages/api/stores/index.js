import dbConnect from "../../../lib/mongo";
import Email from "../../../models/Email";

const handler = async (req, res) => {
  const { method, body } = req;
  await dbConnect();
  if (method === "POST") {
    try {
      const email = await Email.create(body);

      res.status(201).json(email);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
