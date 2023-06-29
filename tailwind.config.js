/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        // screens: {
        //     tablet: "640px",
        //     // -> @media (min-width: 640px)

        //     laptop: "1024px",
        //     // -> @media (min-width: 1024px)

        //     desktop: "1280px",
        //     // -> @media (min-width: 1280px)
        // },
        // sm	640px	@media (min-width: 640px) { ... }
        // md	768px	@media (min-width: 768px) { ... }
        // lg	1024px	@media (min-width: 1024px) { ... }
        // xl	1280px	@media (min-width: 1280px) { ... }
        // 2xl	1536px	@media (min-width: 1536px) { ... }
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                fadeSlideUp: {
                    from: {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    to: {
                        opacity: "1",
                        transform: "translateY(0px)",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                slideUp: "fadeSlideUp 0.2s ease-out",
            },
            height: {
                "10vh": "10vh",
                "20vh": "20vh",
                "30vh": "30vh",
                "40vh": "40vh",
                "50vh": "50vh",
                "60vh": "60vh",
                "70vh": "70vh",
                "80vh": "80vh",
                "90vh": "90vh",
            },
            width: {
                "10vw": "10vw",
                "20vw": "20vw",
                "30vw": "30vw",
                "40vw": "40vw",
                "50vw": "50vw",
                "60vw": "60vw",
                "70vw": "70vw",
                "80vw": "80vw",
                "90vw": "90vw",
                "100vw": "100vw",
            },
            maxWidth: {
                "maxw-100": "100%",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
