import { getIconUrl } from "@/lib/img";

import "./style.scss";

interface IconButtonProps {
  icon: string;
  ariaLabel: string;
  imgAlt: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onContextMenu?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton = ({
  icon,
  ariaLabel,
  imgAlt,
  onClick,
  onContextMenu,
  ...rest
}: IconButtonProps) => {
  return (
    <div className="icon-button" {...rest}>
      <button
        aria-label={ariaLabel}
        onClick={onClick}
        onContextMenu={onContextMenu}
      >
        <img src={getIconUrl(icon)} alt={imgAlt} />
      </button>
    </div>
  );
};

export default IconButton;
