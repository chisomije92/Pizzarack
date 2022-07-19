import MenuData from "../../components/menu/menu-data";
import Product from "../../models/Product";
import dbConnect from "../../lib/mongo";
import Head from "next/head";
const Menu = ({ pizzaList }) => {
  return (
    <>
      <Head>
        <title>Menu Items</title>
        <meta
          name="description"
          content="Pizza Rack presents to you the wide choices of delicious pizza. Make a pick now and satisfy you unfulfilled desire."
        />
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <MenuData pizzaList={pizzaList} />
    </>
  );
};

export const getServerSideProps = async () => {
  await dbConnect();
  const data = await Product.find();
  if (!data || data.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pizzaList: JSON.parse(JSON.stringify(data)),
    },
  };
};

export default Menu;
