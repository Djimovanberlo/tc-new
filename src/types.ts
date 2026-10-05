import { Talent } from "./classes";
import { talentNames } from "./constants";

export type TalentName = (typeof talentNames)[keyof typeof talentNames];

export type TalentTree = {
  tier1: TalentTier;
  tier2: TalentTier;
  tier3: TalentTier;
  tier4: TalentTier;
  tier5: TalentTier;
  tier6: TalentTier;
  tier7: TalentTier;
};

type TalentSlot = Talent | null;

export type TalentTier = readonly [
  TalentSlot,
  TalentSlot,
  TalentSlot,
  TalentSlot,
  TalentSlot,
];

export type TalentTrees = {
  [key: string]: TalentTree;
};
