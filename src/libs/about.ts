import { Player } from "@types";

export function getPlayers(): Player[] {
  const players = [
    {
      alt: "Player profile picture",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor lobortis metus, eu aliquam urna eleifend et. Maecenas luctus, augue nec eleifend euismod, lacus odio fringilla quam, id hendrerit dolor.",
      img: "/images/about/profile.jpg",
      link: "https://liquipedia.net/dota2/Gorgc",
      name: "Test man 1",
      role: "Carry",
    },
    {
      role: "Mid",
    },
    {
      role: "Offlane",
    },
    {
      role: "Support",
    },
    {
      role: "Hard Support",
    },
  ];
  return players;
}
