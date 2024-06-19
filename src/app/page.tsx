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
      <div className="">
        <div className=" mx-4 rounded-lg text-center py-9">
          <h1 className="homepage-header text-6xl sm:text-7xl text-gray-900 mt-8 mb-6">
            My Cape Verde
          </h1>
          <p className="text-2xl px-2 text-gray-800 lg:w-2/3 mb-2 xl:w-1/2 mx-auto
                        first-letter:text-4xl
                        ">
            We are a welfare charity aiming to help overcome poverty in Cape Verde and improve the quality of life for Cape Verdeans.
          </p>
        </div>
        <HomePageButton />
      </div>
      <div className="text-center py-6">
        <h1 className="homepage-header text-5xl px-4 text-gray-900 text-center mx-auto md:w-3/4 lg:w-2/3  mt-8 mb-6">Building a Brighter Future for Cape Verde</h1>
        <h3 className="text-2xl sm:py-9 text-gray-800">Join us in making a difference.</h3>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col  md:w-1/5">
          <p className="homepage-header text-xl font-bold text-gray-900 mt-8  px-4">Why Choose Us?</p>
          <div className=" my-4 ml-6 h-1 mb-8 sm:h-1 w-2/6 lg:w-2/5 md:w-2/5 bg-black "></div>
        </div>
        <div className=" md:w-2/5 my-3 flex flex-col justify-center items-center">
          <Image
            src="/images/frontpageimage1_edited.jpg"
            alt="gallery"
            width={500}
            height={500}
            className="homepage-image w-11/12"
          />
          <h5 className="flex text-lg text-black mt-2">
            Community Development
          </h5>
          <p className="px-4 text-gray-700">
            Empowering local communities sustainably.
          </p>
        </div>
        <div className=" md:w-2/5 flex flex-col justify-center items-center">
          <Image
            src="/images/Whats App Image 2024-04-27 at 17_edited2.jpg"
            alt="gallery"
            width={500}
            height={500}
            className="homepage-image w-11/12"
          />
          <h5 className="flex text-black text-lg mt-2">
            Education Programs
          </h5>
          <p className="px-4 text-gray-700">
            Providing education and resources to children and adults
          </p>
        </div>
      </div>

      {/* <div className=" h-1 sm:h-1 w-1/2 lg:w-2/5 md:w-2/5 bg-black mx-auto my-4"></div> */}

      <div className=" mx-4 rounded-lg text-center py-6">
        <h1 className="homepage-header text-4xl text-gray-900 mb-4 ">
          Be Part of the Change
        </h1>
        <p className="text-xl sm:w-1/2 text-center mx-auto mb-6 text-gray-700">
          Your support can make all the difference. Join us in our mission to empower and uplift our communities.
        </p>
        <HomePageButton />
      </div>
      <Footer />
    </div>
  );
}

