import Head from "next/head";
import Icono from "@assets/img/original.png";
import Header from "@components/Header";

export default function Admin({ children, title, description }) {
  return (
    <>
      <Head>
        <link rel="icon" href={Icono} />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <Header />
      <>{children}</>
    </>
  );
}
