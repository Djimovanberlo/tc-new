export const getIconUrl = (imgName: string): string => {
  return `https://wow.zamimg.com/images/wow/icons/medium/${imgName}.jpg`;
};

export const getBackgroundImgUrl = (imgName: string): string => {
  return `https://wow.zamimg.com/images/wow/talents/backgrounds/classicplus/${imgName}.jpg`;
};

export const getArrowUrl = (imgName: "" | "2"): string => {
  return `https://wow.zamimg.com/images/TalentCalc/arrows/down${imgName}.png`;
};
