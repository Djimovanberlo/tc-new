import { TalentTree } from "@/lib/types";
import { Talent } from "@/lib/classes";
import { canIncrementTalent, getArrows } from "@/lib/talents";
import IconButton from "@/components/IconButton";
import Arrow from "@/components/Arrow";

import "./style.scss";
import Tooltip from "../Tooltip";

interface TalentTreeItemProps {
  talentTree: TalentTree;
  talent: Talent;
  onIncrement: (talent: Talent) => void;
  onDecrement: (talent: Talent) => void;
}

const TalentTreeItem = ({
  talentTree,
  talent,
  onIncrement,
  onDecrement,
}: TalentTreeItemProps) => {
  const canIncrement = canIncrementTalent(talentTree, talent);
  const arrows = getArrows(talentTree, talent);

  const outlineColor =
    talent.currentRank === talent.maxRank
      ? "yellow"
      : canIncrement
        ? "green"
        : undefined;

  return (
    <div className="talent-tree-item">
      <IconButton
        data-filter-grey={!canIncrement}
        data-outline-color={outlineColor}
        icon={talent.icon}
        ariaLabel={talent.name}
        imgAlt={talent.name}
        onClick={(e) => {
          e.preventDefault();
          onIncrement(talent);
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          onDecrement(talent);
        }}
      />
      <span>
        {talent.currentRank}/{talent.maxRank}
      </span>
      {arrows.map(({ key, ...arrow }) => (
        <Arrow key={key} {...arrow} />
      ))}
      <Tooltip talent={talent} />
    </div>
  );
};

export default TalentTreeItem;
