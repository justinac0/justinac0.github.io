import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";

import type { Card } from "@/types/mytypes";
import CARDS from "@/cards.json";
import PortfolioItem from "@/components/portfolio-item";
import { FC } from "react";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      cards: CARDS,
    },
  };
};

const Portfolio: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  cards,
}) => {
  return (
    <div>
      {cards.map((card: Card) => (
        <PortfolioItem key={card.title} {...card} />
      ))}
    </div>
  );
};

export default Portfolio;
