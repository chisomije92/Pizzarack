import ProductItem from "../../components/orders/product/product-item";
import dbConnect from "../../lib/mongo";
import Product from "../../models/Product";

const ProductPage = ({ pizza }) => {
  return <ProductItem pizza={pizza} />;
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
