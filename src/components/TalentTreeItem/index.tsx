import { TalentTree } from "@/lib/types";
import { Talent } from "@/lib/classes";
import { canIncrementTalent, getIsRequiredByTalent } from "@/lib/talents";
import IconButton from "@/components/IconButton";
import Arrow from "@/components/Arrow";

import "./style.scss";

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
  const requiredByTalent = getIsRequiredByTalent(talentTree, talent);
  const canIncrementRequiredByTalent = requiredByTalent
    ? canIncrementTalent(talentTree, requiredByTalent)
    : false;

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
        onClick={() => onIncrement(talent)}
        onContextMenu={(e) => {
          e.preventDefault();
          onDecrement(talent);
        }}
      />
      <span>
        {talent.currentRank}/{talent.maxRank}
      </span>
      {!!requiredByTalent && (
        <Arrow
          isActive={canIncrementRequiredByTalent}
          direction="left"
          length={1}
        />
      )}
    </div>
  );
};

export default TalentTreeItem;
