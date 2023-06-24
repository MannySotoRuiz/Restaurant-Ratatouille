"use client";

import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Hero = () => {
  const images = [
    "/images/hero_image1.jpg",
    "/images/hero_image2.jpg",
    "/images/hero_image3.jpg",
    "/images/hero_image4.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
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
          className={`heroImage ${currentIndex === idx ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* hero content */}
      <div className="w-screen h-screen absolute z-50 bg-[rgba(0,0,0,0.45)]">
        {/* restuarant info */}
        <div className="flex border-b border-gray-500 items-center justify-between px-[270px] text-white text-[13px] py-[15px]">
          {/* address */}
          <div className="flex items-center space-x-2">
            <FaLocationDot />
            <h3>1234 Avenue, New York, NY 01234</h3>
          </div>
          {/* phone number and email */}
          <div className="space-x-6 flex items-center">
            <h3>(123) 456 7890</h3>
            <div className="flex items-center space-x-1">
              <HiOutlineMail />
              <h3>sample@gmail.com</h3>
            </div>
          </div>
        </div>

        {/* nav bar */}
        <div className="w-full flex items-center justify-between px-[270px] text-white text-[14px] py-[50px]">
          <div>Logo</div>
          <div className="flex items-center space-x-8">
            <h2 className="border-b-2 border-orange-500 pb-1 cursor-pointer">
              HOME
            </h2>
            <div>
              <h2 className="pb-2 cursor-pointer">MENU</h2>
            </div>
            <h2 className="pb-2 cursor-pointer">ABOUT</h2>
            <h2 className="pb-2 cursor-pointer">GALLERY</h2>
            <h2 className="pb-2 cursor-pointer">EVENTS</h2>
            <h2 className="pb-2 cursor-pointer">BLOG</h2>
            <h2 className="pb-2 cursor-pointer">CONTACT</h2>
            <button className="border-2 border-white px-[20px] py-[10px] cursor-pointer mb-2">
              MAKE A RESERVATION
            </button>
          </div>
        </div>
        {/* end of nav bar */}

        {/* welcome message */}
        <div className="absolute top-[45%] w-full flex flex-col gap-6 items-center justify-center text-white hero-welcome">
          <h2 className="font-medium text-xl">WELCOME TO FRANCE</h2>
          <h1 className="text-7xl font-semibold title">RATATOUILLE</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
