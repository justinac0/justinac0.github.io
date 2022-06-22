import Link from "next/link";

import type { Card } from "@/types/mytypes";

export const PortfolioItem: React.FC<Card> = ({
  title,
  description,
  imgSrc,
  github,
}) => {
  return (
    <div className="p-3 mb-4 shadow card2 container-fluid">
      <div className="row">
        <div className="col-md">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="col-md text-center">
          <img
            className="img-fluid rounded mb-4"
            src={imgSrc}
            alt="image of portfolio item..."
          />
        </div>
      </div>
      <div className="row">
        {github && <Link href={github}>view on github</Link>}
      </div>
    </div>
  );
};
