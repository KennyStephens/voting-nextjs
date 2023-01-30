import React from "react";

import { getSortedPostsData } from "../src/libs/posts";
import {
  BasePage,
  BlogPreview,
  CallToAction,
  Features,
  Hero,
  Newsletter,
  Promo,
} from "@components";
import { PostPreview } from "@types";

type Props = {
  postPreviews: PostPreview[];
};

// Runs at build time
export async function getStaticProps() {
  const postPreviews = getSortedPostsData();
  return {
    props: {
      postPreviews,
    },
  };
}

export default function Home({ postPreviews }: Props) {
  return (
    <BasePage title="Home">
      <Hero />
      <Features />
      <Newsletter />
      <Promo />
      <CallToAction />
      <BlogPreview postPreviews={postPreviews} />
    </BasePage>
  );
}
