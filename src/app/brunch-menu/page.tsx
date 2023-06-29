import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { brunchMenu } from "@/utils/menu";
import Navbar from "@/components/ui/Navbar";
import Header from "@/components/ui/Header";

const page = () => {
    return (
        <div>
            <Header
                image="https://www.yaffanyc.com/wp-content/uploads/2023/02/brunch-menu-hero-image.jpg"
                title="Brunch Menu"
                activeTab="menu"
            />

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
