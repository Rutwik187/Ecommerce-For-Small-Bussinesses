import React from 'react';
import { ToastContainer } from "react-toastify";

import { Layout } from '../components';
import '../styles/globals.css';



function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <ToastContainer />
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
