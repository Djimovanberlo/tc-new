import { useId } from "react";

import { getBackgroundImgUrl, getIconUrl } from "@/lib/img";
import { TalentTree as TalentTreeType } from "@/lib/types";
import { Talent } from "@/lib/classes";
import { canDecrementTalent, canIncrementTalent } from "@/lib/talents";
import IconButton from "@/components/IconButton";

import "./style.scss";

interface TalentTreeProps {
  talentTree: TalentTreeType;
  onIncrement: (talent: Talent) => void;
  onDecrement: (talent: Talent) => void;
}

const TalentTree = ({
  talentTree,
  onIncrement,
  onDecrement,
}: TalentTreeProps) => {
  const id = useId();
  const backgroundImgUrl = getBackgroundImgUrl(talentTree.backgroundImage);
  const talents = Object.values(talentTree.tiers).flat();

  const currentRankSum = talents.reduce(
    (sum, talent) => sum + (talent?.currentRank ?? 0),
    0,
  );
  const maxRankSum = talents.reduce(
    (sum, talent) => sum + (talent?.maxRank ?? 0),
    0,
  );

  return (
    <div className="talent-tree">
      <header>
        <span>
          <img src={getIconUrl(talentTree.icon)} alt={talentTree.name} />
          <h2>{talentTree.name}</h2>
        </span>

        <span>
          {currentRankSum} / {maxRankSum}
        </span>
      </header>
      <div
        className="talent-tree-grid"
        style={{
          backgroundImage: `url(${backgroundImgUrl})`,
          backgroundSize: "100% 100%",
        }}
      >
        {talents.map((t, i) => {
          if (!t) {
            return <span key={id + i} />;
          }

          const canIncrement = canIncrementTalent(talentTree, t);
          const canDecrement = canDecrementTalent(talentTree, t);
          const outlineColor =
            t.currentRank === t.maxRank
              ? "yellow"
              : canIncrement
                ? "green"
                : undefined;

          return (
            <div key={id + t.name} className="talent-tree-item">
              <IconButton
                data-filter-grey={!canIncrement}
                data-outline-color={outlineColor}
                icon={t.icon}
                ariaLabel={talentTree.name}
                imgAlt={talentTree.name}
                onClick={() => onIncrement(t)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  onDecrement(t);
                }}
              />
              <span>
                {t.currentRank}/{t.maxRank}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TalentTree;
