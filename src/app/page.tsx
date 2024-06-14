import ResponsiveNavbar from "./components/ResponsiveNavbar";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./components/Footer";
import HomePageButton from "./components/HomePageButton";
import Image from "next/image";


export const metadata = {
  title: "My Cape Verde"
}

export default function Home() {
  return (
    <div className='' >
      <ResponsiveNavbar />
      <div className=" pb-8">
        <div className="text-center py-9">
          <h1 className="homepage-header text-6xl md:text-7xl text-gray-900 text-center mx-auto md:w-3/4 lg:w-2/3 lg:text-8xl py-9">Building a Brighter Future for Cape Verde</h1>
          <h3 className="text-2xl lg:text-4xl py-5 sm:py-9">Join us in making a difference, one community at a time.</h3>
        </div>
        <HomePageButton />
      </div>
      <h1 className="homepage-header text-5xl md:text-6xl  text-gray-900 text-center mx-auto my-5 px-5 py-9">
        We are a welfare charity aiming to help overcome poverty in Cape Verde and improve the quality of life for Cape Verdians.
      </h1>
      {/* <div className="flex flex-col sm:flex-row w-full justify-between "> */}
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:w-1/3">
          <p className="homepage-header text-xl font-bold text-gray-900 mt-8  px-4">Why Choose Us?</p>
          <div className=" my-4 ml-6 h-1 mb-8 sm:h-1 w-2/6 lg:w-2/5 md:w-2/5 bg-black "></div>
        </div>
        <div className="sm:w-1/3 my-3 flex flex-col justify-center items-center">
          <Image
            src="/images/frontpageimage1_edited.jpg"
            alt="gallery"
            width={500}
            height={500}
            className="homepage-image w-11/12"
          />
          <h5 className="flex text-lg text-black">
            Community Development
          </h5>
          <p className="px-4 text-gray-700">
            Empowering local communities sustainably.
          </p>
        </div>


        <div className="sm:w-1/3 flex flex-col justify-center items-center">
          <Image
            src="/images/Whats App Image 2024-04-27 at 17_edited2.jpg"
            alt="gallery"
            width={500}
            height={500}
            className="homepage-image w-11/12"
          />
          <h5 className="flex text-black text-lg">
            Healthcare Services
          </h5>
          <p className="px-4 text-gray-700">
            Improving access to essential healthcare for all.
          </p>
        </div>


      </div>
      {/* </div> */}
      <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 bg-black mx-auto my-4"></div>
      <Footer />
    </div>
  );
}

