import { FC } from "react";
import { Mail } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "./Navbar";

interface HeaderProps {
    image: string;
    title: string;
    activeTab: string;
}

const Header: FC<HeaderProps> = ({ image, title, activeTab }) => {
    return (
        <div className="w-full h-[470px] md:h-[490px] lg:h-[590px] brunchMenu-page">
            {/* background image */}
            <Image
                src={image}
                alt={`${title} image`}
                fill
                className="object-cover"
            />
            {/* header content */}
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.45)] flex flex-col items-center">
                {/* restaurant info */}
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
                {/* end of restaurant info */}

                <Navbar activeTab={activeTab} />

                {/* titles */}
                <div className="flex-1 mb-20 w-full flex flex-col items-center justify-center gap-6 text-white hero-welcome">
                    <h2 className="font-medium text-[14px] md:text-xl">
                        FRANCE RATATOUILLE
                    </h2>
                    <h1 className="text-[42px] md:text-[60px] lg:text-7xl font-semibold title">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Header;
