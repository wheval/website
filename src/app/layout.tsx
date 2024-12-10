import type { Metadata } from "next";
import type { ReactNode } from "react";
import { irishGrover } from "@/fonts/fonts";
import Head from "next/head";

import { ReactQueryProvider } from "@/components/ReactQueryProvider";
import { WalletProvider } from "@/components/WalletProvider";
import { Toaster } from "@/components/ui/toaster";
import { WrongNetworkAlert } from "@/components/WrongNetworkAlert";

import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Art3MisOracle",
  title: "Art3MisOracle",
  description: "Art3MisOracle",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Art3MisOracle" />
        <meta
          property="og:description"
          content="🧚‍♀️ Mystical #AITarot on the #Blockchain, in the heart of the #cryptoverse ✨"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:url" content="https://www.art3mis.xyz/" />
        <meta property="og:type" content="website" />
      </Head>
      <html lang="en" className={`${irishGrover.variable}`}>
        <body>
          <WalletProvider>
            <ReactQueryProvider>
              <div id="root">{children}</div>
              <WrongNetworkAlert />
              <Toaster />
            </ReactQueryProvider>
          </WalletProvider>
        </body>
      </html>
    </>
  );
}
