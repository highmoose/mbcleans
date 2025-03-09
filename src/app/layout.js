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
        "MB Cleans provides exceptional commercial and domestic cleaning services in Wellingborough & Rushden. Our expert team guarantees spotless, reliable results for both your home and business. Reach out today!",
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
                content="https://www.mbcleans.co.uk/images/social/social.png"
            />
            <meta
                property="og:url"
                content="https://www.facebook.com/mbcleans"
            />
            <meta
                name="twitter:title"
                content="MB Cleans | Professional Cleaning Services"
            />
            <meta
                name="twitter:description"
                content="MB Cleans offers professional cleaning services for homes and businesses. We provide deep cleaning, regular maintenance, and specialized services to keep your spaces spotless."
            />
            <meta
                name="twitter:image"
                content="https://www.mbcleans.co.uk/images/social/social.png"
            />
            <meta name="twitter:card" content="summary_large_image" />
            <link rel="canonical" href="https://www.mbcleans.co.uk/" />
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
