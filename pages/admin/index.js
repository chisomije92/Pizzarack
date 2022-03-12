import AdminData from "../../components/admin/admin-data";
import dbConnect from "../../lib/mongo";
import Product from "../../models/Product";
import Order from "../../models/Order";
import Add from "../../components/add/add";
import AddButton from "../../components/add/add-button";
import { useState } from "react";

const AdminPage = ({ orders, products }) => {
  const [close, setClose] = useState(true);

  return (
    <>
      <AddButton setClose={setClose} />
      {!close && <Add setClose={setClose} />}
      <AdminData orders={orders} products={products} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.token) {
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
