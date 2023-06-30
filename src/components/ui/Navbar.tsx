"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { ChevronRight, X } from "lucide-react";

const Navbar = ({ activeTab }: { activeTab: string }) => {
    const [opendDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);
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
        <div className="w-full 2xl:w-[1400px] flex items-center justify-between px-[10%] lg:px-[6%] 2xl:px-[40px] text-white text-[14px] py-[50px]">
            <div>Logo</div>

            {/* burger menu */}
            <div className="lg:hidden">
                <RxHamburgerMenu
                    size={30}
                    onClick={handleMobileMenuClick}
                />
                {/* slide in menu from right to left */}
                {openMobileMenu && (
                    <div className="bg-black w-90vw min-h-screen absolute top-0 right-0 transition0-3s flex flex-col items-center animate-slideLeftToRight z-30 overflow-y-auto">
                        <div className="border-b border-gray-300 w-full h-40 mb-12 relative">
                            <div
                                className="absolute top-8 right-8"
                                onClick={handleMobileMenuClick}
                            >
                                <X size={30} />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 text-white text-[24px] pb-10 w-full px-[8%] font-medium">
                            <Link
                                href="/"
                                className="text-orange-600"
                            >
                                Home
                            </Link>
                            <div className="w-full flex flex-col items-center">
                                <div className="w-full flex items-center">
                                    <Link
                                        href="menu"
                                        className="flex-1"
                                    >
                                        Menu
                                    </Link>

                                    <ChevronRight
                                        className={`transition0-3s ${
                                            openExpandedMenu
                                                ? "navbar-icon-rotate90"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setOpenExpandedMenu(
                                                !openExpandedMenu
                                            )
                                        }
                                    />
                                </div>
                                {openExpandedMenu && (
                                    <div className="transition0-3s w-full pl-[12%] flex flex-col space-y-4 text-[16px] pt-3 pb-5">
                                        <Link href="brunch-menu">
                                            Brunch Menu
                                        </Link>
                                        <Link href="menu">Main Menu</Link>
                                    </div>
                                )}
                            </div>
                            <Link href="about">About</Link>
                            <Link href="gallery">Gallery</Link>
                            <Link href="events">Events</Link>
                            <Link href="blog">Blog</Link>
                            <Link href="contact">Contact</Link>
                            <button className="text-left mb-5">
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
                        </div>
                    </div>
                )}
            </div>

            <div className="hidden lg:flex items-center space-x-8">
                <Link
                    href="/"
                    className={`${
                        activeTab === "home"
                            ? "border-b-2 border-orange-600 pb-1"
                            : "pb-1 navbar-link after:bg-orange-600"
                    }`}
                >
                    HOME
                </Link>
                <div
                    className="flex space-x-2 relative"
                    onMouseOver={() => setOpenDropdownMenu(true)}
                    onMouseOut={() => setOpenDropdownMenu(false)}
                >
                    <h3
                        className={`${
                            activeTab === "menu"
                                ? "cursor-pointer border-b-2 border-orange-600 pb-1"
                                : "cursor-pointer pb-2 navbar-link after:bg-orange-600"
                        }`}
                    >
                        MENU
                    </h3>
                    <svg
                        className={`w-4 h-4 ml-2 transition0-3s ${
                            opendDropdownMenu ? "navbar-icon-rotate" : ""
                        }`}
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        ></path>
                    </svg>
                    {opendDropdownMenu && (
                        <div className="bg-indigo-900 absolute -bottom-[110px] -left-[10px] p-6 w-[160px] flex flex-col space-y-5 animate-slideUp">
                            <Link
                                href="brunch-menu"
                                className="navbar-link after:h-[1px] after:bg-orange-500"
                            >
                                Brunch Menu
                            </Link>
                            <Link
                                href="menu"
                                className="navbar-link after:h-[1px] after:bg-orange-500"
                            >
                                Main Menu
                            </Link>
                        </div>
                    )}
                </div>
                <Link
                    href="about"
                    className={`${
                        activeTab === "about"
                            ? "border-b-2 border-orange-600 pb-1"
                            : "pb-2 navbar-link after:bg-orange-600"
                    }`}
                >
                    ABOUT
                </Link>
                <Link
                    href="gallery"
                    className={`${
                        activeTab === "gallery"
                            ? "border-b-2 border-orange-600 pb-1"
                            : "pb-2 navbar-link after:bg-orange-600"
                    }`}
                >
                    GALLERY
                </Link>
                <Link
                    href="events"
                    className={`${
                        activeTab === "events"
                            ? "border-b-2 border-orange-600 pb-1"
                            : "pb-2 navbar-link after:bg-orange-600"
                    }`}
                >
                    EVENTS
                </Link>
                <Link
                    href="blog"
                    className={`${
                        activeTab === "blog"
                            ? "border-b-2 border-orange-600 pb-1"
                            : "pb-2 navbar-link after:bg-orange-600"
                    }`}
                >
                    BLOG
                </Link>
                <Link
                    href="contact"
                    className={`${
                        activeTab === "contact"
                            ? "border-b-2 border-orange-600 pb-1"
                            : "pb-2 navbar-link after:bg-orange-600"
                    }`}
                >
                    CONTACT
                </Link>
                <button className="transition0-3s border-2 border-white px-[20px] py-[10px] cursor-pointer mb-2 hover:bg-white hover:text-black transition">
                    MAKE A RESERVATION
                </button>
            </div>
        </div>
    );
};

export default Navbar;
