import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import SmallerFooter from "../components/SmallerFooter";

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
        <div className="">
            <ResponsiveNavbar />
            <h1 className="homepage-header text-6xl text-gray-900 text-center my-12 underline underline-offset-8 decoration-2 ">Meet Our Team</h1>
            <div className="gap-1 grid  sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 p-3">
                {list.map((item, index) => (
                    <Card key={index}>
                        <CardBody className="h-auto  p-0 m-2 mb-5">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Image
                                    radius="full"
                                    width="60%"
                                    alt={item.title}
                                    className="w-full object-cover rounded-full opacity-100"
                                    src={item.img}
                                />
                                <div className="text-center text-gray-800 text-4xl mt-3 ">{item.title}</div>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </div>
            <div className="">
                <h1 className="homepage-header text-6xl text-gray-900 text-center m-10 underline underline-offset-8 decoration-2">Our Volunteers</h1>
                <div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-1 over">
                        <div className="my-3 mx-2">
                            <img className="image-team rounded-full w-3/5 mx-auto" src="/images/volunteer1.jpg" alt="volunteer-1" />
                            <h2 className="text-center text-gray-800 text-4xl my-4">Melissa</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-team rounded-full w-3/5 mx-auto" src="/images/volunteer2.jpg" alt="volunteer2" />
                            <h2 className="text-center text-gray-800 text-4xl my-4">Djack</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-team rounded-full w-3/5 mx-auto" src="/images/volunteer3.jpg" alt="volunteer-3" />
                            <h2 className="text-center text-gray-800 text-4xl my-4">Paulo</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-team rounded-full w-3/5 mx-auto" src="/images/volunteer4.jpg" alt="volunteer-4" />
                            <h2 className="text-center text-gray-800 text-4xl my-4">Ivan</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-team rounded-full w-3/5 mx-auto" src="/images/volunteer5_edited.jpg" alt="volunteer-5" />
                            <h2 className="text-center text-gray-800 text-4xl my-4">Solange</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-team rounded-full w-3/5 mx-auto" src="/images/volunteer6.jpg" alt="volunteer-6" />
                            <h2 className="text-center text-gray-800 text-4xl my-4">Fernanda</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-team rounded-full w-3/5 mx-auto" src="/images/volunteer7.jpg" alt="volunteer-6" />
                            <h2 className="text-center text-gray-800 text-4xl my-4">Ivania</h2>
                        </div>
                        <div className="my-3 mx-2">
                            <img className="image-team rounded-full w-3/5 mx-auto" src="/images/volunteer8.jpg" alt="volunteer-6" />
                            <h2 className="text-center text-gray-800 text-4xl my-4">Marco</h2>
                        </div>
                        <div className="mt-3 mx-2 mb-5">
                            <img className="image-team  rounded-full w-3/5 mx-auto" src="/images/volunteerWhatsApp Image 2024-06-16 at 14.38.jpg" alt="volunteer-6" />
                            <h2 className="text-center text-gray-800 text-4xl my-4">Fortunato</h2>
                        </div>
                    </div>
                </div>
            </div>
            <SmallerFooter/>
        </div>
    );
}
