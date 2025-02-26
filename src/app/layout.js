import HeaderMenu from "../../components/layout/headerMenu";
import { Shadows_Into_Light } from "next/font/google";
import BannerBar from "../../components/bannerBar";
import FooterBar from "../../components/footerBar";
import { Gabarito } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

const shadows_Into_Light = Shadows_Into_Light({
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata = {
    title: "MB Cleans | Professional Cleaning in Wellingborough & Northamptonshire",
    description:
        "Discover expert commercial and domestic cleaning in Wellingborough & Northamptonshire with MB Cleans. Our team ensures spotless results for your home and business. Contact us today!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="canonical" href="https://www.mbcleans.co.uk/" />
            </Head>
            <body className={gabarito.className}>
                <BannerBar />
                <HeaderMenu />
                {children}
                <FooterBar />
            </body>
        </html>
    );
}
