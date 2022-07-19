import AdminData from "../../components/admin/admin-data";
import dbConnect from "../../lib/mongo";
import Product from "../../models/Product";
import Order from "../../models/Order";
import Add from "../../components/add/add";
import AddButton from "../../components/add/add-button";
import { useEffect, useState } from "react";
import { getSession, signOut } from "next-auth/react";

const AdminPage = ({ orders, products }) => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    setTimeout(() => signOut(), 3600000);
  }, []);

  return (
    <>
      <AddButton setClose={setClose} />
      {!close && <Add setClose={setClose} />}
      <AdminData orders={orders} products={products} />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (!session) {
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

  if (!productsData || !ordersData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: JSON.parse(JSON.stringify(productsData)),
      orders: JSON.parse(JSON.stringify(ordersData)),
    },
  };
};

export default AdminPage;
