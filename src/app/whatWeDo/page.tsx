import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar"
import Image from 'next/image'
import DonateButton from '../components/DonateButton';


export const metadata = {
    title: "What we do"
}

export default function WhatWeDo() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <ResponsiveNavbar />
            <div className=' bg-white'>
                <h1 className='text-center text-5xl py-3 text-black'>What we do</h1>
                <div className='border border-gray-400  shadow-md py-3 mx-3 mb-3'>
                    <div className='px-3  text-black text-xl  '>
                        My Cape Verde aims to help as many families as possible living in poverty.<br />
                        We provide food parcels, funded by monetary donations and fund raising.<br /> We provide clothing ,
                        shoes and toiletries to families donated by tourists and our friends and families.<br />
                        <div className="grid grid-cols-2 gap-2 ">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image 2024-05-02 at 08.47_edited2.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image clothes donation1.jpg" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className='border border-gray-400  shadow-md py-2 mx-3 mb-3'>
                    <div className='px-3 pt-4 text-black text-xl'>
                        We provide medical aids to people who cannot afford them and who are not assisted by the
                        health service of Cape Verde. <br />We provide wheelchairs and walking aids to locals with physical
                        disabilities.<br />
                        <div className="grid grid-cols-2 gap-2 pt-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image wheelchair1.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image wheelchair2.jpg" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className='border border-gray-400  shadow-md py-2 mx-3 mb-3'>
                    <div className='px-2 pt-4 text-black text-xl'>
                        We provide schools and children with stationery and school supplies.
                        <div className="grid grid-cols-2 gap-2 pt-3 ">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image school1.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image school2.jpg" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className='border border-gray-400  shadow-md py-2 mx-3 mb-3'>
                    <div className='text-black px-3 text-xl pt-3'>
                        We provide a Christmas gift bag to as many children as possible at Christmas. Most of these
                        children would not be getting a gift otherwise.<br /> The bags contain a toy, toothpaste, toothbrush
                        and an item of clothing.<br />
                        <div className="grid grid-cols-2 gap-2 pt-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image toys.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image toys2.jpg" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className='border border-gray-400  shadow-md py-2 mx-3 mb-3'>
                    <div className='text-black px-3 text-xl pt-3'>
                        We hold activity events including various sports, games and discos.<br />
                        We work with other associations and groups on the islands to improve the lives of Cape
                        Verdeans.
                        <div className="grid grid-cols-2 gap-2 pt-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image event2.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image event3.jpg" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            <DonateButton />
        </div>
    );
}