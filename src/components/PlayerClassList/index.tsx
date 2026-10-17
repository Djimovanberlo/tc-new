import { useId } from "react";

import { PlayerClass, PlayerClassName } from "@/lib/types";
import IconButton from "@/components/IconButton";
import "./style.scss";

interface PlayerClassListProps {
  playerClasses: PlayerClass[];
  selectedPlayerClass: PlayerClass;
  selectPlayerClass: (playerClassName: PlayerClassName) => void;
}

const PlayerClassList = ({
  playerClasses,
  selectedPlayerClass,
  selectPlayerClass,
}: PlayerClassListProps) => {
  const id = useId();

  return (
    <div className="player-class-list">
      {playerClasses.map((pc) => (
        <IconButton
          key={id + pc.name}
          data-selected={pc.name === selectedPlayerClass.name}
          icon={pc.icon}
          ariaLabel={"select class: " + pc.name}
          imgAlt={pc.name}
          onClick={() => selectPlayerClass(pc.name)}
        />
      ))}
    </div>
  );
};

export default PlayerClassList;
