import ResponsiveNavbar from "../components/ResponsiveNavbar";
import SmallerFooter from "../components/SmallerFooter";

export default function Gallery() {
    return (
        <div className=" bg-gradient-to-r from-blue-500 via-white to-red-500">
            <ResponsiveNavbar />
            <div className="p-9  bg-gradient-to-r from-blue-500 via-white to-red-500">
                <h1 className="text-4xl font-bold text-black mb-4 text-center">Gallery</h1>
                <div className="grid grid-cols-2 gap-2">
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery13.jpg" alt="Image 1" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery12.jpg" alt="image-2" className="max-w-full " />
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/R_edited2.jpg" alt="Image 3" className="max-w-full " />
                        </div>
                    </div> */}
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="images/gallery14.jpg" alt="Image 4" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery15.jpg" alt="Image 5" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/Whats App Image 2024-04-27 at 17.10_edited.jpg" alt="Image 6" className="max-w-full " />
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/OIP (1).jpeg" alt="Image 7" className="max-w-full " />
                        </div>
                    </div> */}
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/fundraise3.jpg" alt="Image 8" className="max-w-full " />
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/espargos-sal-cape-verde-wm.jpg" alt="Image 9" className="max-w-full " />
                        </div>
                    </div> */}
                    {/* <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/download_schooledited.jpg" alt="Image 10" className="max-w-full " />
                        </div>
                    </div> */}
                    {/* <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/localbusiness2.jpeg" alt="Image 11" className="max-w-full " />
                        </div>
                    </div> */}
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/shanty.jpg" alt="Image 12" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery1.jpg" alt="Image 13" className="max-w-full " />
                        </div>
                    </div>
                    {/* <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/sports.jpg" alt="Image 14" className="max-w-full " />
                        </div>
                    </div> */}
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery2.jpg" alt="Image 15" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery3.jpg" alt="Image 16" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery4.jpg" alt="Image 17" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery5.jpg" alt="Image 18" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery6.jpg" alt="Image 19" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery7.jpg" alt="Image 20" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery8.jpg" alt="Image 21" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery9.jpg" alt="Image 22" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery10.jpg" alt="Image 23" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/gallery11.jpg" alt="Image 24" className="max-w-full " />
                        </div>
                    </div>
                </div>
            </div>
            <SmallerFooter/>
        </div>
    );
}