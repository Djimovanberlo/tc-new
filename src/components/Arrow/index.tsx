import { getArrowUrl } from "@/lib/img";

import "./style.scss";

interface ArrowProps {
  isActive: boolean;
  length: 1 | 2 | 3;
  direction: "right" | "down" | "left";
}

const Arrow = ({ isActive, length, direction }: ArrowProps) => {
  const arrowUrl = getArrowUrl(isActive ? "2" : "");

  return (
    <div className="arrow" data-direction={direction}>
      <img alt="arrow" src={arrowUrl} />
    </div>
  );
};

export default Arrow;
