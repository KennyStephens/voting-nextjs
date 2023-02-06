import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Poll as PollType } from "@types";
import { BasePage, Poll } from "@components";

type Props = {
  pollsData: PollType[];
};

export default function Index() {
  const [polls, setPolls] = React.useState<PollType[]>([]);

  // If a user is logged in, run the fetch on client to get their votes
  React.useEffect(() => {
    (async () => {
      const jwt = Cookies.get("auth");
      const secondData = await axios.get("polls", {
        headers: {
          Authorization: "Bearer " + jwt,
        },
      });
      setPolls(secondData.data);
    })();
  }, []);

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
