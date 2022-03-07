import OrderItem from "../../components/orders/order-item";
import Order from "../../models/Order";
import Head from "next/head";
import getPizzaItemsById from "../../lib/helpers";
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
  const data = await getPizzaItemsById(id, Order);
  return {
    props: {
      order: JSON.parse(JSON.stringify(data)),
    },
  };
};
export default OrderPage;
