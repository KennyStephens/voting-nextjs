import Image from "next/image";
import React from "react";
import { Player } from "@types";

type props = {
  player: Player;
};

export default function PlayerCard({ player }: props) {
  return (
    <div className="mx-auto mb-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="flex flex-col items-center py-10">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={player.img ?? "/images/about/question.png"}
          alt={player.alt ?? "A question mark"}
          width={600}
          height={600}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {player.name ?? "Unknown"}
        </h5>
        <span className="text-sm text-gray-500">{player.role}</span>
        <p className="py-4 px-6">{player.desc ?? ""}</p>
        {player.link && (
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href={player.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Liquipedia
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
