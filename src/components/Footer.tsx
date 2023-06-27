import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    return (
        <footer className="bg-[#09080E] text-white flex flex-col items-center justify-center">
            <div className="w-[1400px] grid grid-cols-3 py-20 border-b border-gray-500">
                {/* company */}
                <div className="w-full h-full flex flex-col space-y-5 pr-20">
                    <Image
                        src="https://www.yaffanyc.com/wp-content/uploads/2023/02/Chateau-Yaffa-Logo-SVG-WHITE-1.svg"
                        alt="logo"
                        width={300}
                        height={214}
                    />
                    <p className="text-[15px] font-light text-white/90">
                        France Ratatouille is a beautiful and sophisticated
                        restaurant that offers a unique dining experience
                        centered around a warm and welcoming community
                        atmosphere.
                    </p>

                    <div className="space-x-4 flex items-center">
                        <BsFacebook
                            size={20}
                            className="transition-colors hover:text-orange-600"
                        />
                        <BsInstagram
                            size={20}
                            className="transition-colors hover:text-orange-600"
                        />
                    </div>
                </div>
                {/* hours */}
                <div className="w-full h-full space-y-6">
                    <h4 className="text-[16px] font-medium">WORKING HOURS</h4>
                    <div className="flex flex-col space-y-1 items-center w-full">
                        <div className="w-full flex text-[15px]">
                            <span className="flex-1">Monday</span>
                            <span>Closed</span>
                        </div>
                        <div className="w-full flex text-[15px]">
                            <span className="flex-1">Tuesday - Sunday</span>
                            <span>10 AM - 10 PM</span>
                        </div>
                    </div>
                    <div className="w-full flex text-[15px] pt-5">
                        <span className="flex-1">* Brunch Hours</span>
                        <span>10 AM - 3 PM</span>
                    </div>
                </div>
                {/* contact info & address */}
                <div className="w-full h-full space-y-6 px-20">
                    <h4 className="text-[16px] font-medium">OUR ADDRESS</h4>
                    <div className="flex items-center text-[15px] space-x-3">
                        <FaLocationDot />
                        <span>1234 Avenue, New York, NY 01234</span>
                    </div>
                    <div className="flex items-center text-[15px] space-x-3">
                        <FaPhoneFlip />
                        <span>1234 Avenue, New York, NY 01234</span>
                    </div>
                    <div className="flex items-center text-[15px] space-x-3">
                        <HiOutlineMail size={18} />
                        <span>france.ratatouille@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center w-[1400px] py-10">
                <p className="text-[#B0B0B0] text-[16px]">
                    Website designed by{" "}
                    <Link
                        href="https://mannysotoruiz.com/"
                        target="_blank"
                        className="transition-all hover:text-orange-600"
                    >
                        Emmanuel Soto Ruiz
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
