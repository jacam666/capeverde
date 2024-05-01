import ResponsiveNavbar from "../components/ResponsiveNavbar";

export default function Gallery() {
    return (
        <div>
            <ResponsiveNavbar />
            <div className="p-9 bg-white">
                <h1 className="text-2xl font-bold text-black mb-4 text-center">Gallery</h1>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/OIP (2)_edited.jpg" alt="Image 1" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/R.jpg" alt="Image 2" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/R_edited2.jpg" alt="Image 3" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/06.jpg" alt="Image 4" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/WhatsApp Image 2024-04-27 at 17.10_edited.jpg" alt="Image 5" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/Whats App Image 2024-04-27 at 17.10_edited.jpg" alt="Image 6" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/OIP (1).jpeg" alt="Image 7" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/shanty.jpg" alt="Image 8" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/espargos-sal-cape-verde-wm.jpg" alt="Image 9" className="max-w-full " />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="image-container">
                            <img src="/images/download_schooledited.jpg" alt="Image 10" className="max-w-full " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}