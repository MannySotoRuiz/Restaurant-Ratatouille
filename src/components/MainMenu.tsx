"use client";

import { useState } from "react";
import { mainMenu } from "@/utils/menu";
import Image from "next/image";

const MainMenu = () => {
    const [activeTab, setActiveTab] = useState<string>("SALADS");
    const handleTabClick = (tab: string) => setActiveTab(tab);

    return (
        <div className="w-screen flex flex-col items-center justify-center">
            <div className="w-full xl:w-[1200px] px-[6%] sm:px-[8%] xl:px-0 flex flex-col justify-center items-center space-y-2  py-14 md:py-20">
                {/* page tabs */}
                <div className="flex flex-col justify-center items-center space-y-7 mb-10">
                    <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:flex md:items-center md:space-x-10">
                        <span
                            className={`inline-block text-[15px] font-medium cursor-pointer relative hover:text-orange-600 transition-all ${
                                activeTab === "SALADS"
                                    ? "activeMenuTab after:bg-orange-600"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("SALADS")}
                        >
                            SALADS
                        </span>
                        <span
                            className={`text-[15px] font-medium cursor-pointer relative hover:text-orange-600 transition-all ${
                                activeTab === "MEAT APPETIZER"
                                    ? "activeMenuTab after:bg-orange-600"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("MEAT APPETIZER")}
                        >
                            MEAT APPETIZER
                        </span>
                        <span
                            className={`text-[15px] font-medium cursor-pointer relative hover:text-orange-600 transition-all ${
                                activeTab === "FISH APPETIZER"
                                    ? "activeMenuTab after:bg-orange-600"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("FISH APPETIZER")}
                        >
                            FISH APPETIZER
                        </span>
                        <span
                            className={`text-[15px] font-medium cursor-pointer relative hover:text-orange-600 transition-all ${
                                activeTab === "MEAT MAIN"
                                    ? "activeMenuTab after:bg-orange-600"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("MEAT MAIN")}
                        >
                            MEAT MAIN
                        </span>
                        <span
                            className={`text-[15px] font-medium cursor-pointer relative hover:text-orange-600 transition-all ${
                                activeTab === "SEAFOOD MAIN"
                                    ? "activeMenuTab after:bg-orange-600"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("SEAFOOD MAIN")}
                        >
                            SEAFOOD MAIN
                        </span>
                    </div>
                    <div className="grid grid-cols-1 space-y-5 md:space-y-0 md:flex md:items-center md:space-x-10">
                        <span
                            className={`text-[15px] font-medium cursor-pointer relative hover:text-orange-600 transition-all ${
                                activeTab === "SANDWICHES"
                                    ? "activeMenuTab after:bg-orange-600"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("SANDWICHES")}
                        >
                            SANDWICHES
                        </span>
                        <span
                            className={`text-[15px] font-medium cursor-pointer relative hover:text-orange-600 transition-all ${
                                activeTab === "DESSERTS"
                                    ? "activeMenuTab after:bg-orange-600"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("DESSERTS")}
                        >
                            DESSERTS
                        </span>
                        <span
                            className={`text-[15px] font-medium cursor-pointer relative hover:text-orange-600 transition-all ${
                                activeTab === "BEVERAGES"
                                    ? "activeMenuTab after:bg-orange-600"
                                    : ""
                            }`}
                            onClick={() => handleTabClick("BEVERAGES")}
                        >
                            BEVERAGES
                        </span>
                    </div>
                </div>
                {/* end of menu tabs */}

                {/* salads */}
                {activeTab === "SALADS" && (
                    <div className="w-full md:px-[5%] xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                        {mainMenu["SALADS"].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                            >
                                <div className="flex w-full items-center">
                                    <span className="text-[20px] lg:text-[24px] flex-1 title">
                                        {item.name}
                                    </span>
                                    <span className="text-[18px] lg:text-[20px]">
                                        {item.price}
                                    </span>
                                </div>
                                {item.description.length > 0 && (
                                    <p className="text-[16px] text-gray-500 mt-2">
                                        {item?.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* meat appetizer */}
                {activeTab === "MEAT APPETIZER" && (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                        {mainMenu["MEAT APPETIZER"].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                            >
                                <div className="flex w-full items-center">
                                    <span className="text-[20px] lg:text-[24px] flex-1 title">
                                        {item.name}
                                    </span>
                                    <span className="text-[18px] lg:text-[20px]">
                                        {item.price}
                                    </span>
                                </div>
                                {item.description.length > 0 && (
                                    <p className="text-[16px] text-gray-500 mt-2">
                                        {item?.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* fish appetizer */}
                {activeTab === "FISH APPETIZER" && (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                        {mainMenu["FISH APPETIZER"].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                            >
                                <div className="flex w-full items-center">
                                    <span className="text-[20px] lg:text-[24px] flex-1 title">
                                        {item.name}
                                    </span>
                                    <span className="text-[18px] lg:text-[20px]">
                                        {item.price}
                                    </span>
                                </div>
                                {item.description.length > 0 && (
                                    <p className="text-[16px] text-gray-500 mt-2">
                                        {item?.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* meat main */}
                {activeTab === "MEAT MAIN" && (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                        {mainMenu["MEAT MAIN"].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                            >
                                <div className="flex w-full items-center">
                                    <span className="text-[20px] lg:text-[24px] flex-1 title">
                                        {item.name}
                                    </span>
                                    <span className="text-[18px] lg:text-[20px]">
                                        {item.price}
                                    </span>
                                </div>
                                {item.description.length > 0 && (
                                    <p className="text-[16px] text-gray-500 mt-2">
                                        {item?.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* seafood main */}
                {activeTab === "SEAFOOD MAIN" && (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                        {mainMenu["SEAFOOD MAIN"].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                            >
                                <div className="flex w-full items-center">
                                    <span className="text-[20px] lg:text-[24px] flex-1 title">
                                        {item.name}
                                    </span>
                                    <span className="text-[18px] lg:text-[20px]">
                                        {item.price}
                                    </span>
                                </div>
                                {item.description.length > 0 && (
                                    <p className="text-[16px] text-gray-500 mt-2">
                                        {item?.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* sandwiches */}
                {activeTab === "SANDWICHES" && (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                        {mainMenu["SANDWICHES"].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                            >
                                <div className="flex w-full items-center">
                                    <span className="text-[20px] lg:text-[24px] flex-1 title">
                                        {item.name}
                                    </span>
                                    <span className="text-[18px] lg:text-[20px]">
                                        {item.price}
                                    </span>
                                </div>
                                {item.description.length > 0 && (
                                    <p className="text-[16px] text-gray-500 mt-2">
                                        {item?.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* desserts */}
                {activeTab === "DESSERTS" && (
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                        {mainMenu["DESSERTS"].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="w-full flex flex-col justify-center pb-4 mt-5 border-b border-gray-200"
                            >
                                <div className="flex w-full items-center">
                                    <span className="text-[20px] lg:text-[24px] flex-1 title">
                                        {item.name}
                                    </span>
                                    <span className="text-[18px] lg:text-[20px]">
                                        {item.price}
                                    </span>
                                </div>
                                {item.description.length > 0 && (
                                    <p className="text-[16px] text-gray-500 mt-2">
                                        {item?.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* beverages */}
                {activeTab === "BEVERAGES" && (
                    <>
                        {mainMenu.BEVERAGES.types.map((type, idx) => (
                            <div
                                key={idx}
                                className={`w-full flex flex-col items-center justify-center ${
                                    idx === 3 ? "mb-0" : "pb-20"
                                }`}
                            >
                                <h6 className="text-[13px] text-orange-600 font-semibold mb-8">
                                    {type.title}
                                </h6>
                                {type.description && (
                                    <p className="text-[18px] text-[#363636] mb-4">
                                        {type.description}
                                    </p>
                                )}
                                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-20">
                                    {type.items.map((item, idx) => (
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
                                                    className="mr-4 w-[60px] h-[60px] lg:w-[72px] lg:h-[72px]"
                                                />
                                                <span className="text-[20px] lg:text-[24px] flex-1 title">
                                                    {item.name}
                                                </span>
                                                <span className="text-[18px] lg:text-[20px]">
                                                    {item.price}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default MainMenu;
