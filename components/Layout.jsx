import React, { useEffect, useState } from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

import { client } from "../lib/client";

const Layout = ({ children }) => {
  const [infoData, setInfoData] = useState();

  useEffect(() => {
    const infoQuery = '*[_type =="info"]';

    client.fetch(infoQuery).then((data) => {
      setInfoData(data);
    });
  }, []);
  return (
    <div className="layout">
      <Head>
        <title>Priyam Store</title>
      </Head>
      <header>
        <Navbar infoData={infoData} />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const infoQuery = '*[_type =="info"]';
  const infoData = await client.fetch(infoQuery);
  console.log(infoData);

  return {
    props: { infoData },
  };
};

export default Layout;
