import { useId } from "react";

import { getBackgroundImgUrl, getIconUrl } from "@/lib/img";
import { TalentTree as TalentTreeType } from "@/lib/types";

import "./style.scss";
import IconButton from "../IconButton";

interface TalentTreeProps {
  talentTree: TalentTreeType;
}

const TalentTree = ({ talentTree }: TalentTreeProps) => {
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
        }}
      >
        {talents.map((t) =>
          t ? (
            <IconButton
              icon={t.icon}
              ariaLabel={talentTree.name}
              imgAlt={talentTree.name}
              onClick={() => t.increment()}
            />
          ) : (
            <span />
          ),
        )}
      </div>
    </div>
  );
};

export default TalentTree;
