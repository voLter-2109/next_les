"use client";

import { FC, PropsWithChildren } from "react";

import Layout from "@/components/Layout/Layout";
import "./globals.css";

const RootLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <html lang="en">
      <body key="V2" className="min-h-screen">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
