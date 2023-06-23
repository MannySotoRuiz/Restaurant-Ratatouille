import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="w-full mb-[100px] border-b border-black">
        <div className="w-[300px] border border-red-500 flex flex-col items-center justify-center space-y-2">
          <p>
            There is a 3.0% cash adjustment discount built into all pricing.
          </p>
          <p>
            Any purchase made with a credit/debit card will receive a Non-Cash
            Adjustment and will be displayed on your receipt.
          </p>
        </div>
      </div>
    </main>
  );
}
