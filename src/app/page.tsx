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

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="w-full flex items-center justify-center flex-col m-auto pb-20">
                {/* main body section */}
                <div className="tablet:w-11/12 laptop:w-[1000px] desktop:w-[1200px] laptop:px-10 flex flex-col justify-center items-center space-y-2">
                    {/* announcement */}
                    <div className="w-full py-[50px] border-b-2 border-gray-200 flex flex-col justify-center items-center mb-5">
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
                        <h4 className="text-sm text-red-400 font-bold">
                            WELCOME TO
                        </h4>
                        <h2 className="text-5xl font-medium title">
                            France Ratatouille
                        </h2>
                    </div>
                    <div className="w-full flex mb-20">
                        {/* left side */}
                        <div className="w-7/12 h-full flex flex-col gap-2 pt-4 pr-[80px]">
                            <p className="text-[17px]">
                                France Ratatouille is a stunning new restaurant
                                that offers diners a unique and unforgettable
                                dining experience. Located in a 1234 Avenue, New
                                York, NY 01234, the restaurant boasts elegant
                                and sophisticated décor, with high ceilings,
                                ornate details, and a warm and inviting
                                atmosphere.{" "}
                            </p>
                            <p className="text-[17px]">
                                The menu features a range of delicious,
                                seasonally inspired dishes, created using only
                                the freshest and finest ingredients.{" "}
                            </p>

                            <button className=" mt-6 mb-16 px-[20px] py-[10px] w-32 inline-block bg-orange-600 text-white text-sm hover:-translate-y-[2px] transition-all">
                                OUR MENU
                            </button>

                            <div className="w-full h-[400px] relative">
                                <Image
                                    // src={"https://source.unsplash.com/t7jTtJ9iyUE"}
                                    src={
                                        "https://source.unsplash.com/FQWtCUiE4GM"
                                    }
                                    alt="food"
                                    fill={true}
                                    className="rounded-xl shadow-2xl shadow-black"
                                />
                            </div>
                        </div>
                        {/* right side */}
                        <div className="w-5/12 h-full pt-[14px]">
                            <div className="w-full h-[707px] relative">
                                <Image
                                    src={
                                        "https://source.unsplash.com/t7jTtJ9iyUE"
                                    }
                                    alt="food"
                                    fill={true}
                                    className="rounded-xl shadow-2xl shadow-black"
                                />
                            </div>
                        </div>
                    </div>
                    {/* end of about us section */}

                    {/* featured menus section */}
                    <div className="pt-28 pb-[30px] w-full grid grid-cols-3 gap-8">
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
                        <button className="border-2 border-black px-[30px] py-[10px] font-medium text-[13px] hover:bg-black hover:text-white hover:-translate-y-[2px] transition-all">
                            BROWSE BRUNCH MENU
                        </button>
                        <button className="border-2 border-black px-[30px] py-[10px] font-medium text-[13px] hover:bg-black hover:text-white hover:-translate-y-[2px] transition-all">
                            BROWSE MAIN MENU
                        </button>
                    </div>
                </div>
                {/* end of main body section */}
            </div>

            {/* recommendations */}
            <section className="w-full flex">
                <div className="w-2/5 h-[833px] relative recommendation-menu">
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
                        <h2 className="title text-[50px] font-light">
                            {recommendationMenu1.title}
                        </h2>
                        {/* description */}
                        <p className="text-[20px] font-medium">
                            {recommendationMenu1.description}
                        </p>
                    </div>
                </div>
                <div className="w-2/5 h-[833px] relative recommendation-menu">
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
                        <h2 className="title text-[50px] font-light">
                            {recommendationMenu2.title}
                        </h2>
                        {/* description */}
                        <p className="text-[20px] font-medium">
                            {recommendationMenu2.description}
                        </p>
                    </div>
                </div>
                <div className="w-1/5 h-[833px] relative recommendation-menu">
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
                        <h2 className="title text-[40px] font-light">
                            {recommendationMenu3.title}
                        </h2>
                        {/* description */}
                        <p className="text-[20px] font-medium">
                            {recommendationMenu3.description}
                        </p>
                    </div>
                </div>
            </section>
            {/* our philosophy */}
            <section className="w-full flex items-center justify-center flex-col m-auto py-20">
                <div className="tablet:w-11/12 laptop:w-[1000px] desktop:w-[1200px] laptop:px-10 grid grid-cols-2">
                    {/* left side */}
                    <div className="w-full h-full relative">
                        <div className="w-1/2 h-[70%] absolute bottom-0 left-0">
                            <Image
                                src="https://source.unsplash.com/W7yjuNoAe74"
                                alt="chef"
                                fill={true}
                                className="rounded-xl object-cover shadow-lg shadow-black/50"
                            />
                        </div>
                        <div className="w-8/12 h-[90%] absolute top-0 right-0 z-20">
                            <Image
                                src="https://source.unsplash.com/eBmyH7oO5wY"
                                alt="chef"
                                fill={true}
                                className="rounded-xl object-cover shadow-lg shadow-black/50"
                            />
                        </div>
                    </div>
                    {/* right side */}
                    <div className="w-full h-full pl-16 flex flex-col justify-center space-y-5">
                        {/* subtitle */}
                        <h6 className="text-[18px] font-medium text-orange-600">
                            COMMUNITY & BALANCE
                        </h6>
                        {/* title */}
                        <h2 className="title text-[50px] leading-[50px] font-light">
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
