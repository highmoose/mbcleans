import { Gabarito } from "next/font/google";
import { Shadows_Into_Light } from "next/font/google";
import "./globals.css";

const Gabarito1 = Gabarito({
  subsets: ["latin"],
  weights: [400, 500, 600, 700, 800, 900, 1000],
});

export const metadata = {
  title: "Welcome | MBCleans",
  description: "Your one-stop solution for all your cleaning needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Gabarito1.className}>{children}</body>
    </html>
  );
}
