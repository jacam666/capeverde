import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar"
import Image from 'next/image'
import DonateButton from '../components/DonateButton';


export const metadata = {
    title: "Donate"
}

export default function Donate() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <ResponsiveNavbar />
            <div className=' bg-white text-black px-3 text-center'>
                <h1 className='text-center text-5xl py-3 text-black'>There are several ways to donate:</h1>
                <div className='border border-gray-400 shadow-md py-2  my-3'>
                    <h2>Make a monetary donation</h2>
                    <DonateButton />
                </div>
                <div className='border border-gray-400 shadow-md py-2 my-3'>
                    <h2>Donate to one family:</h2>
                    <p className=' text-black text-xl text-left px-4'> We can provide you with details of a family in need and your suitcase can
                        be filled with clothing and toiletries specifically for that family. We work alongside local, public
                        and private partners and families are assessed. We can apply for extra luggage allowance (for
                        UK travellers) so it need not affect your own allowance. The empty suitcases are used by the
                        families for storage.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-3 mx-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image family.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image family2.jpg" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-400 shadow-md py-2 my-3'>
                    <p className=' text-black text-xl text-left  px-4'>Bring donations or leave items behind at the end of your holiday. It can be difficult to get items
                        onto the islands and many locals cannot afford the high price tags for basic items like clothing,
                        toiletries and sanitary products. If you have a little space in your suitcase for some items, these
                        would be greatly appreciated.
                        </p>
                        <div className="grid grid-cols-2 gap-2 pt-3 mx-3 mb-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image donations3.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image donation4.jpg" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                        <p className='text-black text-xl text-left  px-4'> If you would like to bring a whole suitcase, we can apply for extra
                        luggage allowance (for UK travellers) so it need not affect your own allowance. Or alternatively,
                        leave some of your clothing behind at the end of your holiday. <br />Children’s clothing is always needed, so if your child will have outgrown their clothes or shoes by the next summer, these
                        could be left behind for a family. Please only donate items in good condition as the refuse
                        system is basic on the islands.
                    </p>
                </div>
                <div style={{ width: '100%' }}>
                    <Image className='w-full  py-3' src="/images/Whats App Image 2024-04-27 at 17.10_edited.jpg" alt='young child' width={500} height={500} />
                </div>
                <div className='border border-gray-400 shadow-md py-4 my-3'>
                    <h1 className='px-4'>Donations</h1>
                    <h2>Clothing</h2>
                    <p className='text-black  text-xl py-3 text-left px-4'>
                        All clothing is appreciated but please bear in mind that temperatures very rarely fall below 20
                        degrees. (Winter coats are not needed and take up valuable suitcase weight allowance).<br />
                        Shoes, sandals and trainers (sneakers).<br />
                        Bed sheets.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/clothing-donation(3).jpeg" alt="Image 1" className="max-w-full " />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/clothing-donations-2(3).jpeg" alt="Image 2" className="max-w-full " />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-400 shadow-md py-3 my-3'>
                    <h1 className='px-4'>School supplies</h1>
                    <p className='text-black  text-xl py-1 text-left px-4'>
                        Fill a suitcase with school supplies and stationery. Schools get little governmental support.
                        Families are asked to provide their own school bag with stationery. You can bring a case with
                        school supplies that will be passed on to schools on different Cape Verdean islands. Or bring a
                        school bag filled with stationery for a child.
                    </p>
                    <h2 className='text-center'>Donation Ideas</h2>
                    <li>School bags/rucksacks</li>
                    <li>Pens</li>
                    <li>Pencils</li>
                    <li>Sharpeners</li>
                    <li>Erasers</li>
                    <li>Calculators</li>
                    <li>Rulers</li>
                    <li>Glue sticks</li>
                    <li>Sticky tape</li>
                    <li>Work/text books or A4/A5 paper</li>
                    <li>Colouring books</li>
                    <li>Crayons</li>
                    <li>Paints and brushes</li>
                    <div className="grid grid-cols-2 gap-2 mx-3 mt-2">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/school2.jpg" alt="Image 1" className="max-w-full " />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/download_schooledited.jpg" alt="Image 2" className="max-w-full " />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <Image className='w-full  py-3' src="/images/WhatsApp Image 2024-04-27 at 17.10.27_34eda20e.jpg" alt='young child' width={500} height={500} />
                </div> */}
                <div className='border border-gray-400 shadow-md py-4 my-3' style={{ margin: 'auto' }}>
                    <h1 className='px-4'>Health and medical aids</h1>
                    <p className='text-black  text-xl py-3 text-left px-4'>
                        Health care and medicines are inadequate and expensive on the islands. Although we do not
                        give medicines, we can help with promoting a healthy lifestyle and can provide some medical
                        aids.
                        Many children do not brush their teeth regularly. Tourists feel sorry for the children and give
                        them sweets, unaware that they do not brush their teeth. On our activity events, we always try
                        and ensure that each child gets a toothbrush and toothpaste at the end of the event.<br />
                    </p>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/cape verde health.jpeg" alt="Image 1" className="max-w-full " />
                        </div>
                    </div>
                    <p className='text-black  text-xl py-2 text-left px-4'>At My Cape Verde, we try to encourage donors to be as eco-friendly as possible Reusable
                        incontinence pads, reusable sanitary pads, period pants, or period cups and reusable nappies
                        are not only better for the environment, but also save the families money longer term.<br />
                    </p>

                    <div>
                        <p className='text-black  text-xl py-2 text-left px-4'>Medical aids are expensive in Cape Verde. Wheelchairs and walking frames are in short supply if
                            you are able to donate one that is no longer needed. Unwanted spectacles/reading glasses can
                            be donated to health centres.
                            The shanty towns can be very dusty and dirty. Travel cots are beneficial for keeping babies and
                            toddlers in a cleaner environment
                        </p>
                    </div>

                    <h2>Donation Ideas</h2>
                    <li>Toothbrushes and toothpastes</li>
                    <li>Soaps</li>
                    <li>Barrier creams</li>
                    <li>Reusable nappies</li>
                    <li>Travel cots</li>
                    <li>Reusable sanitary pads. Period pads and period cups</li>
                    <li>Spectacles/reading glasses</li>
                    <li>Wheelchairs</li>
                    <li>Crutches/walking sticks</li>
                    <li>Zimmer frames</li>
                    <li>Hearing aids</li>
                </div>
                <div className='border border-gray-400 shadow-md py-4 my-3' style={{ margin: 'auto' }}>
                    <h1 className='px-4'>Sports clubs and community centers</h1>
                    <p className='text-black  text-xl py-3 text-left px-4'>
                        Support a sports club/team or community centre. Many children play sports, but families
                        cannot usually afford the correct footwear. The majority of houses are small and children are
                        send outside to play. Footballs, basketballs, skipping ropes etc can help keep children
                        physically and mentally fit. Drugs and alcohol abuse can be avoided with mental stimulation.
                        Community centres and music groups can help those less sporty.
                    </p>
                    <div className="grid grid-cols-2 gap-2 mx-3 mb-2">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image sports.jpg" alt="Image 1" className="max-w-full " />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image sports2.jpg" alt="Image 2" className="max-w-full " />
                            </div>
                        </div>
                    </div>
                    <h2>Donation Ideas</h2>
                    <li>Football kits</li>
                    <li>Football boots</li>
                    <li>Basketball/netball vests and shorts</li>
                    <li>Sneakers/trainers</li>
                    <li>Polo shirts</li>
                    <li>Shorts</li>
                    <li>Footballs</li>
                    <li>Basketballs</li>
                    <li>Hand balls</li>
                    <li>Volleyballs</li>
                    <li>Swimming aids</li>
                    <li>Musical instruments</li>
                    <li>Skipping ropes</li>
                    <li>Board games</li>
                    <li>Jigsaws</li>
                </div>
            </div>
        </div>

    );
}