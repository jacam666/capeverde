import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import ResponsiveNavbar from "../components/ResponsiveNavbar";

export const metadata = {
    title: "Our Team"
}

export default function Team() {
    const list = [
        {
            title: "Ivanilson",
            img: "/images/team1.jpg",
        },
        {
            title: "Lisa",
            img: "/images/team2.jpg",
        },
        {
            title: "Rachael",
            img: "/images/team3.jpg",
        },
        {
            img: "/images/team5.jpg",
            title: "Paul"
        },
    ];

    return (
        <div className=" bg-gradient-to-r from-blue-500 via-white to-red-500">
            <ResponsiveNavbar />
            <h1 className="text-black text-center mt-3">Meet Our Team</h1>
            <div className="gap-2 grid  sm:grid-cols-2 grid-cols-1 ">
                {list.map((item, index) => (
                    <Card key={index}>
                        <CardBody className="h-auto overflow-visible p-0 m-2">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Image
                                    radius="lg"
                                    width="100%"
                                    alt={item.title}
                                    className="w-full object-cover opacity-100"
                                    src={item.img}
                                />
                                <div className="text-center text-black text-3xl mt-3 ">{item.title}</div>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <div className="border-top border-black mt-3">
                <h1 className="text-center text-black mt-4">Our Volunteers</h1>
                <div>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <div className="my-3 mx-2">
                            <img className="image-container" src="/images/volunteer1.jpg" alt="volunteer-1" />
                            <h2 className="text-center text-black">Melissa</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-container" src="/images/volunteer2.jpg" alt="volunteer2" />
                            <h2 className="text-center text-black">Djack</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-container" src="/images/volunteer3.jpg" alt="volunteer-3" />
                            <h2 className="text-center text-black">Paulo</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-container" src="/images/volunteer4.jpg" alt="volunteer-4" />
                            <h2 className="text-center text-black">Ivan</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-container" src="/images/volunteer5.jpg" alt="volunteer-5" />
                            <h2 className="text-center text-black">Solange</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-container" src="/images/volunteer6.jpg" alt="volunteer-6" />
                            <h2 className="text-center text-black">Fernanda</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-container" src="/images/volunteer7.jpg" alt="volunteer-6" />
                            <h2 className="text-center text-black">Ivania</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-container" src="/images/volunteer8.jpg" alt="volunteer-6" />
                            <h2 className="text-center text-black">Marco</h2>
                        </div>
                        <div className="mt-3 mx-2">
                            <img className="image-container" src="/images/volunteer9.jpg" alt="volunteer-6" />
                            <h2 className="text-center text-black">Fortz</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
