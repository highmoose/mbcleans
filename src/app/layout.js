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
    title: "MB Cleans | Expert Cleaning Rushden & Wellingborough",
    description:
        "Commercial and domestic cleaning in Wellingborough & Rushden | MB Cleans ensures spotless results for your home and business. Contact us today!",
};

// social meta tags
const socialMetaTags = () => {
    return (
        <>
            <meta
                property="og:title"
                content="MB Cleans | Professional Cleaning Service"
            />
            <meta
                property="og:description"
                content="Commercial & Domestic Cleaning Services in Rushden, Wellingborough and surrounding areas"
            />
            <meta
                property="og:image"
                content="https://www.mbcleans.co.uk/images/social/social-image.png"
            />
            <meta
                property="og:url"
                content="https://www.facebook.com/mbcleans"
            />
        </>
    );
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="canonical" href="https://www.mbcleans.co.uk/" />
                {socialMetaTags()}
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
