interface MenuItem {
    title: string;
    price: string;
    description?: string;
}

export const saladMenu: MenuItem[] = [
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

export const meatMenu = [
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

export const sandwichesMenu = [
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

export const recommendationMenu1 = {
    image: "https://source.unsplash.com/zcUgjyqEwe8",
    description: "RECOMMENDATIONS",
    title: "NEW BRUNCH MENU",
    menuName: "BRUNCH SPECIALS",
    menuLink: "http://localhost:3000/",
};

export const recommendationMenu2 = {
    image: "https://source.unsplash.com/idTwDKt2j2o",
    description: "SAVORY CHOICES",
    title: "INCREDIBLE DESSERTS",
    menuName: "DESSERT MENU",
    menuLink: "http://localhost:3000/",
};

export const recommendationMenu3 = {
    image: "https://source.unsplash.com/PPneSBqfCCU",
    description: "SANGRIA",
    title: "HAVE A DRINK",
    menuName: "DRINK MENU",
    menuLink: "http://localhost:3000/",
};
