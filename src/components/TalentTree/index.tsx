import { useId } from "react";

import { getBackgroundImgUrl, getIconUrl } from "@/lib/img";
import { TalentTree as TalentTreeType } from "@/lib/types";
import { Talent } from "@/lib/classes";
import TalentTreeItem from "@/components/TalentTreeItem";

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
          backgroundSize: "cover",
        }}
      >
        {talents.map((t, i) =>
          t ? (
            <TalentTreeItem
              key={id + t.name}
              talentTree={talentTree}
              talent={t}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          ) : (
            <span key={id + i} />
          ),
        )}
      </div>
    </div>
  );
};

export default TalentTree;
