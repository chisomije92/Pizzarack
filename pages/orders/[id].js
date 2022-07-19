import OrderItem from "../../components/orders/order-item";
import Order from "../../models/Order";
import mongoose from "mongoose";
import dbConnect from "../../lib/mongo";
import Head from "next/head";

const OrderPage = ({ order }) => {
  return (
    <>
      <Head>
        <title>Order Status</title>
        <meta
          name="description"
          content="PizzaRack makes and deliver the best pizzas. Get delicious pizza conveniently, anytime and anywhere"
        />
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <OrderItem order={order} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const id = params.id;

  await dbConnect();
  const data = await Order.findById(id);
  if (!data || data.length === 0 || !mongoose.Types.ObjectId.isValid(id)) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      order: JSON.parse(JSON.stringify(data)),
    },
  };
};
export default OrderPage;
