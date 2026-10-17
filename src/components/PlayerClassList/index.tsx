import { getIconUrl } from "@/lib/img";
import { PlayerClass, PlayerClassName } from "@/lib/types";

import "./style.scss";
import { useId } from "react";
import IconButton from "../IconButton";

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
