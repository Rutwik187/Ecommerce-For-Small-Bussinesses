import React, { useEffect, useState } from "react";
import Head from "next/head";

import Footer from "./Footer";

import { client } from "../lib/client";
import Header from "./Header";

import { Provider } from "react-redux";
import store from "../store/store";
import Cart from "../pages/cart";

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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <header>
          <Header infoData={infoData} />
        </header>

        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </Provider>
    </div>
  );
};

export const getServerSideProps = async () => {
  const infoQuery = '*[_type =="info"]';
  const infoData = await client.fetch(infoQuery);

  return {
    props: { infoData },
  };
};

export default Layout;
