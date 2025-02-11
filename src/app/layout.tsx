import type { FC } from "react";
import type { Metadata } from "next";
import "@/styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Generated by create next app",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <body className="">{children}</body>
    </html>
  );
};

export default RootLayout;
