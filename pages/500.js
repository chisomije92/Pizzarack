import Error500 from "../components/errors/error500";
import Head from "next/head";
export default function Custom404() {
  return (
    <>
      <Head>
        <title>PizzRack Pizza Restaurant</title>
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <Error500 />
    </>
  );
}
