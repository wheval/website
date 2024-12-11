import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.art3mis.xyz"),
  applicationName: "Art3MisOracle",
  title: "Art3MisOracle",
  description: "Art3MisOracle",
  manifest: "/manifest.json",
  openGraph: {
    title: "Art3MisOracle",
    description:
      "🧚‍♀️ Mystical #AITarot on the #Blockchain, in the heart of the #cryptoverse ✨",
    images: ["/favicon.ico"],
    url: "https://www.art3mis.xyz/",
    type: "website",
  },
};
