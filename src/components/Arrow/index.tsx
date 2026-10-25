import { getArrowUrl } from "@/lib/img";
import { ArrowDirection, ArrowLength } from "@/lib/types";

import "./style.scss";

interface ArrowProps {
  isActive: boolean;
  length: ArrowLength;
  direction: ArrowDirection;
}

const Arrow = ({ isActive, length, direction }: ArrowProps) => {
  const arrowUrl = getArrowUrl(isActive ? "2" : "");

  return (
    <div className="arrow" data-active={isActive} data-direction={direction}>
      <img alt="arrow" src={arrowUrl} data-length={length} />
    </div>
  );
};

export default Arrow;
