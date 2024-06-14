import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar"
//import DonateButton from '../components/DonateButton';
import SmallerFooter from '../components/SmallerFooter';
import HomePageButton from '../components/HomePageButton';
//import Image from 'next/image';


export const metadata = {
    title: "What we do"
}

export default function WhatWeDo() {
    return (
        <div className='' >
            <ResponsiveNavbar />
            <div className=' '>
                <h1 className='homepage-header text-center text-7xl py-6 mt-5 text-black'>What we do</h1>
                <div className='  py-3 mx-3 mb-3'>
                    <div className='px-3 my-6 text-black text-center'>
                        <p className=' text-xl md:text-3xl mb-4 mx-auto md:p-5 '>
                            My Cape Verde aims to help as many families as possible living in poverty.
                            We provide food parcels, funded by monetary donations and fundraising. We provide clothing ,
                            shoes and toiletries to families donated by tourists and our friends and families.
                        </p>
                        <div className="grid grid-cols-2 gap-2 ">
                            <div className="flex justify-center ">
                                <div className="image-container">
                                    <img src="/images/WhatsApp Image 2024-05-02 at 08.47_edited2.jpg" alt="Image 1" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/WhatsApp Image clothes donation1.jpg" alt="Image 2" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" h-1 sm:h-1 w-1/2 md:w-2/5 bg-black mx-auto my-4 "></div>

                <div className='  py-2 mx-3 mb-3'>
                    <div className='px-3 pt-2 my-6 text-black text-xl text-center'>
                        <p className=' text-xl md:text-3xl mx-auto md:p-5'>
                            We provide medical aids to people who cannot afford them and who are not assisted by the
                            health service of Cape Verde.We provide wheelchairs and walking aids to locals with physical
                            disabilities.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-3">
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/WhatsApp Image wheelchair1.jpg" alt="Image 1" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/WhatsApp Image wheelchair2.jpg" alt="Image 2" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 bg-black mx-auto my-4"></div>

                <div className='  py-2 mx-3 mb-3'>
                    <div className='px-3 my-6 pt-2 text-black text-xl text-center'>
                        <p className=' text-xl md:text-3xl mx-auto md:p-5'>We provide schools and children with stationery and school supplies.</p>
                        <div className="grid grid-cols-2 gap-2 pt-3 ">
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/WhatsApp Image school1.jpg" alt="Image 1" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/WhatsApp Image school2.jpg" alt="Image 2" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" h-1 sm:h-1 w-1/2 md:w-2/5 bg-black mx-auto my-4"></div>

                <div className='  py-2 mx-3 mb-3'>
                    <div className='text-black px-3 text-xl pt-2 text-center'>
                        <p className=' text-xl md:text-3xl mx-auto md:p-5'>
                            We provide a Christmas gift bag to as many children as possible at Christmas. Most of these
                            children would not be getting a gift otherwise.The bags contain a toy, toothpaste, toothbrush
                            and an item of clothing.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-3">
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/WhatsApp Image toys.jpg" alt="Image 1" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/xmasgifts1.jpg" alt="Image 2" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                        </div>
                        <p className=' text-xl md:text-3xl mx-auto md:p-5 lg:px-12 mt-3'>
                            We help individuals start or improve their own business/enterprise by providing them with the equipment they need
                        </p>
                    </div>
                </div>

                <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 bg-black mx-auto my-4"></div>

                <div className='py-2 mx-3 mb-3'>
                    <div className='text-black px-3 text-xl pt-2 text-center'>
                        <p className=' text-xl md:text-3xl mx-auto md:p-5'>
                            We hold activity events including various sports, games and discos.
                            We work with other associations and groups on the islands to improve the lives of Cape
                            Verdeans.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-3 pb-3">
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/WhatsApp Image event2.jpg" alt="Image 1" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/WhatsApp Image event3.jpg" alt="Image 2" className='w-3/4 items-center m-auto rounded' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-8'>
                    <HomePageButton />
                </div>
            </div>
            <SmallerFooter />
        </div>
    );
}