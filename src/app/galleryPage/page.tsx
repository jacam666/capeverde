"use client"

import React, { useState } from 'react';
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import SmallerFooter from "../components/SmallerFooter";
import Modal from 'react-modal';

Modal.setAppElement(document.body); // Use document.body if #__next does not exist

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function Gallery() {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    function openModal(imageSrc: string) {
        setSelectedImage(imageSrc);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setSelectedImage('');
    }

    const images = [
        "/images/gallery13.jpg",
        "/images/WhatsApp Image 2024-05-19 at 11.31.19_a0b6af57.jpg",
        "images/gallery14.jpg",
        "/images/gallery15.jpg",
        "/images/WhatsApp Image gallery.jpg",
        "/images/WhatsApp Image 2024-05-19 at 11.24.jpg",
        "/images/shanty.jpg",
        "/images/gallery1.jpg",
        "/images/gallery2.jpg",
        "/images/gallery3.jpg",
        "/images/gallery4.jpg",
        "/images/gallery5.jpg",
        "/images/gallery6.jpg",
        "/images/gallery7.jpg",
        "/images/gallery8.jpg",
        "/images/gallery9.jpg",
        "/images/gallery10.jpg",
        "/images/gallery11.jpg"
    ];

    return (
        <div className="bg-gradient-to-r from-blue-500 via-white to-red-500">
            <ResponsiveNavbar />
            <div className="p-9 bg-gradient-to-r from-blue-500 via-white to-red-500">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-black mb-4 text-center">Gallery</h1>
                <div className="container mx-auto sm:px-5 py-2 lg:px-32 lg:pt-12">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(0, 3).map((src, index) => (
                                <div key={index} className={`w-${index === 2 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(3, 6).map((src, index) => (
                                <div key={index} className={`w-${index === 0 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(6, 9).map((src, index) => (
                                <div key={index} className={`w-${index === 2 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(9, 12).map((src, index) => (
                                <div key={index} className={`w-${index === 0 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(12, 15).map((src, index) => (
                                <div key={index} className={`w-${index === 2 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex w-1/2 flex-wrap">
                            {images.slice(15, 18).map((src, index) => (
                                <div key={index} className={`w-${index === 0 ? "full" : "1/2"} p-1 md:p-2`}>
                                    <img
                                        alt="gallery"
                                        className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                        src={src}
                                        onClick={() => openModal(src)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Image Modal"
                >
                    <div className="flex flex-col items-center">
                        <img src={selectedImage} alt="Selected" className="max-w-full max-h-[80vh]" />
                        <button
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            </div>
            <SmallerFooter />
        </div>
    );
}