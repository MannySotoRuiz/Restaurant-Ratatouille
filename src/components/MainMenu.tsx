"use client";

import { useState } from "react";

const MainMenu = () => {
    const [activeTab, setActiveTab] = useState<string>("");
    const handleTabClick = (tab: string) => setActiveTab(tab);

    return (
        <div className="w-screen flex flex-col items-center justify-center">
            <div className="w-full xl:w-[1200px] px-[6%] sm:px-[8%] xl:px-0 flex flex-col justify-center items-center space-y-2 py-20">
                {/* page tabs */}
                <div className="flex flex-col justify-center items-center space-y-7">
                    <div className="flex items-center space-x-10">
                        <span className="text-[15px] font-medium">SALADS</span>
                        <span className="text-[15px] font-medium">
                            MEAT APPETIZER
                        </span>
                        <span className="text-[15px] font-medium">
                            FISH APPETIZER
                        </span>
                        <span className="text-[15px] font-medium">
                            MEAT MAIN
                        </span>
                        <span className="text-[15px] font-medium">
                            SEAFOOD MAIN
                        </span>
                    </div>
                    <div className="flex items-center space-x-10">
                        <span className="text-[15px] font-medium">
                            SANDWICHES
                        </span>
                        <span className="text-[15px] font-medium">
                            DESSERTS
                        </span>
                        <span className="text-[15px] font-medium">
                            BEVERAGES
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
