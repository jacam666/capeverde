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
            <div className=' bg-gradient-to-r from-blue-100 to-slate-600'>
                <h1 className='text-center text-5xl py-3 text-black'>Who we are</h1>
                <p className='px-5 text-black text-xl'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quaerat corporis, voluptatibus illum optio, explicabo alias quis harum asperiores neque, eius beatae. Architecto aliquam amet aliquid neque iure quam quidem.
                </p>
                <div style={{ width: '100%' }}>
                    <Image className='w-full px-3 py-3' src="/images/WhatsApp Image 2024-04-27 at 17.10.27_34eda20e.jpg" alt='young child' width={500} height={500}/>
                </div>
                <p className='text-black px-5 text-xl py-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, similique fugit eveniet corrupti magni quam amet aperiam! Saepe ipsa nesciunt debitis? Nemo eveniet fuga debitis et. Odio quas laborum aliquid?
                </p>
                <div>
                    <Image className='w-full px-3 py-3' src="/images/WhatsApp Image 2024-04-27 at 17.10.27_34eda20e.jpg" alt='young child' width={500} height={500}/>
                </div>
                <DonateButton/>
            </div>
        </div>

    );
}