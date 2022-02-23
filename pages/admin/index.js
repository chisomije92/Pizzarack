import AdminData from "../../components/admin/admin-data";
import dbConnect from "../../lib/mongo";
import Product from "../../models/Product";
// import Order from "../../models/orders";

const AdminPage = () => {
  return <AdminData />;
};

export const getServerSideProps = async () => {
  await dbConnect();
  const products = await Product.find();
  //   const orders = await Order.find();
  return {
    props: {
      productsData: JSON.parse(JSON.stringify(products)),
    },
  };
};

export default AdminPage;
