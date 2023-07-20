import React from 'react';
import { ToastContainer } from "react-toastify";

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
