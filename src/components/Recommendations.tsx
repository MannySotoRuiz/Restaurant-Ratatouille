"use client";

import Image from "next/image";
import React from "react";
import {
    recommendationMenu1,
    recommendationMenu2,
    recommendationMenu3,
} from "@/utils/data";
import { useRouter } from "next/navigation";

const Recommendations = () => {
    const router = useRouter();
    return (
        <section className="w-full flex flex-col sm:flex-row">
            <div
                onClick={() => router.push("/brunch-menu")}
                className="w-full sm:w-2/5 h-40vh sm:h-60vh lg:h-70vh xl:h-[833px] relative recommendation-menu"
            >
                <Image
                    src={recommendationMenu1.image}
                    alt={recommendationMenu1.title}
                    fill={true}
                    className="object-cover"
                />
                {/* info */}
                <div className="bg-[rgba(0,0,0,0.3)] w-full h-full text-white z-10 absolute flex flex-col-reverse space-y-1 p-8">
                    {/* menu link */}
                    <a
                        className="text-[13px] font-medium mt-2"
                        href={recommendationMenu1.menuLink}
                    >
                        <span className="border-b-2 border-orange-500 pb-1">
                            {recommendationMenu1.menuName}
                        </span>
                    </a>
                    {/* title */}
                    <h2 className="title text-[30px] lg:text-[40px] xl:text-[50px] font-light">
                        {recommendationMenu1.title}
                    </h2>
                    {/* description */}
                    <p className="text-[20px] font-medium">
                        {recommendationMenu1.description}
                    </p>
                </div>
            </div>
            <div
                onClick={() => router.push("/menu")}
                className="w-full sm:w-2/5 h-40vh sm:h-60vh lg:h-70vh xl:h-[833px] relative recommendation-menu"
            >
                <Image
                    src={recommendationMenu2.image}
                    alt={recommendationMenu2.title}
                    fill={true}
                    className="object-cover"
                />
                {/* info */}
                <div className="bg-[rgba(0,0,0,0.35)] w-full h-full text-white z-10 absolute flex flex-col-reverse space-y-2 p-8">
                    {/* menu link */}
                    <a
                        className="text-[13px] font-medium mt-2"
                        href={recommendationMenu2.menuLink}
                    >
                        <span className="border-b-2 border-orange-500 pb-1">
                            {recommendationMenu2.menuName}
                        </span>
                    </a>
                    {/* title */}
                    <h2 className="title text-[30px] lg:text-[40px] xl:text-[50px] font-light">
                        {recommendationMenu2.title}
                    </h2>
                    {/* description */}
                    <p className="text-[20px] font-medium">
                        {recommendationMenu2.description}
                    </p>
                </div>
            </div>
            <div
                onClick={() => router.push("/menu")}
                className="w-full sm:w-1/5 h-40vh sm:h-60vh lg:h-70vh xl:h-[833px] relative recommendation-menu"
            >
                <Image
                    src={recommendationMenu3.image}
                    alt={recommendationMenu3.title}
                    fill={true}
                    className="object-cover"
                />
                {/* info */}
                <div className="bg-[rgba(0,0,0,0.35)] w-full h-full text-white z-10 absolute flex flex-col-reverse items-end space-y-2 py-8 pr-6">
                    {/* menu link */}
                    <a
                        className="text-[13px] font-medium mt-2"
                        href={recommendationMenu3.menuLink}
                    >
                        <span className="border-b-2 border-orange-500 pb-1">
                            {recommendationMenu3.menuName}
                        </span>
                    </a>
                    {/* title */}
                    <h2 className="title text-[30px] lg:text-[40px] xl:text-[50px] font-light text-right">
                        {recommendationMenu3.title}
                    </h2>
                    {/* description */}
                    <p className="text-[20px] font-medium">
                        {recommendationMenu3.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Recommendations;
