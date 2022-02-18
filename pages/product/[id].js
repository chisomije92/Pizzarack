import ProductItem from "../../components/product/product-item";
import dbConnect from "../../lib/mongo";
import Product from "../../models/Product";

const ProductPage = ({ pizza }) => {
  return <ProductItem pizza={pizza} />;
};

export default ProductPage;

export const getServerSideProps = async ({ params }) => {
  const id = params.id;
  // console.log(id);
  await dbConnect();
  const data = await Product.findById(id);
  console.log(JSON.parse(JSON.stringify(data)));

  return {
    props: {
      pizza: JSON.parse(JSON.stringify(data)),
    },
  };
};
