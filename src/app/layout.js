// import { DefaultSeo } from "next-seo";
// import SEO from "./../../next-seo.config";

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
    title: "MBCleans",
    description: "Cleaning Services In Wellingborough & Northamptonshire",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* <DefaultSeo {...SEO} /> */}
            <body className={gabarito.className}>
                <BannerBar />
                <HeaderMenu />
                {children}
                <FooterBar />
            </body>
        </html>
    );
}
