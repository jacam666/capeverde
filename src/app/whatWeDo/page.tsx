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
            {/* <div className=' bg-gradient-to-r from-blue-100 to-slate-600'> */}
            <div className=' bg-white'>
                <h1 className='text-center text-5xl py-3 text-black'>What we do</h1>
                <div className='border border-gray-400  shadow-md py-2 mx-3'>
                    <p className='px-4 text-black text-xl '>
                        My Cape Verde aims to help as many families as possible living in poverty.<br />
                        We provide food parcels, funded by monetary donations and fund raising.<br /> We provide clothing ,
                        shoes and toiletries to families donated by tourists and our friends and families.<br />
                        We provide medical aids to people who cannot afford them and who are not assisted by the
                        health service of Cape Verde. <br />We provide wheelchairs and walking aids to locals with physical
                        disabilities.<br />
                        We provide schools and children with stationery and school supplies.
                    </p>
                </div>
                <div style={{ width: '100%' }}>
                    <Image className='w-full px-3 py-3' src="/images/OIP (1).jpeg" alt='young child' width={500} height={500} />
                </div>
                <div className='border border-gray-400  shadow-sm py-2 mx-3'>
                    <p className='text-black px-4 text-xl py-3'>
                        We provide a Christmas gift bag to as many children as possible at Christmas. Most of these
                        children would not be getting a gift otherwise.<br /> The bags contain a toy, toothpaste, toothbrush
                        and an item of clothing.<br />
                        We hold activity events including various sports, games and discos.<br />
                        We work with other associations and groups on the islands to improve the lives of Cape
                        Verdeans.
                    </p>
                </div>
                <div>

                    <Image className='w-full px-3 py-3' src="/images/south-africa-fivepointsix-shutterstock.jpg" alt='young child' width={500} height={500} />
                </div>
                <DonateButton />
            </div>
        </div>

    );
}