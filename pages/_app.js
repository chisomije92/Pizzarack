import Layout from "../components/layout/layout";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }) {
  if (typeof document === "undefined") {
    React.useLayoutEffect = React.useEffect;
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
