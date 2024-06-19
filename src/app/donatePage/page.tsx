import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar"
//import DonateButton from '../components/DonateButton';
//import Footer from '../components/Footer';
import SmallerFooter from '../components/SmallerFooter';
import HomePageButton from '../components/HomePageButton';
import Link from 'next/link';


export const metadata = {
    title: "Donate"
}

export default function Donate() {
    return (
        <div className=''>
            <ResponsiveNavbar />
            <div className=' text-black px-3 text-center py-6' >
                <h1 className='homepage-header text-center text-6xl my-6 text-gray-900'>There are several ways to donate:</h1>
                <div className='py-2  my-6 text-gray-800'>
                    <h2 className='my-6 pb-3'>Make a monetary donation</h2>
                    <HomePageButton />
                </div>
                <div className='py-2 my-3'>
                    <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-2 pt-3 mx-3 mb-3">
                        <div className="flex justify-center">
                            <div className="image-container lg:w-2/3 lg:my-auto">
                                <img src="/images/tui (3).jpeg" alt="Image 1" />
                            </div>
                        </div>
                        <div className=' text-2xl lg:text-lg text-gray-800 my-4 flex items-center'>
                            Thanks to TUI UK, My Cape Verde can apply to TUI for up to 20kg of free charitable luggage per booking, for travellers from the UK. This enables visitors to bring over much needed donations and supplies for charitable usage.
                        </div>
                        <div className="flex justify-center">
                            <div className='w-1/2 sm:w-2/3 lg:my-auto'>
                                <img className='' src="/images/tui-luggage-barcode.jpg" alt="Image 2" />
                            </div>
                        </div>
                        <div className=' flex text-center text-2xl my-4 items-center lg:text-xl'>
                            You can then bring extra items over that are so desperately needed here, but cannot be sourced on the island.
                        </div>
                    </div>
                </div>
                <div className=" h-1 sm:h-1 w-1/2 md:w-2/5 bg-black mx-auto my-4 lg:h-0"></div>

                <div className='py-2 mt-3'>
                    <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-2 pt-3 mx-3 mb-3">
                        <div className="flex justify-center w-1/2 sm:w-2/3 mx-auto sm:mb-8 lg:my-auto">
                            <Link href='https://paypal.com' className="image-container">
                                <img src="/images/paypal.png" alt="Image 1" />
                            </Link>
                        </div>
                        <div className=' text-2xl lg:text-xl text-gray-800 my-4 flex items-center'>
                            <div>
                                If you want to donate via PayPal, simply click{" "}
                                <Link href="https://paypal.com" target="_blank" rel="noopener noreferrer">
                                    here
                                </Link>{" "}
                                and follow the simple instructions. PayPal is safe and secure, and you
                                can donate via PayPal even if you do not have a PayPal account.
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-1/2 sm:w-2/3 lg:my-auto">
                                <img src='/images/qrcode_www.paypal.com.png' />
                            </div>
                        </div>
                        <div className=' text-2xl text-gray-800 my-4 flex items-center'>
                            Please select the Friends and Family option to prevent any fees Thank you! Or scan the barcode.
                        </div>
                    </div>
                </div>
            </div>
            <SmallerFooter />
        </div >
    );
}