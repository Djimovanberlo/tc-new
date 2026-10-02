import { talentNames } from "./constants";

export type TalentName = (typeof talentNames)[keyof typeof talentNames];
