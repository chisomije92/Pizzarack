import AdminData from "../../components/admin/admin-data";
import dbConnect from "../../lib/mongo";
import Product from "../../models/Product";
import Order from "../../models/Order";

const AdminPage = ({ orders, products }) => {
  return <AdminData orders={orders} products={products} />;
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
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
