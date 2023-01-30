import React from "react";
import { Player } from "@types";
import PlayerCard from "./PlayerCard";

type props = {
  players: Player[];
};

export default function Players({ players }: props) {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our Team
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:flex-wrap lg:items-stretch lg:py-16 lg:px-8">
        {players.map((player) => (
          <PlayerCard key={player.role} player={player} />
        ))}
      </div>
    </div>
  );
}
