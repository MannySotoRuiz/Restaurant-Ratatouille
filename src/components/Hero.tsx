"use client";

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "@/components/ui/Navbar";

const Hero = () => {
    const images = [
        "/images/hero_image1.jpg",
        "/images/hero_image2.jpg",
        "/images/hero_image3.jpg",
        "/images/hero_image4.jpg",
    ];
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="heroSection"
            //   style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
            {/* image slideshow */}
            {images.map((img, idx) => (
                <div
                    key={idx}
                    className={`heroImage ${
                        currentIndex === idx ? "active" : ""
                    }`}
                    style={{ backgroundImage: `url(${img})` }}
                ></div>
            ))}

            {/* hero content */}
            <div className="w-screen h-screen absolute z-50 bg-[rgba(0,0,0,0.45)] flex flex-col items-center">
                {/* restuarant info */}
                <div className="hidden lg:flex w-full border-b border-gray-500 items-center justify-center text-white text-[13px] py-[15px]">
                    <div className="w-full 2xl:w-[1400px] flex items-center justify-between px-[4%] sm:px-[6%] 2xl:px-[40px]">
                        {/* address */}
                        <div className="flex items-center space-x-2">
                            <FaLocationDot />
                            <h3>1234 Avenue, New York, NY 01234</h3>
                        </div>
                        {/* phone number and email */}
                        <div className="space-x-6 flex items-center">
                            <h3>(123) 456 7890</h3>
                            <div className="flex items-center space-x-2">
                                {/* <HiOutlineMail className="text-[15px]" /> */}
                                <Mail size={15} />
                                <h3>france.ratatouille@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar activeTab="home" />

                {/* welcome message */}
                <div className="absolute top-[45%] w-full flex flex-col gap-6 items-center justify-center text-white hero-welcome">
                    <h2 className="font-medium text-[14px] md:text-xl">
                        WELCOME TO FRANCE
                    </h2>
                    <h1 className="text-[42px] md:text-[60px] lg:text-7xl font-semibold title">
                        RATATOUILLE
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
