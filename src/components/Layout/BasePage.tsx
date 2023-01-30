import Head from "next/head";
import React from "react";

import Footer from "./Footer/Footer";
import Menu from "./Menu/Menu";

type Props = {
  children: React.ReactNode;
  title: string;
  meta?: string;
  metaDesc?: string;
  metaTitle?: string;
  metaImage?: string;
};

export default function BasePage({
  children,
  title,
  meta,
  metaDesc,
  metaTitle,
  metaImage,
}: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta ? <meta name="description" content={meta} key="desc" /> : null}
        {/* This description for so social shares? Not really sure but it comes up in like the description section when you share a page I think */}
        {metaDesc ? <meta property="og:description" content={meta} /> : null}
        {metaTitle ? <meta property="og:title" content={metaTitle} /> : null}
        {metaImage ? (
          <meta
            property="og:image"
            content="https://example.com/images/cool-page.jpg"
          />
        ) : null}
      </Head>
      <div className="flex flex-col h-screen">
        <Menu />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
    </>
  );
}