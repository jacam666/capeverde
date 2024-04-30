import ResponsiveNavbar from "./components/ResponsiveNavbar";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from 'next/image'

export default function Home() {
  return (
    <div className=' bg-gradient-to-r from-blue-100 to-slate-600' style={{ minHeight: '100vh' }}>
      <ResponsiveNavbar/>
      <div className="w-full" style={{ width: '100%' }}>
        <Image src="/images/WhatsApp Image 2024-04-27 at 17.10.27_0fadff63.jpg" alt="verde" width={1200}  height={500} />
      </div>
      <div className="text-black">
        <h1 className="text-center text-4xl">Our Aim:</h1>
        <p className="px-3 text-center">We are a welfare charity aiming to help overcome poverty in Cape Verde and improve the quality of life for Cape Verdeans.</p>
      </div>
      <div className="w-full" style={{ width: '100%' }}>
        <Image src="/images/WhatsApp Image 2024-04-27 at 17.10.27_34eda20e.jpg" alt="verde"  width={1200}  height={500}/>
      </div> 
    </div>
  );
}
