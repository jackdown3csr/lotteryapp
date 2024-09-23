import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cypher Lottery",
  description:
    "Is your lucky day today? ",
};



export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>)
 {
  return (
         <html lang="en">
         <ThirdwebProvider>
      <body className={inter.className}>
      {children}
      </body>
      </ThirdwebProvider>
      </html>
    
  );
}
