import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { brunchMenu } from "@/utils/menu";

const page = () => {
    return (
        <div>
            {/* header */}
            <div className="w-full h-[470px] md:h-[490px] lg:h-[590px] brunchMenu-page">
                {/* background image */}
                <Image
                    src="https://www.yaffanyc.com/wp-content/uploads/2023/02/brunch-menu-hero-image.jpg"
                    alt="Brunch Menu Header"
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

                    {/* navbar */}
                    <div className="w-full 2xl:w-[1400px] flex items-center justify-between px-[10%] lg:px-[6%] 2xl:px-[40px] text-white text-[14px] py-[50px]">
                        <div>Logo</div>
                        <div className="hidden lg:flex items-center space-x-8">
                            {/* <h2 className="border-b-2 border-orange-500 pb-1 cursor-pointer">
                                HOME
                            </h2> */}
                            <Link
                                href="/"
                                className="pb-2 cursor-pointer navbar-link after:bg-orange-500"
                            >
                                HOME
                            </Link>
                            <div>
                                <Link
                                    href="brunch-menu"
                                    className="border-b-2 border-orange-500 pb-1"
                                >
                                    MENU
                                </Link>
                            </div>
                            <Link
                                href="brunch-menu"
                                className="pb-2 cursor-pointer navbar-link after:bg-orange-500"
                            >
                                ABOUT
                            </Link>
                            <Link
                                href="brunch-menu"
                                className="pb-2 cursor-pointer navbar-link after:bg-orange-500"
                            >
                                GALLERY
                            </Link>
                            <Link
                                href="brunch-menu"
                                className="pb-2 cursor-pointer navbar-link after:bg-orange-500"
                            >
                                EVENTS
                            </Link>
                            <Link
                                href="brunch-menu"
                                className="pb-2 cursor-pointer navbar-link after:bg-orange-500"
                            >
                                BLOG
                            </Link>
                            <Link
                                href="brunch-menu"
                                className="pb-2 cursor-pointer navbar-link after:bg-orange-500"
                            >
                                CONTACT
                            </Link>
                            <button className="border-2 border-white px-[20px] py-[10px] cursor-pointer mb-2 hover:bg-white hover:text-black transition">
                                MAKE A RESERVATION
                            </button>
                        </div>
                    </div>
                    {/* end of navbar */}

                    {/* titles */}
                    <div className="flex-1 mb-20 w-full flex flex-col items-center justify-center gap-6 text-white hero-welcome">
                        <h2 className="font-medium text-[14px] md:text-xl">
                            WELCOME TO FRANCE
                        </h2>
                        <h1 className="text-[42px] md:text-[60px] lg:text-7xl font-semibold title">
                            RATATOUILLE
                        </h1>
                    </div>
                </div>
            </div>
            {/* end of header */}

            {/* body content */}
            <div className="w-screen flex flex-col items-center justify-center">
                <div className="w-full xl:w-[1200px] px-[6%] sm:px-[8%] xl:px-0 flex flex-col justify-center items-center space-y-2 py-20">
                    {/* brunch hours */}
                    <div className="w-full flex flex-col items-center justify-center">
                        {/* title */}
                        <h5 className="text-orange-600 text-[20px] font-semibold mb-10">
                            {brunchMenu.brunch.title}
                        </h5>
                        {/* items */}
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                            {brunchMenu.brunch.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                                >
                                    <div className="flex w-full items-center">
                                        <span className="text-[24px] flex-1 title">
                                            {item.name}
                                        </span>
                                        <span className="text-[20px]">
                                            {item.price}
                                        </span>
                                    </div>
                                    {item.description && (
                                        <p className="text-[16px] text-gray-500 mt-2">
                                            {item?.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* sandwhiches */}
                    <div className="w-full flex flex-col items-center justify-center">
                        {/* title */}
                        <h5 className="text-orange-600 text-[20px] font-semibold mb-10 mt-20">
                            {brunchMenu.sandwiches.title}
                        </h5>
                        {/* items */}
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                            {brunchMenu.sandwiches.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                                >
                                    <div className="flex w-full items-center">
                                        <span className="text-[24px] flex-1 title">
                                            {item.name}
                                        </span>
                                        <span className="text-[20px]">
                                            {item.price}
                                        </span>
                                    </div>
                                    {/* {item.description && (
                                        <p className="text-[16px] text-gray-500 mt-2">
                                            {item?.description}
                                        </p>
                                    )} */}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* beverages */}
                    <div className="w-full flex flex-col items-center justify-center">
                        {/* title */}
                        <h5 className="text-orange-600 text-[20px] font-semibold mb-10 mt-20">
                            {brunchMenu.beverages.title}
                        </h5>
                        {/* items */}
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                            {brunchMenu.beverages.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                                >
                                    <div className="flex w-full items-center">
                                        <Image
                                            src={item.image}
                                            alt={`${item.name} image`}
                                            width={72}
                                            height={72}
                                            className="mr-4"
                                        />
                                        <span className="text-[24px] flex-1 title">
                                            {item.name}
                                        </span>
                                        <span className="text-[20px]">
                                            {item.price}
                                        </span>
                                    </div>
                                    {/* {item.description && (
                                        <p className="text-[16px] text-gray-500 mt-2">
                                            {item?.description}
                                        </p>
                                    )} */}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* draftSpecials */}
                    <div className="w-full flex flex-col items-center justify-center">
                        {/* title */}
                        <h5 className="text-orange-600 text-[20px] font-semibold mb-10 mt-20">
                            {brunchMenu.draftSpecials.title}
                        </h5>
                        {/* items */}
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                            {brunchMenu.draftSpecials.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                                >
                                    <div className="flex w-full items-center">
                                        <Image
                                            src={item.image}
                                            alt={`${item.name} image`}
                                            width={72}
                                            height={72}
                                        />
                                        <span className="text-[24px] flex-1 title">
                                            {item.name}
                                        </span>
                                        <span className="text-[20px]">
                                            {item.price}
                                        </span>
                                    </div>
                                    {/* {item.description && (
                                        <p className="text-[16px] text-gray-500 mt-2">
                                            {item?.description}
                                        </p>
                                    )} */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
