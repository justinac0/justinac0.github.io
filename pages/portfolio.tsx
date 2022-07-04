import type { Card } from "@/types/mytypes";
import CARDS from "@/cards.json";
import { PortfolioItem } from "@/components/portfolio-item";
import { FC } from "react";

const Portfolio: FC = () => {
  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      <>
        {CARDS.map((card: Card) => (
          <PortfolioItem key={card.title} {...card} />
        ))}
      </>
    </div>
  );
};

export default Portfolio;
