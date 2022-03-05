import ProductItem from "../../components/product/product-item";
import dbConnect from "../../lib/mongo";
import mongoose from "mongoose";
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
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
  await dbConnect();
  const data = await Product.findById(id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pizza: JSON.parse(JSON.stringify(data)),
    },
  };
};
