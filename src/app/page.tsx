import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
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

          {/* welcome to */}
          <div className="w-full border border-red-500 h-20 grid grid-cols-2 gap-8">
            <div className="w-full h-full border border-black"></div>
            <div className="w-full h-full border border-black"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
