import AdminData from "../../components/admin/admin-data";
import dbConnect from "../../lib/mongo";
import Product from "../../models/Product";
import Order from "../../models/Order";

const AdminPage = ({ orders, products }) => {
  return <AdminData orders={orders} products={products} />;
};

export const getServerSideProps = async () => {
  await dbConnect();
  const productsData = await Product.find();
  const ordersData = await Order.find();
  return {
    props: {
      products: JSON.parse(JSON.stringify(productsData)),
      orders: JSON.parse(JSON.stringify(ordersData)),
    },
  };
};

export default AdminPage;
