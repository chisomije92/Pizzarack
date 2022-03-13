import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import store from "../store/cartSlice";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Head>
            <title>Pizza Rack Pizzas</title>
            <link rel="icon" href="/pizza_snack_icon.svg" />
          </Head>
          <Component {...pageProps} />
        </Layout>{" "}
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
