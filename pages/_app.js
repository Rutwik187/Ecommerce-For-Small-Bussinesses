import React from 'react';
import { ToastContainer } from "react-toastify";


import { Layout } from '../components';
import '../styles/globals.css';




const MyApp = ({ Component, pageProps, coupons }) => {


  return (

    <Layout >

      <ToastContainer />
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp

