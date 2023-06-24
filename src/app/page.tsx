import Hero from "@/components/Hero";
import Image from "next/image";

interface MenuItem {
	title: string;
	price: string;
	description?: string;
}

export default function Home() {
	const saladMenu: MenuItem[] = [
		{
			title: "Greek",
			price: "$12",
			description: "Fresh Salad with Feta Cheese",
		},
		{
			title: "Snow",
			price: "$10",
			description: "Garden Salad with Sour Cream and Egg",
		},
		{
			title: "Garden",
			price: "$14",
			description: "Fresh Vegetable Salad",
		},
		{
			title: "Caesar",
			price: "$12",
			description: "Add Chicken $4",
		},
	];
	const meatMenu = [
		{
			title: "Filet Mignon",
			price: "$24",
		},
		{
			title: "Rack of Lamb",
			price: "$48",
		},
		{
			title: "Shish Kebab",
			price: "$32",
		},
		{
			title: "Chicken",
			price: "$16",
		},
		{
			title: "Veal Liver Saute",
			price: "$24",
		},
	];
	const sandwichesMenu = [
		{
			title: "Chicken Schnitzel",
			price: "$14",
			description: "Lettuce, tomato, onion, pickles.",
		},
		{
			title: "Philly Cheese Steak",
			price: "$18",
			description: "Onion, pepper, cheese, mayonnaise.",
		},
		{
			title: "Beef Burger",
			price: "$16",
			description: "BLT, Cheese, Egg, Avocado (Optional)",
		},
		{
			title: "Falafel",
			price: "$12",
			description: "Salad, hummus, tahini.",
		},
	];

	return (
		<main>
			<Hero />
			<div className="w-full flex items-center justify-center flex-col m-auto pb-20">
				{/* body section */}
				<div className="tablet:w-11/12 laptop:w-[1000px] desktop:w-[1200px] laptop:px-10 flex flex-col justify-center items-center space-y-2">
					{/* announcement */}
					<div className="w-full py-[50px] border-b-2 border-gray-200 flex flex-col justify-center items-center mb-5">
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
					<div className="w-full flex mb-20">
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

							<button className=" mt-6 mb-16 px-[20px] py-[10px] w-32 inline-block bg-orange-600 text-white text-sm hover:-translate-y-[2px] transition-all">
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
					{/* end of about us section */}

					{/* featured menus section */}
					<div className="pt-28 pb-[30px] w-full grid grid-cols-3 gap-8">
						{/* salads menu */}
						<div className="w-full flex flex-col justify-center items-center">
							{/* menu subtitle */}
							<h4 className="text-orange-600 text-[13px] font-semibold">
								REFRESHING HEALTHY OPTIONS
							</h4>
							{/* menu title */}
							<h2 className="title text-[35px] mt-1 mb-4">SALADS</h2>

							{/* menu items */}
							{saladMenu.map((item, idx) => (
								<div
									className="w-full mb-6"
									key={idx}
								>
									{/* menu item title and price*/}
									<div className="flex items-center w-full mb-1">
										<h6 className="title text-[24px]">{item.title}</h6>
										<span className="flex-1 text-center border-b leading-[0.1em] mt-[15px] mb-[15px] mx-[10px]"></span>
										<h3 className="text-[20px]">{item.price}</h3>
									</div>
									{/* menu item description */}
									<p className="text-gray-400 text-[16px]">
										{item.description}
									</p>
								</div>
							))}
						</div>

						{/* Main Meat Menu */}
						<div className="w-full flex flex-col justify-center items-center">
							{/* menu subtitle */}
							<h4 className="text-orange-600 text-[13px] font-semibold">
								TOP RATED DISHES
							</h4>
							{/* menu title */}
							<h2 className="title text-[35px] mt-1 mb-4">MEAT MAIN</h2>

							{/* menu items */}
							{meatMenu.map((item, idx) => (
								<div
									className="w-full mb-6"
									key={idx}
								>
									{/* menu item title and price*/}
									<div className="flex items-center w-full mb-1">
										<h6 className="title text-[24px]">{item.title}</h6>
										<span className="flex-1 text-center border-b leading-[0.1em] mt-[15px] mb-[15px] mx-[10px]"></span>
										<h3 className="text-[20px]">{item.price}</h3>
									</div>
								</div>
							))}
						</div>

						{/* sandwhiches */}
						<div className="w-full flex flex-col justify-center items-center">
							{/* menu subtitle */}
							<h4 className="text-orange-600 text-[13px] font-semibold">
								FINGER FOODS
							</h4>
							{/* menu title */}
							<h2 className="title text-[35px] mt-1 mb-4">SANDWICHES</h2>

							{/* menu items */}
							{sandwichesMenu.map((item, idx) => (
								<div
									className="w-full mb-6"
									key={idx}
								>
									{/* menu item title and price*/}
									<div className="flex items-center w-full mb-1">
										<h6 className="title text-[24px]">{item.title}</h6>
										<span className="flex-1 text-center border-b leading-[0.1em] mt-[15px] mb-[15px] mx-[10px]"></span>
										<h3 className="text-[20px]">{item.price}</h3>
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

					{/*  */}
				</div>
			</div>
		</main>
	);
}
