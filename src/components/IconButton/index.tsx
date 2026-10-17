import { getIconUrl } from "@/lib/img";

import "./style.scss";

interface IconButtonProps {
  icon: string;
  ariaLabel: string;
  imgAlt: string;
  onClick: () => void;
}

const IconButton = ({
  icon,
  ariaLabel,
  imgAlt,
  onClick,
  ...rest
}: IconButtonProps) => {
  return (
    <div className="icon-button" {...rest}>
      <button aria-label={ariaLabel} onClick={onClick}>
        <img src={getIconUrl(icon)} alt={imgAlt} />
      </button>
    </div>
  );
};

export default IconButton;
