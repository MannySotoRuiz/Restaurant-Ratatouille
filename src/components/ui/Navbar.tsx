"use client";

import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";

const Navbar = ({ activeTab }: { activeTab: string }) => {
    const [opendDropdownMenu, setOpenDropdownMenu] = useState<boolean>(false);

    return (
        <div className="w-full 2xl:w-[1400px] flex items-center justify-between px-[10%] lg:px-[6%] 2xl:px-[40px] text-white text-[14px] py-[50px]">
            <div>Logo</div>

            <Sidebar activeTab={activeTab} />

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
