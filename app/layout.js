import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "./logo.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "jovesolides",
  description: "Erasmus-Jovesolides Egypt Home Webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image
          src={Logo}
          alt="jovesolides logo"
          width={100}
          quality={100}
          placeholder="blur"
        />
        {children}
      </body>
    </html>
  );
}
