import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar"
import Image from 'next/image'
import DonateButton from '../components/DonateButton';


export const metadata = {
    title: "Get Involved"
}

export default function GetInvolved() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <ResponsiveNavbar />
            <div className=' bg-white text-black px-3 text-center'>
                <h1 className='text-center text-5xl py-3 text-black'>Get Involved</h1>
                <h2>There are a few ways that you can help the locals: </h2>
                <div className='border border-gray-400 shadow-md py-2  my-3'>
                    <div className=' px-4 text-black text-xl text-left'>
                        Donate items of clothing, toiletries or medical aids. If you are travelling to Cape Verde, please
                        consider bringing a suitcase of donations with you or a suitcase specifically for a family. We can
                        apply for extra luggage allowance, so it need not affect your own allowance.
                        <div className="">
                            <div className="flex justify-center">
                                <div className="image-container py-2">
                                    <img src="/images/WhatsApp Image donations2.jpg" alt="Image 1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-400 shadow-md py-2 my-3'>
                    <p className=' text-black text-xl text-left px-4'>If you are travelling to Cape Verde from the UK, but cannot donate yourself, we can send you a
                        bag of donations to repack and transport for us. We can apply for extra luggage allowance to
                        cater for this.
                    </p>
                </div>

                <div className='border border-gray-400 shadow-md py-3 my-3'>
                    <h2>Fundraise:</h2>
                    <div className=' text-black text-xl text-left  px-4'>We rely totally on donations for funding. All our staff are volunteers, so all money
                        raised will go directly to the charity. Hold a cake sale, ask your school to have a non-uniform
                        day, do a sponsored walk, jump out of a plane or start a crowdfunder page?
                        <div className="flex justify-center">
                            <div className="image-container py-2">
                                <img src="/images/WhatsApp Image fundraise.jpg" alt="Image 1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border border-gray-400 shadow-md py-2 my-3'>
                    <h2>Make a monetary donation</h2>
                    <DonateButton />
                </div>
                <div className='border border-gray-400 shadow-md py-4 my-3'>
                    <h2 className='px-4'>Eat out or visit a bar or shop</h2>
                    <div className='text-black  text-xl py-3 text-left px-4 '>
                        Many tourists stay in the hotels and do not see the poverty outside
                        of the hotels.<br /> Pop into town and support the local businesses there.<br /> Cape Verde is generally a
                        very safe country but tourism does lure people from other African countries and many of the
                        street sellers are not Cape Verdean.<br /> As in any country, keep your personal items close to you. If
                        you do not want to be bothered by the street sellers turn your hotel bracelet inside out, (as they
                        can pretend they are from your hotel), or just tell them that you have been to their shop before.
                        There is always a minority in any country, but the majority listen when you say that you are not
                        interested.
                        <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/localbusiness.jpeg" alt="Image 1" className="max-w-full " />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/localbusiness2.jpeg" alt="Image 2" className="max-w-full " />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

    );
}