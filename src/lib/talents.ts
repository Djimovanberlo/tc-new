import {
  TalentSlot,
  TalentTier,
  TalentTree as TalentTreeType,
} from "@/lib/types";
import { Talent } from "@/lib/classes";

const POINTS_PER_TIER = 5;

const getTalentsFromTree = (talentTree: TalentTreeType) => {
  const talentTiers = Object.values(talentTree.tiers);
  const talentList = talentTiers.flat();

  return { talentTiers, talentList };
};

const getTierIndex = (talentTiers: readonly TalentTier[], talent: Talent) => {
  return talentTiers.findIndex((tier) =>
    tier.some((tieredTalent) => tieredTalent?.name === talent.name),
  );
};

const isPrerequisiteMaxed = (talentTree: TalentTreeType, talent: Talent) => {
  const { talentList } = getTalentsFromTree(talentTree);
  const requiredTalent = talent.requires
    ? talentList.find((t) => t?.name === talent.requires)
    : undefined;

  return (
    !requiredTalent || requiredTalent.currentRank >= requiredTalent.maxRank
  );
};

const hasEnoughPointsForTier = (talentTree: TalentTreeType, talent: Talent) => {
  const { talentTiers, talentList } = getTalentsFromTree(talentTree);
  const currentRankSum = talentList.reduce(
    (sum, t) => sum + (t?.currentRank ?? 0),
    0,
  );

  return currentRankSum >= getTierIndex(talentTiers, talent) * POINTS_PER_TIER;
};

const hasNoInvestedDependents = (
  talentTree: TalentTreeType,
  talent: Talent,
) => {
  const { talentList } = getTalentsFromTree(talentTree);

  return !talentList.some(
    (t) => t?.requires === talent.name && t.currentRank > 0,
  );
};

const keepsHigherTiersUnlocked = (
  talentTree: TalentTreeType,
  talent: Talent,
) => {
  const { talentTiers } = getTalentsFromTree(talentTree);
  const talentTier = getTierIndex(talentTiers, talent);
  const pointsPerTier = talentTiers.map((tier) =>
    tier.reduce((sum, t) => sum + (t?.currentRank ?? 0), 0),
  );

  return pointsPerTier.every((points, tier) => {
    if (tier <= talentTier || points === 0) {
      return true;
    }

    const pointsBelow = pointsPerTier
      .slice(0, tier)
      .reduce((sum, p) => sum + p, 0);

    return pointsBelow - 1 >= tier * POINTS_PER_TIER;
  });
};

export const getIsRequiredByTalent = (
  talentTree: TalentTreeType,
  talent: Talent,
) => {
  const { talentList } = getTalentsFromTree(talentTree);
  const talentRequiredBy = talentList.find((t) => t?.requires === talent.name);
  return talentRequiredBy;
};

export const canIncrementTalent = (
  talentTree: TalentTreeType,
  talent: Talent,
) => {
  return (
    isPrerequisiteMaxed(talentTree, talent) &&
    hasEnoughPointsForTier(talentTree, talent)
  );
};

export const canDecrementTalent = (
  talentTree: TalentTreeType,
  talent: Talent,
) => {
  return (
    hasNoInvestedDependents(talentTree, talent) &&
    keepsHigherTiersUnlocked(talentTree, talent)
  );
};
