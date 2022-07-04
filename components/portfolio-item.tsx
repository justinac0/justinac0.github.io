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
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="col-md text-center">
          <img
            className="img-fluid rounded"
            src={imgSrc}
            alt="image of portfolio item..."
          />
        </div>
      </div>
      {github && (
        <span className="row pt-2">
          <Link href={github}>view on github</Link>
        </span>
      )}
    </div>
  );
};
