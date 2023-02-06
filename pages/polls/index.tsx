import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Poll as PollType } from "@types";
import { BasePage, Poll } from "@components";
import { RequestContext } from "next/dist/server/base-server";

type Props = {
  polls: PollType[];
};

// Consider removing this and only getting the data on the useEffect is the load on the server is too high
export async function getServerSideProps({ req }: RequestContext) {
  const jwt = Cookies.get(req.headers.cookie || "");
  const pollsData = await axios.get("polls", {
    headers: {
      Authorization: "Bearer " + jwt,
    },
  });

  return {
    props: {
      pollsData: pollsData.data,
    },
  };
}

export default function Index({ polls }: Props) {
  return (
    <BasePage title="Polls">
      <h1 className="text-center text-3xl p-5">Polls</h1>
      <div className="container mx-auto">
        {polls.map((poll: PollType) => {
          return <Poll key={poll.id} poll={poll} />;
        })}
      </div>
    </BasePage>
  );
}
