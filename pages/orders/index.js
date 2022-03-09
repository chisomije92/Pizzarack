import OrderData from "../../components/orders/order-data";
import Head from "next/head";
const Orders = () => {
  return (
    <>
      <Head>
        <title>Find out Order Status </title>
        <meta
          name="description"
          content="Want to know if the delicious pizza you ordered is ready? Find out the status of your orders."
        />
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <OrderData />
    </>
  );
};

export default Orders;
