import { Gabarito } from "next/font/google";
import { Shadows_Into_Light } from "next/font/google";
import "./globals.css";
import BannerBar from "../../components/bannerBar";
import FooterBar from "../../components/footerBar";
import HeaderMenu from "../../components/layout/headerMenu";

const gabarito = Gabarito({ subsets: ["latin"] });

const shadows_Into_Light = Shadows_Into_Light({
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
      <body className={gabarito.className}>
        <BannerBar />
        <HeaderMenu />
        {children}
        <FooterBar />
      </body>
    </html>
  );
}
