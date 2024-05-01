import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar"
import Image from 'next/image'
import DonateButton from '../components/DonateButton';


export const metadata = {
    title: "Who we are"
}

export default function WhoWeAre() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <ResponsiveNavbar />
            <div className=' bg-white'>
                <h1 className='text-center text-5xl py-3 text-black'>Who we are</h1>
                <div className='border border-gray-400  shadow-md py-2 mx-3' style={{ margin: 'auto' }}>
                    <p className='px-4 text-black text-xl'>
                        The lack of tourism caused by the Covid pandemic, hit the Cape Verde islands hard. Locals
                        already stretched to the limit were left with little or no income and many with very little food.
                        Our trustee Lisa and two friends started helping the locals and in February 2022 formed the
                        charity Cape Verde in Need. < br />
                        Over the course of 4 years, the charity helped thousands of locals,
                        providing food, clothing, toiletries and activities. When the charity ended in May 2024, Lisa and
                        Ivanilson (one of their main volunteers) decided to continue to aid people.<br /> So many Cape
                        Verdeans are still living in extreme poverty and deprivation and My Cape Verde is continuing to
                        improve people’s lives.
                    </p>
                </div>
                <div style={{ width: '100%' }}>
                    <Image className='w-full px-3 py-3' src="/images/WhatsApp Image 2024-04-27 at 17.10.27_34eda20e.jpg" alt='young child' width={500} height={500} />
                </div>
                <h1 className='text-center text-black text-5xl'>Our mission:</h1>
                <div className='text-left text-black px-4 text-xl border border-gray-400  shadow-md py-2 mx-3'>
                    <li>To provide the locals in need with food parcels  </li>
                    <li>To provide clothing – the majority are provided by donations </li>
                    <li>To provide toiletries – many adults and children do not own a toothbrush </li>
                    <li>To provide medical aids – wheelchairs, frames etc are scarce on the islands
                    </li>
                    <li>activity days – working with local clubs, we promote various sports for the children/young adults
                        To help with health and mentality. </li>
                    <li>To help schools – providing school supplies and stationery
                    </li>
                    <li>To make Christmas special for as many children as possible with a Christmas gift bag
                    </li>
                    <li>To be environmentally aware – we encourage reusable donations
                    </li>
                </div>
                <div>
                    <Image className='w-full px-3 py-3' src="/images/WhatsApp Image 2024-04-27 at 17.10.27_34eda20e.jpg" alt='young child' width={500} height={500} />
                </div>
                <DonateButton />
            </div>
        </div>

    );
}