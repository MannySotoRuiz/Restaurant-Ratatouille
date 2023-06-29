import MainMenu from "@/components/MainMenu";
import Header from "@/components/ui/Header";

const page = () => {
    return (
        <div>
            <Header
                image="https://www.yaffanyc.com/wp-content/uploads/2023/02/menu-page-hero-image.jpg"
                title="Main Menu"
                subtitle="FRANCE RATATOUILLE"
                activeTab="menu"
            />

            {/* body content */}
            <MainMenu />
        </div>
    );
};

export default page;
