import React from "react";
import { Player } from "@types";
import {
  BasePage,
  CallToAction,
  Players,
  Products,
  Statement,
} from "@components";
import { getPlayers } from "../../src/libs/about";

// Runs at build time
export async function getStaticProps() {
  const players = getPlayers();
  return {
    props: {
      players,
    },
  };
}

type props = {
  players: Player[];
};

export default function Index({ players }: props) {
  return (
    <BasePage title="About">
      <Statement />
      <Products />
      <CallToAction />
      <Players players={players} />
    </BasePage>
  );
}
