import { ReactNode } from "react";

import "./style.scss";

interface ResetButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const ResetButton = ({ onClick, children }: ResetButtonProps) => {
  return (
    <button className="reset-button" onClick={onClick}>
      <span>x</span>
      <p>{children}</p>
    </button>
  );
};

export default ResetButton;
