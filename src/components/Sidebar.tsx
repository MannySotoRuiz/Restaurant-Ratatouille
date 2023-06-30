"use client";

import { ChevronRight, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = ({ activeTab }: { activeTab: string }) => {
    const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
    const [openExpandedMenu, setOpenExpandedMenu] = useState<boolean>(false);

    const handleMobileMenuClick = () => {
        setOpenMobileMenu(!openMobileMenu);
        if (openMobileMenu) {
            document.documentElement.style.overflow = "auto"; // allow scroll again
        } else {
            document.documentElement.style.overflow = "hidden"; // disable background scrolling when menu is opened
        }
    };
    return (
        <>
            <RxHamburgerMenu
                size={30}
                onClick={handleMobileMenuClick}
                // color="white"
                className="absolute top-11 right-14 text-white hover:text-orange-600 cursor-pointer lg:hidden"
            />
            {/* slide in menu from right to left */}
            {openMobileMenu && (
                <div className="flex lg:hidden bg-black w-90vw md:w-50vw min-h-screen fixed top-0 right-0 transition0-3s flex-col items-center animate-slideLeftToRight z-30 overflow-y-auto">
                    <div className="border-b border-gray-300 w-full h-[100px] mb-12 relative">
                        <h3 className="pt-10 pl-10">Logo</h3>
                        <div
                            className="absolute top-8 right-8"
                            onClick={handleMobileMenuClick}
                        >
                            <X
                                size={30}
                                className="text-white hover:text-orange-600 cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2 text-white text-[24px] pb-10 w-full px-[8%] font-medium">
                        <Link
                            href="/"
                            className={`transition0-3s ${
                                activeTab === "home"
                                    ? "text-orange-600 hover:text-orange-600/60"
                                    : "hover:text-white/60"
                            }`}
                            onClick={handleMobileMenuClick}
                        >
                            Home
                        </Link>
                        <div className="w-full flex flex-col items-center">
                            <div className="w-full flex items-center">
                                <span
                                    className={`flex-1 hover:text-white/60 transition0-3s cursor-pointer ${
                                        activeTab === "menu"
                                            ? "text-orange-600 hover:text-orange-600/60"
                                            : "hover:text-white/60"
                                    }`}
                                    onClick={() =>
                                        setOpenExpandedMenu(!openExpandedMenu)
                                    }
                                >
                                    Menu
                                </span>

                                <ChevronRight
                                    className={`transition0-3s cursor-pointer ${
                                        openExpandedMenu
                                            ? "navbar-icon-rotate90"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setOpenExpandedMenu(!openExpandedMenu)
                                    }
                                />
                            </div>
                            {openExpandedMenu && (
                                <div className="transition0-3s w-full pl-[12%] flex flex-col space-y-4 text-[16px] pt-3 pb-5">
                                    <Link
                                        href="brunch-menu"
                                        className="hover:text-white/60 transition0-3s"
                                        onClick={handleMobileMenuClick}
                                    >
                                        Brunch Menu
                                    </Link>
                                    <Link
                                        href="menu"
                                        className="hover:text-white/60 transition0-3s"
                                        onClick={handleMobileMenuClick}
                                    >
                                        Main Menu
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link
                            href="about"
                            className={`transition0-3s ${
                                activeTab === "about"
                                    ? "text-orange-600 hover:text-orange-600/60"
                                    : "hover:text-white/60"
                            }`}
                            onClick={handleMobileMenuClick}
                        >
                            About
                        </Link>
                        <Link
                            href="gallery"
                            className={`transition0-3s ${
                                activeTab === "gallery"
                                    ? "text-orange-600 hover:text-orange-600/60"
                                    : "hover:text-white/60"
                            }`}
                            onClick={handleMobileMenuClick}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="events"
                            className={`transition0-3s ${
                                activeTab === "events"
                                    ? "text-orange-600 hover:text-orange-600/60"
                                    : "hover:text-white/60"
                            }`}
                            onClick={handleMobileMenuClick}
                        >
                            Events
                        </Link>
                        <Link
                            href="blog"
                            className={`transition0-3s ${
                                activeTab === "blog"
                                    ? "text-orange-600 hover:text-orange-600/60"
                                    : "hover:text-white/60"
                            }`}
                            onClick={handleMobileMenuClick}
                        >
                            Blog
                        </Link>
                        <Link
                            href="contact"
                            className={`transition0-3s ${
                                activeTab === "contact"
                                    ? "text-orange-600 hover:text-orange-600/60"
                                    : "hover:text-white/60"
                            }`}
                            onClick={handleMobileMenuClick}
                        >
                            Contact
                        </Link>
                        <button className="text-left mb-5 hover:text-white/60 transition0-3s">
                            Make A Reservation
                        </button>
                    </div>

                    <div className="border-b border-gray-200 w-full pl-[8%] pb-10">
                        <p className="text-[14px] font-normal">
                            Website designed by{" "}
                            <Link
                                href="https://mannysotoruiz.com/"
                                target="_blank"
                                className="transition-all hover:text-orange-600"
                            >
                                Emmanuel Soto Ruiz
                            </Link>
                        </p>
                    </div>
                    <div className="w-full pt-10 pl-[8%] space-y-3">
                        <div className="w-full flex items-center text-[15px] space-x-3">
                            <FaLocationDot />
                            <span>1234 Avenue, New York, NY 01234</span>
                        </div>
                        <div className="w-full flex items-center text-[15px] space-x-3">
                            <FaPhoneFlip />
                            <span>(123) 456 7890</span>
                        </div>
                        <div className="w-full flex items-center text-[15px] space-x-3">
                            <HiOutlineMail size={18} />
                            <span>france.ratatouille@gmail.com</span>
                        </div>
                        <div className="w-full space-x-4 flex items-center">
                            <BsFacebook
                                size={20}
                                className="transition-colors hover:text-orange-600"
                            />
                            <BsInstagram
                                size={20}
                                className="transition-colors hover:text-orange-600"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
