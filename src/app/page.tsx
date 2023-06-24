import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* about us section */}
      <div className="w-full flex items-center justify-center flex-col m-auto pb-20">
        <div className="tablet:w-11/12 laptop:w-[1000px] desktop:w-[1200px] laptop:px-10 flex flex-col justify-center items-center space-y-2">
          {/* announcement */}
          <div className="w-full py-[50px] border-b-2 border-gray-200 flex flex-col justify-center items-center">
            <p>
              There is a 3.0% cash adjustment discount built into all pricing.
            </p>
            <p>
              Any purchase made with a credit/debit card will receive a Non-Cash
              Adjustment and will be displayed on your receipt.
            </p>
          </div>
          {/* end of announcement */}

          {/* about us */}
          <div className="w-full">
            <h4 className="text-sm text-red-400 font-bold">WELCOME TO</h4>
            <h2 className="text-5xl font-medium title">France Ratatouille</h2>
          </div>
          <div className="w-full flex">
            {/* left side */}
            <div className="w-7/12 h-full flex flex-col gap-2 pt-4 pr-[80px]">
              <p className="text-[17px]">
                France Ratatouille is a stunning new restaurant that offers
                diners a unique and unforgettable dining experience. Located in
                a 1234 Avenue, New York, NY 01234, the restaurant boasts elegant
                and sophisticated décor, with high ceilings, ornate details, and
                a warm and inviting atmosphere.{" "}
              </p>
              <p className="text-[17px]">
                The menu features a range of delicious, seasonally inspired
                dishes, created using only the freshest and finest ingredients.{" "}
              </p>

              <button className=" mt-6 mb-16 px-[20px] py-[10px] w-32 inline-block bg-orange-600 text-white text-sm">
                OUR MENU
              </button>

              <div className="w-full h-[400px] relative">
                <Image
                  // src={"https://source.unsplash.com/t7jTtJ9iyUE"}
                  src={"https://source.unsplash.com/FQWtCUiE4GM"}
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
                  src={"https://source.unsplash.com/t7jTtJ9iyUE"}
                  alt="food"
                  fill={true}
                  className="rounded-xl shadow-2xl shadow-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of about us */}
      {/* featured menus */}
    </main>
  );
}
