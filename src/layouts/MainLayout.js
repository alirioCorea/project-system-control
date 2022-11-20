import Head from "next/head";

export default function MainLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
