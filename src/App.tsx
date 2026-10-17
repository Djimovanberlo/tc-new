import { useEffect, useId, useState } from "react";

import { playerClasses } from "@/talents";
import { Talent } from "@/lib/classes";
import {
  PlayerClass,
  PlayerClassName,
  TalentTree as TalentTreeType,
} from "@/lib/types";
import PlayerClassList from "./components/PlayerClassList";
import TalentTree from "./components/TalentTree";

import "./app.scss";

// TODO: ensure 100% that .find() for names method always work: there should never be duplicate names in a talent tree
// NOTE: some talent names repeat across classes (e.g. Deflection), so talentNames is nested per
// class (talentNames.druid.improvedWrath) to keep every key unique. Names are unique within a
// class, so `requires` and the duplicate-name TODO in errors.ts only need to check within one class.
function App() {
  const id = useId();
  const [selectedPlayerClass, setSelectedPlayerClass] = useState<PlayerClass>(
    playerClasses[0],
  );

  const [talentTrees, setTalentTrees] = useState(
    selectedPlayerClass.talentTrees,
  );

  useEffect(() => {
    setTalentTrees(selectedPlayerClass.talentTrees);
  }, [selectedPlayerClass]);

  const selectPlayerClass = (playerClassName: PlayerClassName) => {
    setSelectedPlayerClass(
      playerClasses.find((c) => c.name === playerClassName)!,
    );
  };

  const incrementTalent = (talentTree: TalentTreeType, talent: Talent) => {
    const tieredTalents = Object.values(talentTree.tiers);
    const talents = tieredTalents.flat();

    const requiredTalent = talent.requires
      ? talents.find((t) => t?.name === talent.requires)
      : undefined;

    if (requiredTalent && requiredTalent.currentRank < requiredTalent.maxRank) {
      return;
    }

    const talentTier = tieredTalents.findIndex((tier) =>
      tier.some((tieredTalent) => tieredTalent?.name === talent.name),
    );

    const currentRankSum = talents.reduce(
      (sum, t) => sum + (t?.currentRank ?? 0),
      0,
    );

    if (currentRankSum < talentTier * 5) {
      return;
    }

    talent.increment();
    setTalentTrees({ ...talentTrees });
  };

  const decrementTalent = (talentTree: TalentTreeType, talent: Talent) => {
    const tieredTalents = Object.values(talentTree.tiers);

    const requiredByTalents = tieredTalents
      .flat()
      .filter((t) => t?.requires === talent.name);

    if (requiredByTalents.some((t) => t && t.currentRank > 0)) {
      return;
    }

    const talentTier = tieredTalents.findIndex((tier) =>
      tier.some((tieredTalent) => tieredTalent?.name === talent.name),
    );

    const pointsPerTier = tieredTalents.map((tier) =>
      tier.reduce((sum, t) => sum + (t?.currentRank ?? 0), 0),
    );
    const highestTier = pointsPerTier
      .map((points) => points > 0)
      .lastIndexOf(true);
    const pointsBelowHighestTier = pointsPerTier
      .slice(0, highestTier)
      .reduce((sum, points) => sum + points, 0);

    if (talentTier < highestTier && pointsBelowHighestTier <= highestTier * 5) {
      return;
    }

    talent.decrement();
    setTalentTrees({ ...talentTrees });
  };

  return (
    <div className="app">
      <PlayerClassList
        playerClasses={playerClasses}
        selectedPlayerClass={selectedPlayerClass}
        selectPlayerClass={selectPlayerClass}
      />
      <div className="talent-trees">
        {Object.values(talentTrees).map((t) => (
          <TalentTree
            key={id + t.name}
            talentTree={t}
            onIncrement={(talent) => incrementTalent(t, talent)}
            onDecrement={(talent) => decrementTalent(t, talent)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// TODO: on initialisation, loop over all talent names, throw error if there are any duplicates.
