"useClient"
import ResponsiveNavbar from "./components/ResponsiveNavbar";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from 'next/image'
import Footer from "./components/Footer";
import DonateButton from "./components/DonateButton";

export default function Home() {
  return (
    <div className=' bg-gradient-to-r from-blue-200 to-slate-600' style={{ minHeight: '100vh' }}>
      <ResponsiveNavbar/>
      <div style={{ width: '100%' }}>
        <Image className="w-full" src="/images/WhatsApp Image 2024-04-27 at 17.10.27_0fadff63.jpg" alt="verde" width={1200}  height={100} style={{height: 'auto'}} />
      </div>
      <div className="text-black">
        <h1 className="text-center text-5xl">Our Aim:</h1>
        <p className="px-3 text-center">We are a welfare charity aiming to help overcome poverty in Cape Verde and improve the quality of life for Cape Verdeans.</p>
      </div>
      <div style={{ width: '100%' }}>
        <Image className="w-full" src="/images/WhatsApp Image 2024-04-27 at 17.10.27_34eda20e.jpg" alt="verde"  width={1200}  height={100} style={{height: 'auto'}}/>
      </div> 
      <div>
        <DonateButton />
      </div>
      <Footer/>
    </div>
  );
}
