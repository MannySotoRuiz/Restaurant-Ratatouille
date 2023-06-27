"use client";

import { FC, useState } from "react";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/utils/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const FormSchema = z.object({
    date: z.date({
        required_error: "A date is required.",
    }),
    time: z.string({
        required_error: "A time is required.",
    }),
    partySize: z.string({
        required_error: "A party size is required.",
    }),
});

const BookATable = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log("submitted", data);
    }
    return (
        <div className="bookTableSection w-full">
            <div className="w-full h-full bg-[rgba(0,0,0,0.7)] py-[100px] flex items-center justify-center">
                <div className="w-[1000px] flex flex-col items-center justify-center">
                    <div className="flex space-x-3">
                        <span className="w-20 text-center border-b border-orange-600 leading-[0.1em] mt-[15px] mb-[15px] mx-[10px]"></span>
                        <h6 className="text-[18px] font- text-orange-600">
                            ONLINE RESERVATION
                        </h6>
                        <span className="w-20 text-center border-b border-orange-600 leading-[0.1em] mt-[15px] mb-[15px] mx-[10px]"></span>
                    </div>
                    <h1 className="title text-[66px] font-light text-white mb-5">
                        BOOK A TABLE
                    </h1>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="w-full min-h-[80px] grid grid-cols-4"
                        >
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <div className="bg-white w-full flex rounded-tl-lg rounded-bl-lg border-r">
                                        <FormItem className="flex flex-col w-full py-2 px-4">
                                            <FormLabel className="text-gray-700">
                                                Date
                                            </FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full pl-3 text-left font-normal",
                                                                !date &&
                                                                    "text-muted-foreground"
                                                            )}
                                                        >
                                                            {date ? (
                                                                format(
                                                                    date,
                                                                    "PPP"
                                                                )
                                                            ) : (
                                                                <span>
                                                                    Pick a date
                                                                </span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent
                                                    className="w-auto p-0"
                                                    align="start"
                                                >
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        disabled={(date) =>
                                                            date < new Date()
                                                        }
                                                        initialFocus
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                            {/* <FormDescription>
                                            Your date of birth is used to
                                            calculate your age.
                                        </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                        {/* <Separator orientation="vertical" /> */}
                                    </div>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="time"
                                render={({ field }) => (
                                    <>
                                        <FormItem className="flex flex-col w-full bg-white py-2 px-4 border-r">
                                            <FormLabel className="text-gray-700">
                                                Time
                                            </FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a time" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="12:00pm">
                                                        12:00pm
                                                    </SelectItem>
                                                    <SelectItem value="12:30pm">
                                                        12:30pm
                                                    </SelectItem>
                                                    <SelectItem value="1:00pm">
                                                        1:00pm
                                                    </SelectItem>
                                                    <SelectItem value="1:30pm">
                                                        1:30pm
                                                    </SelectItem>
                                                    <SelectItem value="2:00pm">
                                                        2:00pm
                                                    </SelectItem>
                                                    <SelectItem value="2:30pm">
                                                        2:30pm
                                                    </SelectItem>
                                                    <SelectItem value="3:00pm">
                                                        3:00pm
                                                    </SelectItem>
                                                    <SelectItem value="3:30pm">
                                                        3:30pm
                                                    </SelectItem>
                                                    <SelectItem value="4:00pm">
                                                        4:00pm
                                                    </SelectItem>
                                                    <SelectItem value="4:30pm">
                                                        4:30pm
                                                    </SelectItem>
                                                    <SelectItem value="5:00pm">
                                                        5:00pm
                                                    </SelectItem>
                                                    <SelectItem value="5:30pm">
                                                        5:30pm
                                                    </SelectItem>
                                                    <SelectItem value="6:00pm">
                                                        6:00pm
                                                    </SelectItem>
                                                    <SelectItem value="6:30pm">
                                                        6:30pm
                                                    </SelectItem>
                                                    <SelectItem value="7:00pm">
                                                        7:00pm
                                                    </SelectItem>
                                                    <SelectItem value="7:30pm">
                                                        7:30pm
                                                    </SelectItem>
                                                    <SelectItem value="8:00pm">
                                                        8:00pm
                                                    </SelectItem>
                                                    <SelectItem value="8:30pm">
                                                        8:30pm
                                                    </SelectItem>
                                                    <SelectItem value="9:00pm">
                                                        9:00pm
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            {/* <FormDescription>
                                            Your date of birth is used to
                                            calculate your age.
                                        </FormDescription> */}
                                            <FormMessage />
                                        </FormItem>
                                        {/* <Separator orientation="vertical" /> */}
                                    </>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="partySize"
                                render={({ field }) => (
                                    <>
                                        <FormItem className="flex flex-col w-full bg-white py-2 px-4">
                                            <FormLabel className="text-gray-700">
                                                Party size
                                            </FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a time" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="1">
                                                        1 person
                                                    </SelectItem>
                                                    <SelectItem value="2">
                                                        2 people
                                                    </SelectItem>
                                                    <SelectItem value="3">
                                                        3 people
                                                    </SelectItem>
                                                    <SelectItem value="4">
                                                        4 people
                                                    </SelectItem>
                                                    <SelectItem value="5">
                                                        5 people
                                                    </SelectItem>
                                                    <SelectItem value="6">
                                                        6 people
                                                    </SelectItem>
                                                    <SelectItem value="7">
                                                        7 people
                                                    </SelectItem>
                                                    <SelectItem value="8">
                                                        8+ people
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                        {/* <Separator orientation="vertical" /> */}
                                    </>
                                )}
                            />
                            <button
                                type="submit"
                                className="w-full h-full bg-orange-600 text-white text-[18px] font-normal rounded-tr-lg rounded-br-lg"
                            >
                                Reserve now
                            </button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default BookATable;
