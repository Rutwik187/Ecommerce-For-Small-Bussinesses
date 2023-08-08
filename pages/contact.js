import React, { useRef } from 'react'
import { Footer } from '../components'
import { client } from '../lib/client'
import Header from '../components/Header'
import { info } from 'autoprefixer'


const contact = ({ infoData, productData, categories }) => {
    const name = useRef();
    const email = useRef();
    const message = useRef();

    const handleSendWhatsApp = () => {
        const mobileNumber = infoData[0].phoneNo;
        const WhatsAppMessage = encodeURIComponent(
            "👋 Hi. I just visited the your shop website and want to know more\n\n" +

            `\n🙎 Name: ${name.current.value}\n\n📧 Email: ${email.current.value}\n\n 📫 Message: ${message.current.value} \n`
        );
        const whatsappURL = `https://api.whatsapp.com/send?phone=${mobileNumber}&text=${WhatsAppMessage}`;

        window.open(
            whatsappURL,
            "_blank" // <- This is what makes it open in a new window.
        );

    };

    return (
        <div >
            <Header info={infoData} product={productData} categories={categories} />
            <div className=" container my-24 mx-auto md:px-6">

                <section className="mb-32 text-center">
                    <div className="py-12 md:px-12">
                        <div className="container mx-auto xl:px-32">
                            <div className="grid items-center lg:grid-cols-2">
                                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                                    <div
                                        className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] ">
                                        <h2 className="mb-12 text-3xl font-bold">Contact us</h2>
                                        <form>
                                            <div className="relative mb-6">
                                                <label className='text-start block'>Full Name</label>
                                                <input ref={name} type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:border-gray-500" />
                                            </div>
                                            <div className="relative mb-6" data-te-input-wrapper-init>
                                                <label className='text-start block'>Email address</label>
                                                <input ref={email} type="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 focus:border-gray-500" />
                                            </div>
                                            <div className="relative mb-6" data-te-input-wrapper-init>
                                                <label className='text-start block'>Message</label>
                                                <textarea ref={message} type="text" className="p-2 h-28 border mt-1 rounded px-4 w-full bg-gray-50 focus:border-gray-500" />
                                            </div>

                                            <button
                                                onClick={handleSendWhatsApp}
                                                type="button"
                                                data-te-ripple-init
                                                data-te-ripple-color="light"
                                                className="inline-block w-full bg-black rounded-full text-gray-100 p-4 text-xl hover:bg-gray-800">
                                                Send
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="md:mb-12 lg:mb-0">
                                    <div
                                        className="relative h-[700px] rounded-lg shadow-lg dark:shadow-black/20">
                                        <iframe
                                            src={infoData[0].embedMap}
                                            className="absolute left-0 top-0 h-full w-full rounded-lg"
                                            frameborder="0"
                                            allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            {/* Contact Info */}
            <div className="container px-6 md:px-12 mx-auto">
                <div
                    className="block rounded-lg bg-gray-200 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                    <div className=" grid gap-x-6 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="mx-auto text-center lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                            </svg>
                            <h6 className="font-medium">
                                <a
                                    target="_blank"
                                    href={`mailto:${infoData[0].email}`}
                                    aria-label="Our email"
                                    title="Our email"
                                    className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    {infoData[0].email}
                                </a>
                            </h6>
                        </div>
                        <div className="mx-auto text-center lg:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <h6 className="font-medium"><a
                                href={infoData[0].addressUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Our address"
                                title="Our address"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800 cursor-pointer"
                            >
                                {infoData[0].address}
                            </a></h6>
                        </div>
                        <div className="mx-auto mb-6 text-center md:mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" className="mx-auto mb-6 h-8 w-8 text-primary dark:text-primary-400">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <h6 className="font-medium"> <a
                                target="_blank"
                                href={`tel:${infoData[0].phoneNo}`}
                                aria-label="Our phone"
                                title="Our phone"
                                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                {infoData[0].phoneNo}
                            </a></h6>
                        </div>

                    </div>
                </div>
            </div>
            <Footer info={infoData} />
        </div>
    )
}
export const getServerSideProps = async () => {

    const productData = await client.fetch(`*[_type=="product"]`)
    const infoData = await client.fetch(`*[_type=="info"]`)

    const categoryQuery = '*[_type == "category"]';
    const categories = await client.fetch(categoryQuery);

    return {
        props: { infoData, productData, categories }
    }
}

export default contact