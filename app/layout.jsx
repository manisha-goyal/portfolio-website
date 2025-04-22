import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Manisha Goyal - Developer Portfolio",
  description:
    "Explore the portfolio of Manisha Goyal, a software engineer showcasing her projects and expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <PageTransition>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
