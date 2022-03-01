import OrderItem from "../../components/orders/order-item";
import Order from "../../models/Order";
import dbConnect from "../../lib/mongo";
const OrderPage = ({ order }) => {
  return (
    <>
      <OrderItem order={order} />
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const id = params.id;

  await dbConnect();
  const data = await Order.findById(id);

  return {
    props: {
      order: JSON.parse(JSON.stringify(data)),
    },
  };
};
export default OrderPage;
