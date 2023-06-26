"use client";

import { FC } from "react";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

interface BookATableProps {}

const BookATable: FC<BookATableProps> = ({}) => {
    return (
        <div className="bookTableSection w-full">
            <div className="w-full h-full bg-[rgba(0,0,0,0.7)] py-28 flex items-center justify-center">
                <div className="w-[1000px] border-black flex flex-col items-center justify-center">
                    <h6 className="text-[18px] font-semibold text-orange-600">
                        ONLINE RESERVATION
                    </h6>
                    <h1 className="title text-[66px] font-light text-white mb-5">
                        BOOK A TABLE
                    </h1>
                    <div className="w-full h-20 grid grid-cols-4">
                        <div className="border border-white w-full h-full"></div>
                        <div className="border border-white w-full h-full"></div>
                        <div className="border border-white w-full h-full"></div>
                        <div className="border border-white w-full h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookATable;
