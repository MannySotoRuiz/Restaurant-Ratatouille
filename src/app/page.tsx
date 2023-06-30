import Hero from "@/components/Hero";
import Image from "next/image";
import {
    saladMenu,
    meatMenu,
    sandwichesMenu,
    recommendationMenu1,
    recommendationMenu2,
    recommendationMenu3,
} from "@/utils/data";
import BookATable from "@/components/BookATable";
import Link from "next/link";
import Recommendations from "@/components/Recommendations";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="w-screen flex items-center justify-center flex-col m-auto pb-20">
                {/* main body section */}
                <div className="w-full xl:w-[1200px] px-[6%] sm:px-[8%] xl:px-0 flex flex-col justify-center items-center space-y-2">
                    {/* announcement */}
                    <div className="w-full py-[50px] border-b-2 border-gray-200 flex flex-col justify-center items-center mb-5 text-center">
                        <p>
                            There is a 3.0% cash adjustment discount built into
                            all pricing.
                        </p>
                        <p>
                            Any purchase made with a credit/debit card will
                            receive a Non-Cash Adjustment and will be displayed
                            on your receipt.
                        </p>
                    </div>
                    {/* end of announcement */}

                    {/* about us */}
                    <div className="w-full">
                        <h4 className="text-[13px] xl:text-sm text-red-400 font-bold">
                            WELCOME TO
                        </h4>
                        <h2 className="text-[38px] xl:text-5xl font-medium title mt-1">
                            France Ratatouille
                        </h2>
                    </div>
                    <div className="w-full h-full xl:h-80vh grid grid-cols-1 md:grid-cols-[1.5fr,1fr] pt-4">
                        <div className="flex flex-col items-center justify-between w-full h-full md:pr-14 lg:pr-[90px] xl:pr-28">
                            <div className="mb-0 md:mb-10 xl:mb-0">
                                <p className="text-[18px] text-[#363636] mb-4">
                                    France Ratatouille is a stunning new
                                    restaurant that offers diners a unique and
                                    unforgettable dining experience. Located in
                                    a 1234 Avenue, New York, NY 01234, the
                                    restaurant boasts elegant and sophisticated
                                    dÃ©cor, with high ceilings, ornate details,
                                    and a warm and inviting atmosphere.{" "}
                                </p>
                                <p className="text-[18px] text-[#363636]">
                                    The menu features a range of delicious,
                                    seasonally inspired dishes, created using
                                    only the freshest and finest ingredients.{" "}
                                </p>

                                <Link href="menu">
                                    <button className="transition0-3s mt-10 md:mt-5 lg:mt-8 mb-12 sm:mb-10 xl:mb-16 px-[20px] py-[10px] w-32 inline-block bg-orange-600 text-white text-sm hover:-translate-y-[2px]">
                                        OUR MENU
                                    </button>
                                </Link>
                            </div>

                            <div className="w-full md:w-full h-[220px] lg:h-[350px] xl:h-[400px] relative">
                                <Image
                                    src="https://source.unsplash.com/FQWtCUiE4GM"
                                    alt="food"
                                    fill={true}
                                    className="transition0-3s rounded-xl object-cover shadow-lg shadow-black/50"
                                />
                            </div>
                        </div>
                        <div className="hidden md:flex w-full h-full flex-col-reverse">
                            <div className="w-full md:h-[420px] lg:h-[80%] xl:h-full relative">
                                <Image
                                    src="https://source.unsplash.com/t7jTtJ9iyUE"
                                    alt="food"
                                    fill={true}
                                    className="transition0-3s rounded-xl shadow-lg shadow-black/50"
                                />
                            </div>
                        </div>
                    </div>
                    {/* end of about us section */}

                    {/* featured menus section */}
                    <div className="pt-20 md:pt-28 pb-[30px] w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
                        {/* salads menu */}
                        <div className="w-full flex flex-col items-center">
                            {/* menu subtitle */}
                            <h4 className="text-orange-600 text-[13px] font-semibold">
                                REFRESHING HEALTHY OPTIONS
                            </h4>
                            {/* menu title */}
                            <h2 className="title text-[35px] mt-1 mb-4">
                                SALADS
                            </h2>

                            {/* menu items */}
                            {saladMenu.map((item, idx) => (
                                <div
                                    className="w-full mb-6"
                                    key={idx}
                                >
                                    {/* menu item title and price*/}
                                    <div className="flex items-center w-full mb-1">
                                        <h6 className="title text-[24px]">
                                            {item.title}
                                        </h6>
                                        <span className="flex-1 text-center border-b leading-[0.1em] mt-[15px] mb-[15px] mx-[10px]"></span>
                                        <h3 className="text-[20px]">
                                            {item.price}
                                        </h3>
                                    </div>
                                    {/* menu item description */}
                                    <p className="text-gray-400 text-[16px]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Main Meat Menu */}
                        <div className="w-full flex flex-col items-center">
                            {/* menu subtitle */}
                            <h4 className="text-orange-600 text-[13px] font-semibold">
                                TOP RATED DISHES
                            </h4>
                            {/* menu title */}
                            <h2 className="title text-[35px] mt-1 mb-4">
                                MEAT MAIN
                            </h2>

                            {/* menu items */}
                            {meatMenu.map((item, idx) => (
                                <div
                                    className="w-full mb-6"
                                    key={idx}
                                >
                                    {/* menu item title and price*/}
                                    <div className="flex items-center w-full mb-1">
                                        <h6 className="title text-[24px]">
                                            {item.title}
                                        </h6>
                                        <span className="flex-1 text-center border-b leading-[0.1em] mt-[15px] mb-[15px] mx-[10px]"></span>
                                        <h3 className="text-[20px]">
                                            {item.price}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* sandwhiches */}
                        <div className="w-full flex flex-col items-center">
                            {/* menu subtitle */}
                            <h4 className="text-orange-600 text-[13px] font-semibold">
                                FINGER FOODS
                            </h4>
                            {/* menu title */}
                            <h2 className="title text-[35px] mt-1 mb-4">
                                SANDWICHES
                            </h2>

                            {/* menu items */}
                            {sandwichesMenu.map((item, idx) => (
                                <div
                                    className="w-full mb-6"
                                    key={idx}
                                >
                                    {/* menu item title and price*/}
                                    <div className="flex items-center w-full mb-1">
                                        <h6 className="title text-[24px]">
                                            {item.title}
                                        </h6>
                                        <span className="flex-1 text-center border-b leading-[0.1em] mt-[15px] mb-[15px] mx-[10px]"></span>
                                        <h3 className="text-[20px]">
                                            {item.price}
                                        </h3>
                                    </div>
                                    {/* menu item description */}
                                    <p className="text-gray-400 text-[16px]">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* end of featured menu section */}
                    <div className="w-full flex justify-center items-center space-x-4">
                        <Link href="brunch-menu">
                            <button className="transition0-3s border-2 border-black px-[30px] py-[10px] font-medium text-[13px] hover:bg-black hover:text-white hover:-translate-y-[2px]">
                                BROWSE BRUNCH MENU
                            </button>
                        </Link>
                        <Link href="menu">
                            <button className="transition0-3s border-2 border-black px-[30px] py-[10px] font-medium text-[13px] hover:bg-black hover:text-white hover:-translate-y-[2px]">
                                BROWSE MAIN MENU
                            </button>
                        </Link>
                    </div>
                </div>
                {/* end of main body section */}
            </div>

            <Recommendations />

            {/* our philosophy */}
            <section className="w-full flex items-center justify-center flex-col py-16 sm:py-20 px-[6%] sm:px-[8%] xl:px-0">
                <div className="w-full xl:border-none xl:w-[1200px] xl:px-10 grid grid-cols-1 xl:grid-cols-2 space-y-7 xl:space-y-0">
                    {/* left side */}
                    <div className="w-full h-50vh xl:h-full relative">
                        <div className="w-[70%] h-[60%] sm:w-1/2 sm:h-[80%] absolute bottom-0 left-0">
                            <Image
                                src="https://source.unsplash.com/W7yjuNoAe74"
                                alt="chef"
                                fill={true}
                                className="rounded-xl object-cover shadow-lg shadow-black/50"
                            />
                        </div>
                        <div className="w-[70%] h-[60%] sm:w-8/12 sm:h-[90%] absolute top-0 right-0 z-20">
                            <Image
                                src="https://source.unsplash.com/eBmyH7oO5wY"
                                alt="chef"
                                fill={true}
                                className="rounded-xl object-cover shadow-lg shadow-black/50"
                            />
                        </div>
                    </div>
                    {/* right side */}
                    <div className="w-full h-full xl:pl-16 flex flex-col justify-center space-y-5">
                        {/* subtitle */}
                        <h6 className="text-[16px] xl:text-[18px] font-medium text-orange-600">
                            COMMUNITY & BALANCE
                        </h6>
                        {/* title */}
                        <h2 className="title text-[32px] xl:text-[50px] leading-[50px] font-light">
                            OUR FOOD PHILOSOPHY
                        </h2>
                        {/* description */}
                        <p className="text-lg">
                            At France Ratatouille, we believe in creating a
                            culinary experience that nourishes both the body and
                            the soul. Our philosophy is centered around the
                            following principles:
                        </p>
                        <ol className="list-decimal pl-8 text-lg space-y-6">
                            <li>
                                Community – Food has the power to bring people
                                together, and we believe in using our platform
                                to foster a sense of community. Whether it’s
                                through hosting events or simply creating a
                                welcoming atmosphere in our restaurant, we are
                                dedicated to creating a space where people can
                                come together and enjoy a meal in good company.
                            </li>
                            <li>
                                Health and Wellness – We believe that food can
                                have a profound impact on our health and
                                well-being. Our menu features a variety of
                                nutritious options that are designed to nourish
                                the body and promote overall health and
                                wellness.
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
            <BookATable />
        </main>
    );
}
