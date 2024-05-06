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
                    {/* <p className=' text-black text-xl text-left  px-4'>Bring donations or leave items behind at the end of your holiday. It can be difficult to get items
                        onto the islands and many locals cannot afford the high price tags for basic items like clothing,
                        toiletries and sanitary products. If you have a little space in your suitcase for some items, these
                        would be greatly appreciated.
                    </p> */}
                    <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-2 pt-3 mx-3 mb-3">
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/tui (3).jpeg" alt="Image 1"/>
                            </div>
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, at sit? Debitis dolore quisquam saepe soluta illo sint minus officiis facere! Enim placeat, perspiciatis vitae quasi quis praesentium nesciunt reiciendis!
                        </div>
                        <div className="flex justify-center">
                            <div className="image-container">
                                <img src="/images/WhatsApp Image donation4.jpg" alt="Image 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}