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
        <div style={{ backgroundColor: '#f7fee7'}}>
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
                        {/* <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
                        </CardFooter> */}
                    </Card>
                ))}

            </div>
        </div>
    );
}
