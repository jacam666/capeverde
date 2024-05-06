import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar"
import Image from 'next/image'
import DonateButton from '../components/DonateButton';


export const metadata = {
    title: "Who we are"
}

export default function WhoWeAre() {
    return (
        <div className='bg-gradient-to-br from-blue-500 via-white to-red-500' style={{ minHeight: '100vh' }}>
            <ResponsiveNavbar />
            <div className=' bg-gradient-to-r from-blue-500 via-white to-red-500'>
                <h1 className='text-center text-5xl py-3 text-black'>Who we are</h1>
                <div className=' border border-gray-400  shadow-md py-2 mx-3' style={{ margin: 'auto' }}>
                    <p className='px-3 pt-3 text-black text-xl text-center'>
                        The lack of tourism caused by the Covid pandemic, hit the Cape Verde islands hard. Locals
                        already stretched to the limit were left with little or no income and many with very little food.
                    </p>
                    <div className='grid grid-cols-2'>
                    <div className=" pt-2 m-1">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/clpthing-donations1.jpg" alt="Image 1" />
                            </div>
                        </div>
                    </div>
                    <div className='pt-2 m-1'>
                        <div className='flex justify-center'>
                            <div className='image-container'>
                                <img src='/images/whoweare2.jpg' />
                            </div>
                        </div>
                    </div>
                    </div>
                    <p className='px-3  text-black text-xl my-3 flex text-center items-center  sm:text-xs md:text-lg lg:text-xl xl:text-3xl '>
                        Our trustee Lisa started helping by shipping donated clothes to our Chairman Ivanilson to distribute. In February 2022, Lisa joined 3 other friends helping Cape Verdeans, and the charity Cape Verde in Need was formed
                        Over the course of 4 years, the charity helped thousands of locals,
                        providing food, clothing, toiletries and activities. When the charity ended in May 2024, Lisa and
                        Ivanilson decided to continue to aid people.So many Cape
                        Verdeans are still living in extreme poverty and deprivation and My Cape Verde is continuing to
                        improve people’s lives.
                    </p>
                </div>
                <div style={{ width: '100%' }}>
                    <Image className='w-full px-3 py-3' src="/images/WhatsApp Image shanty.jpg" alt='young child' width={500} height={500} />
                </div>
                <h1 className='text-center text-black text-5xl'>Our mission:</h1>
                <div className='text-left text-black px-4 text-xl border border-gray-400  shadow-md py-2 mx-3'>
                    <li >To provide the locals in need with food parcels.  </li>
                    <li >To provide clothing – the majority are provided by donations. </li>
                    <li >To provide toiletries – many adults and children do not own a toothbrush. </li>
                    <li >To provide medical aids – wheelchairs, frames etc are scarce on the islands.</li>
                    <li >To host activity days – working with local clubs, we promote various sports for the children/young adults. </li>
                    <li >To help with health and mentality. </li>
                    <li >To help schools – providing school supplies and stationery.</li>
                    <li >To make Christmas special for as many children as possible with a Christmas gift bag.</li>
                    <li >To be environmentally aware – we encourage reusable donations.</li>
                    <li >To help individuals start or improve their own business/enterprise by providing them with the equipment they need.</li>

                </div>
                <div>
                    <Image className='w-full px-3 py-3' src="/images/Whats App Image 2024-04-27 at 17.10_edited.jpg" alt='young child' width={500} height={500} />
                </div>
                <DonateButton />
            </div>
        </div>

    );
}