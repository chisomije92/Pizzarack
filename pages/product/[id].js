import ProductItem from "../../components/product/product-item";
import dbConnect from "../../lib/mongo";
import Product from "../../models/Product";
import Head from "next/head";

const ProductPage = ({ pizza }) => {
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
      <ProductItem pizza={pizza} />
    </>
  );
};

export default ProductPage;

export const getServerSideProps = async ({ params }) => {
  const id = params.id;

  await dbConnect();
  const data = await Product.findById(id);

  return {
    props: {
      pizza: JSON.parse(JSON.stringify(data)),
    },
  };
};
