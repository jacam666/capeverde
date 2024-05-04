import ResponsiveNavbar from "./components/ResponsiveNavbar";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from 'next/image';
import Footer from "./components/Footer";
import DonateButton from "./components/DonateButton";

export const metadata = {
  title: "My Cape Verde"
}

export default function Home() {
  return (
    <div className='bg-white relative' style={{ minHeight: '100vh' }}>
      <ResponsiveNavbar />
      <h1 className="text-3xl text-center mt-3">Our Aim:</h1>
        <Image className="w-full px-3 py-3" src="/images/WhatsApp Image 2024-04-27 at 17.10_edited.jpg" alt="verde" width={1200} height={100} style={{ height: 'auto' }} />
        <div className="text-center">
          <p>We are a welfare charity aiming to help overcome poverty in Cape Verde and improve the quality of life for Cape Verdeans.</p>
      </div>
      <div style={{ width: '100%' }}>
        <Image className="w-full px-3 py-3" src="/images/Whats App Image 2024-04-27 at 17.10_edited.jpg" alt="verde" width={1200} height={100} style={{ height: 'auto' }} />
      </div>
      <div>
        <DonateButton />
      </div>
      <Footer />
    </div>
  );
}
