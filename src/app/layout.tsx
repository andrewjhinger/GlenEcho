import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Friends of Glen Echo",
  description: "Preserving Glen Echo, Building Our Future - A nonprofit organization dedicated to enhancing the Glen Echo neighborhood.",
  keywords: ["Glen Echo", "nonprofit", "community", "preservation", "neighborhood"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
