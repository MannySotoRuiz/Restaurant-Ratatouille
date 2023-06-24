import { Jost } from "next/font/google";
import "@/styles/globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Sample",
  description: "Restaurant Website Sample created by Emmanuel Soto Ruiz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
