import { useEffect, useId, useState } from "react";

import { playerClasses } from "@/talents";
import { Talent } from "@/lib/classes";
import {
  canDecrementTalent,
  canIncrementTalent,
  getTalentsFromTree,
} from "@/lib/talents";
import {
  PlayerClass,
  PlayerClassName,
  TalentTree as TalentTreeType,
} from "@/lib/types";
import PlayerClassList from "./components/PlayerClassList";
import TalentTree from "./components/TalentTree";
import ResetButton from "./components/ResetButton";

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

  const totalSpentPoints = Object.values(talentTrees)
    .map((tree) => getTalentsFromTree(tree).talentList)
    .flat()
    .reduce((sum, talent) => sum + (talent?.currentRank ?? 0), 0);

  const pointsLeft = 51 - totalSpentPoints;

  const resetTalentTree = (talentTree: TalentTreeType) => {
    const talents = Object.values(talentTree.tiers).flat();

    for (const talent of talents) {
      talent?.reset();
    }

    setTalentTrees({ ...talentTrees });
  };

  const resetAllTalentTrees = () => {
    for (const talentTree of Object.values(talentTrees)) {
      resetTalentTree(talentTree);
    }
  };

  const selectPlayerClass = (playerClassName: PlayerClassName) => {
    setSelectedPlayerClass(
      playerClasses.find((c) => c.name === playerClassName)!,
    );
  };

  const incrementTalent = (talentTree: TalentTreeType, talent: Talent) => {
    if (!canIncrementTalent(talentTree, talent)) {
      return;
    }

    talent.increment();
    setTalentTrees({ ...talentTrees });
  };

  const decrementTalent = (talentTree: TalentTreeType, talent: Talent) => {
    if (!canDecrementTalent(talentTree, talent)) {
      return;
    }

    talent.decrement();
    setTalentTrees({ ...talentTrees });
  };

  useEffect(() => {
    setTalentTrees(selectedPlayerClass.talentTrees);
  }, [selectedPlayerClass]);

  return (
    <div className="app">
      <PlayerClassList
        playerClasses={playerClasses}
        selectedPlayerClass={selectedPlayerClass}
        selectPlayerClass={selectPlayerClass}
      />
      <div className="options">
        <p>
          Points left: <span>{pointsLeft}</span>
        </p>
        <ResetButton onClick={resetAllTalentTrees}>Reset all</ResetButton>
      </div>
      <div className="talent-trees">
        {Object.values(talentTrees).map((t) => (
          <TalentTree
            key={id + t.name}
            talentTree={t}
            onIncrement={(talent) => incrementTalent(t, talent)}
            onDecrement={(talent) => decrementTalent(t, talent)}
            resetTree={resetTalentTree}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

// TODO: on initialisation, loop over all talent names, throw error if there are any duplicates.
