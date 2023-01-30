import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Poll as PollType } from "@types";
import { BasePage, Poll } from "@components";

type Props = {
  pollsData: PollType[];
};

// Runs at build time
export async function getStaticProps() {
  const pollsData = await axios.get("polls");

  return {
    props: {
      pollsData: pollsData.data,
    },
  };
}

export default function Index({ pollsData }: Props) {
  const [polls, setPolls] = React.useState<PollType[]>(pollsData);

  // If a user is logged in, run the fetch on client to get their votes
  React.useEffect(() => {
    (async () => {
      const jwt = Cookies.get("auth");
      if (jwt) {
        const secondData = await axios.get("polls", {
          headers: {
            Authorization: "Bearer " + jwt,
          },
        });
        setPolls(secondData.data);
      }
    })();
  }, []);

  return (
    <BasePage title="Polls">
      <article>
        <h1 className="text-center text-3xl p-5">Polls</h1>
        <div className="container mx-auto">
          {polls.map((poll: PollType) => {
            return <Poll key={poll.id} poll={poll} />;
          })}
        </div>
      </article>
    </BasePage>
  );
}