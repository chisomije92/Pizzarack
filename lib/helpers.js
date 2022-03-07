import mongoose from "mongoose";
import dbConnect from "./mongo";

const getPizzaItemsById = async (id, items) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
  await dbConnect();
  const data = await items.findById(id);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return data;
};
export default getPizzaItemsById;
