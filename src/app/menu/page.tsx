import MainMenu from "@/components/MainMenu";
import { Mail } from "lucide-react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "@/components/ui/Navbar";
import Header from "@/components/ui/Header";

const page = () => {
    return (
        <div>
            <Header
                image="https://www.yaffanyc.com/wp-content/uploads/2023/02/menu-page-hero-image.jpg"
                title="Main Menu"
                activeTab="menu"
            />

            {/* body content */}
            <MainMenu />
        </div>
    );
};

export default page;
