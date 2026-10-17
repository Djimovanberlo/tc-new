import { useId, useState } from "react";

import { playerClasses } from "@/talents";
import { PlayerClass, PlayerClassName } from "@/lib/types";
import PlayerClassList from "./components/PlayerClassList";
import TalentTree from "./components/TalentTree";

import "./app.scss";

// NOTE: some talent names repeat across classes (e.g. Deflection), so talentNames is nested per
// class (talentNames.druid.improvedWrath) to keep every key unique. Names are unique within a
// class, so `requires` and the duplicate-name TODO in errors.ts only need to check within one class.
function App() {
  const id = useId();
  const [selectedPlayerClass, setSelectedPlayerClass] = useState<PlayerClass>(
    playerClasses[0],
  );

  const selectPlayerClass = (playerClassName: PlayerClassName) => {
    setSelectedPlayerClass(
      playerClasses.find((c) => c.name === playerClassName)!,
    );
  };

  return (
    <div className="app">
      <PlayerClassList
        playerClasses={playerClasses}
        selectedPlayerClass={selectedPlayerClass}
        selectPlayerClass={selectPlayerClass}
      />
      <div className="talent-trees">
        {Object.values(selectedPlayerClass.talentTrees).map((t) => (
          <TalentTree key={id + t.name} talentTree={t} />
        ))}
      </div>
    </div>
  );
}

export default App;

// TODO: on initialisation, loop over all talent names, throw error if there are any duplicates.
