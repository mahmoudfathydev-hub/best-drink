import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { ProductImageProvider } from "@/context/ProductImageContext";
import { FlavorProvider } from "@/context/FlavorContext";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Best Drink - Premium Egyptian Juice",
  description:
    "Crafting exceptional beverages with passion and innovation. Experience the perfect blend of taste and quality.",
  keywords: "juice, egyptian, premium, beverages, best drink, cairo, egypt",
  authors: [{ name: "Mahmoud Fathy" }],
  creator: "Mahmoud Fathy",
  publisher: "Best Drink",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://best-drink.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Drink - Premium Egyptian Juice",
    description:
      "Crafting exceptional beverages with passion and innovation. Experience the perfect blend of taste and quality.",
    type: "website",
    locale: "en_US",
    url: "https://best-drink.com",
    siteName: "Best Drink",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Drink - Premium Egyptian Juice",
    description:
      "Crafting exceptional beverages with passion and innovation. Experience the perfect blend of taste and quality.",
    creator: "@mahmoudfathy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Best Drink - Premium Egyptian Juice Brand"
        />
        <meta
          name="keywords"
          content="juice, egyptian, premium, beverages, best drink"
        />
        <meta name="author" content="Mahmoud Fathy" />
        <meta
          property="og:title"
          content="Best Drink - Premium Egyptian Juice"
        />
        <meta
          property="og:description"
          content="Crafting exceptional beverages with passion and innovation"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Drink - Premium Egyptian Juice"
        />
        <meta
          name="twitter:description"
          content="Crafting exceptional beverages with passion and innovation"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <FlavorProvider>
            <ProductImageProvider>
              <Navbar />
              {children}
              <Footer />
            </ProductImageProvider>
          </FlavorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
