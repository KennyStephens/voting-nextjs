import React from "react";
import { Poll as PollType, Vote } from "@types";
import Options from "./Options";

type Props = {
  poll: PollType;
};

export default function Poll({ poll }: Props) {
  return (
    <div className="w-sm rounded-xl shadow-lg mb-4 bg-white m-1.5 sm:w-full sm:max-w-3xl sm:mx-auto">
      <div className="p-8">
        <h2 className="text-2xl">{poll.question}</h2>
        <Options p={poll} />
      </div>
    </div>
  );
}
