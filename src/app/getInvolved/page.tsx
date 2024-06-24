import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar"
import SmallerFooter from '../components/SmallerFooter';
import HomePageButton from '../components/HomePageButton';

export const metadata = {
    title: "Get Involved"
}

export default function GetInvolved() {

    return (
        <div className=''>
            <ResponsiveNavbar />
            <div className=' text-center'>
                <h1 className='homepage-header text-6xl sm:text-7xl text-gray-900 mt-16 mb-6'>Get Involved</h1>
                <h2 className='text-2xl text-gray-800'>There are a few ways that you can help the locals: </h2>
                <div className='  py-2  my-3'>
                    <div className=' px-4 text-black text-xl text-center '>
                        <div className='text-xl text-gray-800 text-center px-7 lg:w-4/5 mx-auto mt-6 mb-4'>
                            Donate items of clothing, toiletries or medical aids. If you are travelling to Cape Verde, please
                            consider bringing a suitcase of donations with you or a suitcase specifically for a family. We can
                            apply for extra luggage allowance, so it need not affect your own allowance.
                        </div>
                        <div className="grid sm:sm:grid-cols-2 gap-4 mt-3">
                            <div className="flex justify-center">
                                <div className="image-container py-2">
                                    <img src="/images/WhatsApp Image donations2.jpg" alt="Image 1" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="image-container py-2">
                                    <img src="/images/getInvolved2_edited.jpg" alt="Image 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='  py-2 my-3'>
                    <p className=' text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'>If you are travelling to Cape Verde from the UK, but cannot donate yourself, we can send you a
                        bag of donations to repack and transport for us. We can apply for extra luggage allowance to
                        cater for this.
                    </p>
                </div>

                <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 mt-5 bg-black mx-auto"></div>

                <div className='  py-3 my-3'>
                    <h2 className='m-4 homepage-header text-5xl text-gray-900'>Fundraise:</h2>
                    <div className="text-black text-xl text-center  px-4">
                        <div className='text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'>
                            Monetary donations are essential for our missions. All our staff are volunteers, so all money
                            raised will go directly to the charity.If you can&apos;t afford to donate; have fun and hold a fundraiser event. Hold a cake sale, ask your school to have a non-uniform
                            day, do a sponsored walk, jump out of a plane or start a crowdfunder page?
                        </div>

                        <div className='grid sm:grid-cols-2 gap-4 mt-3'>
                            <div className="flex justify-center">
                                <div className="image-container py-2">
                                    <img src="/images/fundraise1.jpg" alt="Image 1" />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="image-container py-2">
                                    <img src="/images/fundraise3.jpg" alt="Image 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-2 my-8'>
                    <h2 className='m-4 homepage-header text-5xl text-gray-900'>Make a monetary donation</h2>
                    <HomePageButton />
                </div>

                <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 mt-5 bg-black mx-auto"></div>

                <div className='  py-4 my-3'>
                    <h2 className='m-4 homepage-header text-5xl text-gray-900'>Eat out or visit a bar or shop</h2>
                    <div className='text-black  text-xl py-3 text-center px-4 '>
                        <div className='text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'>
                            Many tourists stay in the hotels and do not see the poverty beyond the hotels. Pop into town and support the local businesses there. Cape Verde is generally a
                            very safe country but tourism does lure people from other African countries and many of the
                            street sellers are not Cape Verdean. As in any country, keep your personal items close to you. If
                            you do not want to be bothered by the street sellers turn your hotel bracelet inside out, (as they
                            can pretend they are from your hotel), or just tell them that you have been to their shop before.
                            There is always a minority in any country, but the majority listen when you say that you are not
                            interested.
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 mt-3">
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/localbusiness1.jpg" alt="Image 1" className="max-w-full " />
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="image-container">
                                    <img src="/images/localbusiness2.jpg" alt="Image 2" className="max-w-full " />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 mt-5 bg-black mx-auto"></div>

                <div className='  py-2 my-3'>
                    <h2 className='m-4 homepage-header text-5xl text-gray-900'>Donate to one family:</h2>
                    <p className=' text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'> We can provide you with details of a family in need and your suitcase can
                        be filled with clothing and toiletries specifically for that family. We work alongside local, public
                        and private partners and families are assessed. We can apply for extra luggage allowance (for
                        UK travellers) so it need not affect your own allowance. The empty suitcases are used by the
                        families for storage.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 pt-3 mx-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image family.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/donatefamily.jpg" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-2 my-3'>
                    <p className=' text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'>Bring donations or leave items behind at the end of your holiday. It can be difficult to get items
                        onto the islands and many locals cannot afford the high price tags for basic items like clothing,
                        toiletries and sanitary products. If you have a little space in your suitcase for some items, these
                        would be greatly appreciated.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 pt-3 mx-3 mb-3">
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
                    <p className='text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'> If you would like to bring a whole suitcase, we can apply for extra
                        luggage allowance (for UK travellers) so it need not affect your own allowance. Or alternatively,
                        leave some of your clothing behind at the end of your holiday. Children’s clothing is always needed, so if your child will have outgrown their clothes or shoes by the next summer, these
                        could be left behind for a family. Please only donate items in good condition as the refuse
                        system is basic on the islands.
                    </p>
                </div>

                <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 mt-5 bg-black mx-auto"></div>

                <div className='py-4 my-3'>
                    <h1 className='m-4 homepage-header text-6xl text-gray-900'>Donations</h1>
                    <h2 className='m-4 homepage-header text-3xl text-gray-900'>Clothing and Linen</h2>
                    <p className='text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'>
                        All clothing is appreciated but please bear in mind that temperatures very rarely fall below 20
                        degrees. (Winter coats are not needed and take up valuable suitcase weight allowance).
                    </p>
                    <div className='list-disc pl-5 space-y-2 mb-4'>
                        <li>Clothing.</li>
                        <li>Shoes.</li>
                        <li>Sandals.</li>
                        <li>Trainers (Sneakers).</li>
                        <li>Bed sheets.</li>
                        <li>Towels.</li>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mx-3 mt-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/donateclothing.jpg" alt="Image 1" className="max-w-full " />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/donationslisa.jpg" alt="Image 2" className="max-w-full " />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 mt-5 bg-black mx-auto"></div>

                <div className='py-3 my-3'>
                    <h1 className='m-4 homepage-header text-5xl text-gray-900'>School supplies</h1>
                    <p className='text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'>
                        Fill a suitcase with school supplies and stationery. Schools get little governmental support.
                        Families are asked to provide their own school bag with stationery. You can bring a case with
                        school supplies that will be passed on to schools on various Cape Verdean islands. Or bring a
                        school bag filled with stationery for a child.
                    </p>
                    <h2 className='text-center m-4 homepage-header text-5xl text-gray-900'>Donation Ideas</h2>
                    <div className='list-disc pl-5 space-y-2 mb-4'>
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
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mx-3 mt-2">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image school1.jpg" alt="Image 1" className="max-w-full " />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/school_edited.jpg" alt="Image 2" className="max-w-full " />
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 mt-5 bg-black mx-auto"></div>

                <div className='  py-4 my-3'>
                    <h1 className='m-4 homepage-header text-5xl text-gray-900'>Health and medical aids</h1>
                    <p className='text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto my-6'>
                        Health care and medicines are inadequate and expensive on the islands. Although we do not
                        give medicines, we can help with promoting a healthy lifestyle and can provide some medical
                        aids.
                        Many children do not brush their teeth regularly. Tourists feel sorry for the children and give
                        them sweets, unaware that they do not brush their teeth. On our activity events, we always try
                        and ensure that each child gets a toothbrush and toothpaste at the end of the event.<br />
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mx-3 mt-2">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/health1_edited.jpg" alt="Image 1" className="max-w-full " />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/health3.jpg" alt="Image 2" className="max-w-full " />
                            </div>
                        </div>
                    </div>
                    <p className='text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'>
                        At My Cape Verde, we try to encourage donors to be as eco-friendly as possible Reusable
                        incontinence pads, reusable sanitary pads, period pants, or period cups and reusable nappies
                        are not only better for the environment, but also save the families money longer term.<br />
                    </p>
                    <div>
                        <p className='text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'>Medical aids are expensive in Cape Verde. Wheelchairs and walking frames are in short supply if
                            you are able to donate one that is no longer needed. Unwanted spectacles/reading glasses will
                            be donated to health centres.
                            The shanty towns can be very dusty and dirty. Travel cots are beneficial for keeping babies and
                            toddlers in a cleaner environment
                        </p>
                    </div>
                    <h2 className='m-4 homepage-header text-5xl text-gray-900'>Donation Ideas</h2>
                    <div className='list-disc pl-5 space-y-2'>
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
                </div>

                <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 mt-5 bg-black mx-auto"></div>

                <div className='p-4 mt-3'>
                    <h1 className='m-4 homepage-header text-5xl xl:w-1/2 mx-auto text-gray-900'>Sports clubs and community centers</h1>
                    <p className='text-xl px-7 text-gray-800 text-center lg:w-4/5 mx-auto mt-6 mb-4'>
                        Support a sports club/team or community centre. Many children play sports, but families
                        cannot usually afford the correct footwear. The majority of houses are small and children are
                        sent outside to play. Footballs, basketballs, skipping ropes etc can help keep children
                        physically and mentally fit. Drugs and alcohol abuse can be avoided with mental stimulation.
                        Community centres and music groups can help those less sporty.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mx-3 mb-2">
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
                    <h2 className='m-4 homepage-header text-5xl text-gray-900'>Donation Ideas</h2>
                    <div className='list-disc pl-5 space-y-2'>
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
                    <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 mt-5 bg-black mx-auto"></div>

                </div>
            </div>
            <SmallerFooter />
        </div>

    );
}