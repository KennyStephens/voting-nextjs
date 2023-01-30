import React from "react";
import PreviewTile from "../../src/components/Blog/PreviewTile";
import { getSortedPostsData } from "../../src/libs/posts";
import { BasePage } from "@components";
import { PostPreview } from "@types";

type Props = {
  postData: PostPreview[];
};

// Runs at build time
export async function getStaticProps() {
  const postData = getSortedPostsData();
  return {
    props: {
      postData,
    },
  };
}

export default function Index({ postData }: Props) {
  return (
    <BasePage title="Blog">
      <article>
        <h1 className="text-center text-3xl p-5">Blog Index</h1>
        <div className="container mx-auto">
          {postData.map((preview: PostPreview) => (
            <PreviewTile key={preview.id} preview={preview} />
          ))}
        </div>
      </article>
    </BasePage>
  );
}
