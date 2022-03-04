import StoresData from "../../components/stores/stores-data";
import Head from "next/head";
const Stores = () => {
  return (
    <>
      <Head>
        <title>PizzRack Pizza Restaurant</title>
        <meta
          name="description"
          content="Pizza Rack presents to you the wide choices of delicious pizza. Make a pick now and satisfy you unfulfilled desire."
        />
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <StoresData />
    </>
  );
};

export default Stores;
