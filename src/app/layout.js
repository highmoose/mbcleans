import { Gabarito } from "next/font/google";
import { Shadows_Into_Light } from "next/font/google";
import "./globals.css";
import BannerBar from "../../components/bannerBar";
import FooterBar from "../../components/footerBar";
import HeaderMenu from "../../components/layout/headerMenu";

const Gabarito1 = Gabarito({
  subsets: ["latin"],
  weights: [400, 500, 600, 700, 800, 900, 1000],
});

const Shadows_Into_Light1 = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Welcome | MBCleans",
  description: "Your one-stop solution for all your cleaning needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Gabarito1.className}>
        <BannerBar />
        <HeaderMenu />
        {children}
        <FooterBar />
      </body>
    </html>
  );
}
