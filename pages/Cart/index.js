import CartData from "../../components/cart/cart-data";
import Head from "next/head";
const Cart = () => {
  return (
    <>
      <Head>
        <title>Confirm Order!</title>
        <meta
          name="description"
          content="Pizza Rack presents to you the wide choices of delicious pizza. Make a pick now and satisfy you unfulfilled desire."
        />
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <CartData />;
    </>
  );
};

export default Cart;
