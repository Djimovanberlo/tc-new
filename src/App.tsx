import { useState } from "react";

import { playerClasses } from "@/talents";
import { PlayerClass, PlayerClassName } from "@/lib/types";
import { getIconUrl } from "@/lib/img";

import "./app.scss";
import PlayerClassList from "./components/PlayerClassList";

// NOTE: some talent names repeat across classes (e.g. Deflection), so talentNames is nested per
// class (talentNames.druid.improvedWrath) to keep every key unique. Names are unique within a
// class, so `requires` and the duplicate-name TODO in errors.ts only need to check within one class.
function App() {
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
      <p>{selectedPlayerClass.name}</p>
      <img
        src={getIconUrl(selectedPlayerClass.icon)}
        alt={selectedPlayerClass.name}
      />
      <div style={{ display: "flex" }}>
        {selectedPlayerClass.talentTrees &&
          Object.values(selectedPlayerClass.talentTrees).map((tree) => (
            <div key={tree.name}>
              <p>{tree.name}</p>
              <img src={getIconUrl(tree.icon)} alt={tree.name} />
            </div>
          ))}
      </div>

      <PlayerClassList
        playerClasses={playerClasses}
        selectedPlayerClass={selectedPlayerClass}
        selectPlayerClass={selectPlayerClass}
      />
    </div>
  );
}

export default App;

// TODO: on initialisation, loop over all talent names, throw error if there are any duplicates.
