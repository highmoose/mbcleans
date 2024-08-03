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
    title: "MB Cleans | Commercial & Domestic Cleaning Services In Wellingborough & Northamptonshire",
    description:
        "Discover professional commercial and domestic cleaning services in Wellingborough and Northamptonshire with MB Cleans. Our expert team ensures spotless results for your home and business. Contact us today for a sparkling clean!",
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
