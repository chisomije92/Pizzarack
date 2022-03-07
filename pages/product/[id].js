import ProductItem from "../../components/product/product-item";
import Product from "../../models/Product";
import Head from "next/head";
import getPizzaItemsById from "../../lib/helpers";

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
  const data = await getPizzaItemsById(id, Product);

  return {
    props: {
      pizza: JSON.parse(JSON.stringify(data)),
    },
  };
};
