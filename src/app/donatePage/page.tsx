import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ResponsiveNavbar from "../components/ResponsiveNavbar"
import DonateButton from '../components/DonateButton';


export const metadata = {
    title: "Donate"
}

export default function Donate() {
    return (
        <div className='bg-gradient-to-br from-blue-500 via-white to-red-500' style={{ minHeight: '100vh' }}>
            <ResponsiveNavbar />
            <div className=' bg-gradient-to-r from-blue-500 via-white to-red-500 text-black px-3 text-center' >
                <h1 className='text-center text-5xl py-3 text-black'>There are several ways to donate:</h1>
                <div className='border border-gray-400 shadow-md py-2  my-3'>
                    <h2>Make a monetary donation</h2>
                    <DonateButton />
                </div>
                <div className='border border-gray-400 shadow-md py-2 my-3'>
                    <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-2 pt-3 mx-3 mb-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/tui (3).jpeg" alt="Image 1" />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            Thanks to TUI UK, OSPA can apply to TUI for up to 20kg of free charitable luggage per booking, for travellers from the UK. This enables visitors to bring over much needed donations and supplies for charitable usage.                        </div>
                        <div className="flex justify-center">
                            <div>
                                <img className='' src="/images/tui-luggage-barcode.jpg" alt="Image 2" />
                            </div>
                        </div>
                        <div className='flex text-center items-center lg:text-xl'>
                            You can then bring extra items over that are so desperately needed here, but cannot be sourced on the island.
                        </div>
                    </div>
                </div>
                <div className='border border-gray-400 shadow-md py-2 my-3'>
                    <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-2 pt-3 mx-3 mb-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/paypal.png" alt="Image 1" />
                            </div>
                        </div>
                        <div className='flex items-center'>
                            If you want to donate via Paypal, simply click here and follow the simple instructions. Paypal is safe and secure, and you can donate via Paypal also if you do not have a Paypal account.
                        </div>
                        <div>
                            <div className='image-container'>
                                <img src='/images/paypal-demo-barcode.jpg'/>
                            </div>
                        </div>
                        <div className='flex text-center items-center'>
                        Please select the Friends and Family option to prevent any fees Thank you! Or scan the barcode.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}