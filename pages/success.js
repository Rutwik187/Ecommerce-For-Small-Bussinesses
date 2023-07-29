import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { runFireworks } from '../lib/utils';
import Header from '../components/Header';
import { Footer } from '../components';

const Success = ({ productData, infoData
}) => {


  useEffect(() => {

    runFireworks();
  }, []);

  return (
    <>
      <Header product={productData} info={infoData} />
      <div className="success-wrapper mb-12">
        <div className="success">
          <p className="icon">
            <BsBagCheckFill />
          </p>
          <br />
          <h2>Thank you for your order!</h2>
          <p className="email-msg">Check your whats app for further Updates</p>
          <p className="description">
            If you have any questions, please email
            <a className="email" href="mailto:order@example.com">
              order@example.com
            </a>
          </p>
          <Link href="/">
            <button type="button" width="300px" className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <Footer info={infoData} />
    </>
  )
}
export const getServerSideProps = async () => {

  const productData = await client.fetch(`*[_type=="product"]`)
  const infoData = await client.fetch(`*[_type=="info"]`)

  return {
    props: { infoData, productData }
  }
}

export default Success