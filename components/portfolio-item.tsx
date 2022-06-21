import Link from "next/link";

import type { Card } from "@/types/mytypes";

const PortfolioItem: React.FC<Card> = ({
  title,
  description,
  imgSrc,
  github,
}) => {
  return (
    <div className="p-5 mb-4 shadow card2 container-fluid">
      <div className="row">
        <div className="col-lg">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="col-lg text-center">
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

export default PortfolioItem;
