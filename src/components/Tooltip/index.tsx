import { Talent } from "@/lib/classes";

import "./style.scss";

interface TooltipProps {
  talent: Talent;
}

const Tooltip = ({ talent }: TooltipProps) => {
  const currentDescription = talent.getCurrentDescription();
  const nextDescription = talent.getNextDescription();

  return (
    <div className="tooltip">
      <header>{talent.name}</header>
      <p>{currentDescription}</p>
      {currentDescription && nextDescription && <br />}
      {currentDescription && nextDescription && <br />}
      {talent.currentRank > 0 && talent.currentRank < talent.maxRank && (
        <h3>Next rank:</h3>
      )}
      <p>{nextDescription}</p>
    </div>
  );
};

export default Tooltip;
