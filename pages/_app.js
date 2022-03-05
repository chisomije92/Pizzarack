import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../store/cartSlice";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>PizzRack Pizza Restaurant</title>
        <meta
          name="viewport"
          contents="initial-scale=1.0, width=device-width"
        />
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
