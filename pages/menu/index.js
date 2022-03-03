import MenuData from "../../components/menu/menu-data";
import Product from "../../models/Product";
import dbConnect from "../../lib/mongo";

const Menu = ({ pizzaList }) => {
  return (
    <>
      <MenuData pizzaList={pizzaList} />
    </>
  );
};

export const getServerSideProps = async () => {
  await dbConnect();
  const data = await Product.find();

  return {
    props: {
      pizzaList: JSON.parse(JSON.stringify(data)),
    },
  };
};

export default Menu;
