import OrderItem from "../../components/orders/order-item";
import Order from "../../models/Order";
import dbConnect from "../../lib/mongo";
import mongoose from "mongoose";
import Head from "next/head";
const OrderPage = ({ order }) => {
  return (
    <>
      <Head>
        <title>PizzRack Pizza Restaurant</title>
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
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
  await dbConnect();
  const data = await Order.findById(id);
  if (!data) {
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
