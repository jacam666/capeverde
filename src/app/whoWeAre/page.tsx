// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import ResponsiveNavbar from "../components/ResponsiveNavbar"
// import Image from 'next/image'
// import DonateButton from '../components/DonateButton';
// import SmallerFooter from '../components/SmallerFooter';


// export const metadata = {
//     title: "Who we are"
// }

// export default function WhoWeAre() {
//     return (
//         <div className=''>
//             <ResponsiveNavbar />
//             <div className=''>
//                 <h1 className='homepage-header text-center text-6xl py-3 text-black'>Who we are</h1>
//                 <div className=' border border-gray-400  shadow-md py-2 mx-3' style={{ margin: 'auto' }}>
//                     <p className='px-3 pt-3 text-black text-xl text-center'>
//                         The lack of tourism caused by the Covid pandemic, hit the Cape Verde islands hard. Locals
//                         already stretched to the limit were left with little or no income and many with very little food.
//                     </p>
//                     <div className='grid grid-cols-2'>
//                     <div className=" pt-2 m-1">
//                         <div className="flex justify-center">
//                             <div className="image-container">
//                                 <img src="/images/clpthing-donations1.jpg" alt="Image 1" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className='pt-2 m-1'>
//                         <div className='flex justify-center'>
//                             <div className='image-container'>
//                                 <img src='/images/whoweare2.jpg' />
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                     <p className='px-3  text-black text-xl my-3 flex text-center items-center  sm:text-xs md:text-lg lg:text-xl xl:text-3xl '>
//                         Our trustee Lisa started helping by shipping donated clothes to our Chairman Ivanilson to distribute. In February 2022, Lisa joined 3 other friends helping Cape Verdeans, and the charity Cape Verde in Need was formed
//                         Over the course of 4 years, the charity helped thousands of locals,
//                         providing food, clothing, toiletries and activities. When the charity ended in May 2024, Lisa and
//                         Ivanilson decided to continue to aid people.So many Cape
//                         Verdeans are still living in extreme poverty and deprivation and My Cape Verde is continuing to
//                         improve people’s lives.
//                     </p>
//                 </div>
//                 <div style={{ width: '100%' }}>
//                     <Image className='w-full px-3 py-3' src="/images/WhatsApp Image whoweare.jpg" alt='young child' width={500} height={500} />
//                 </div>
//                 <h1 className='text-center text-black text-5xl'>Our mission:</h1>
//                 <div className='text-left text-black px-4 text-xl border border-gray-400  shadow-md py-2 mx-3'>
//                     <li >To provide the locals in need with food parcels.  </li>
//                     <li >To provide clothing – the majority are provided by donations. </li>
//                     <li >To provide toiletries – many adults and children do not own a toothbrush. </li>
//                     <li >To provide medical aids – wheelchairs, frames etc are scarce on the islands.</li>
//                     <li >To host activity days – working with local clubs, we promote various sports for the children/young adults. </li>
//                     <li >To help with health and mentality. </li>
//                     <li >To help schools – providing school supplies and stationery.</li>
//                     <li >To make Christmas special for as many children as possible with a Christmas gift bag.</li>
//                     <li >To be environmentally aware – we encourage reusable donations.</li>
//                     <li >To help individuals start or improve their own business/enterprise by providing them with the equipment they need.</li>
//                 </div>
//                 <div>
//                     <Image className='w-full px-3 py-3' src="/images/WhatsApp Image group.jpg" alt='young child' width={500} height={500} />
//                 </div>
//                 <DonateButton />
//             </div>
//             <SmallerFooter/>
//         </div>

//     );
// }
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Image from 'next/image';
//import DonateButton from '../components/DonateButton';
import SmallerFooter from '../components/SmallerFooter';
import HomePageButton from '../components/HomePageButton';

export const metadata = {
    title: "Who We Are"
}

export default function WhoWeAre() {
    return (
        <div className='min-h-screen flex flex-col'>
            <ResponsiveNavbar />
            <main className='flex-grow'>
                <div className='container text-center mx-auto px-4 py-6'>
                    <h1 className='homepage-header text-6xl sm:text-7xl text-gray-900 mt-8 mb-6'>Who We Are</h1>
                    <div className=' '>
                        <p className='text-xl px-2 text-gray-800 text-center lg:w-5/6 mx-auto mb-6'>
                            The lack of tourism caused by the Covid pandemic hit the Cape Verde islands hard. Locals, already stretched to the limit, were left with little or no income and many with very little food.
                        </p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                            <div className="flex justify-center">
                                <div className="relative w-full h-64 md:h-80">
                                    <Image 
                                    src="/images/clpthing-donations1.jpg" 
                                    alt="Clothing Donations" layout="fill" 
                                    objectFit="contain" 
                                    className="" />
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className="relative w-full h-64 md:h-80">
                                    <Image 
                                    src='/images/whoweare2.jpg' 
                                    alt="Who We Are" layout="fill" 
                                    objectFit="contain" 
                                    className="" />
                                </div>
                            </div>
                        </div>
                        <p className='text-xl px-2 text-gray-800 text-center lg:w-5/6 mx-auto mb-6'>
                            Our trustee Lisa started helping by shipping donated clothes to our Chairman Ivanilson to distribute. In February 2022, Lisa joined 3 other friends helping Cape Verdeans, and the charity Cape Verde in Need was formed. Over the course of 4 years, the charity helped thousands of locals, providing food, clothing, toiletries, and activities. When the charity ended in May 2024, Lisa and Ivanilson decided to continue to aid people. So many Cape Verdeans are still living in extreme poverty and deprivation, and My Cape Verde is continuing to improve people’s lives.
                        </p>
                    </div>
                    <div className='my-6 mb-6'>
                        <div className="relative w-full h-80">
                            <Image 
                            className='w-full rounded-lg' 
                            src="/images/WhatsApp Image whoweare.jpg" 
                            alt='Young Child' layout="fill" 
                            objectFit="contain" />
                        </div>
                    </div>
                    <div className=" h-1 sm:h-1 w-1/2 lg:w-3/5 md:w-2/5 bg-black mx-auto"></div>

                    <h2 className='homepage-header text-6xl sm:text-7xl text-gray-900 mt-14 mb-6'>Our Mission:</h2>
                    <div className='text-black text-lg sm:text-xl lg:text-2xl mb-6  '>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>To provide the locals in need with food parcels.</li>
                            <li>To provide clothing – the majority are provided by donations.</li>
                            <li>To provide toiletries – many adults and children do not own a toothbrush.</li>
                            <li>To provide medical aids – wheelchairs, frames etc. are scarce on the islands.</li>
                            <li>To host activity days – working with local clubs, we promote various sports for the children/young adults.</li>
                            <li>To help with health and mentality.</li>
                            <li>To help schools – providing school supplies and stationery.</li>
                            <li>To make Christmas special for as many children as possible with a Christmas gift bag.</li>
                            <li>To be environmentally aware – we encourage reusable donations.</li>
                            <li>To help individuals start or improve their own business/enterprise by providing them with the equipment they need.</li>
                        </ul>
                    </div>
                    <div className=' mb-6 mt-6'>
                        <div className="relative w-full h-80">
                            <Image 
                            className='w-full rounded-lg' 
                            src="/images/WhatsApp Image group.jpg" 
                            alt='Group Image' layout="fill" 
                            objectFit="contain" />
                        </div>
                    </div>
                        <HomePageButton />
                </div>
            </main>
            <SmallerFooter />
        </div>
    );
}
