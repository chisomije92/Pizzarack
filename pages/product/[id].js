import ProductItem from "../../components/product/product-item";
import Product from "../../models/Product";
import Head from "next/head";
import mongoose from "mongoose";
import dbConnect from "../../lib/mongo";

const ProductPage = ({ pizza }) => {
  return (
    <>
      <Head>
        <title> {pizza.title} </title>
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
  if (!data || data.length === 0 || !mongoose.Types.ObjectId.isValid(id)) {
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

// export const getStaticProps = async ({ params }) => {
//   const id = params.id;
//   await dbConnect();
//   const data = await Product.findById(id);
//   if (!data || data.length === 0 || !mongoose.Types.ObjectId.isValid(id)) {
//     return {
//       notFound: true,
//     };
//   }
//   return {
//     props: {
//       pizza: JSON.parse(JSON.stringify(data)),
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   await dbConnect();
//   const data = await Product.find();
//   const paths = data.map((item) => ({
//     params: { id: item.id },
//   }));
//   return {
//     paths,
//     fallback: false,
//   };
// };
