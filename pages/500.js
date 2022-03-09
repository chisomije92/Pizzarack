import Error500 from "../components/errors/error500";
import Head from "next/head";
export default function Custom404() {
  return (
    <>
      <Head>
        <title>Pizza Rack Pizzas</title>
        <link rel="icon" href="/pizza_snack_icon.svg" />
      </Head>
      <Error500 />
    </>
  );
}
