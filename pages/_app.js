import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/cartSlice";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <title>PizzRack Pizza Pizzas</title>
          <link rel="icon" href="/pizza_snack_icon.svg" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
