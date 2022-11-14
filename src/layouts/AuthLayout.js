import Head from "next/head";
import Icono from "@assets/img/original.png";

export default function AuthLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <link rel="icon" href={Icono} />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
