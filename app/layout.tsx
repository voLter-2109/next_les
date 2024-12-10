"use client";

import { FC, PropsWithChildren } from "react";

import Layout from "@/components/Layout/Layout";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import "./globals.css";

const RootLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <html lang="en">
      <body key="V2" className="min-h-screen">
        <Provider store={store}>
          <Layout>{children}</Layout>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
