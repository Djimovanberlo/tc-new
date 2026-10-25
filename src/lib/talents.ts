import {
  ArrowDirection,
  ArrowLength,
  TalentArrow,
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

const findTalentPosition = (talentTree: TalentTreeType, talent: Talent) => {
  const tiers = Object.values(talentTree.tiers);

  for (let tier = 0; tier < tiers.length; tier++) {
    for (let column = 0; column < tiers[tier].length; column++) {
      if (tiers[tier][column]?.name === talent.name) {
        return { tier, column };
      }
    }
  }
};

const isArrowLength = (length: number): length is ArrowLength =>
  length === 1 || length === 2 || length === 3;

export const getArrowProperties = (
  sourceTalent: Talent,
  requiredByTalent: Talent,
  talentTree: TalentTreeType,
) => {
  let arrowLength: ArrowLength | undefined;
  let arrowDirection: ArrowDirection | undefined;

  const source = findTalentPosition(talentTree, sourceTalent);
  const target = findTalentPosition(talentTree, requiredByTalent);

  if (source && target) {
    const tierDistance = target.tier - source.tier;
    const columnDistance = target.column - source.column;
    const columnSpan = Math.abs(columnDistance);

    if (columnDistance === 0 && isArrowLength(tierDistance)) {
      arrowDirection = "down";
      arrowLength = tierDistance;
    } else if (tierDistance === 0 && isArrowLength(columnSpan)) {
      arrowDirection = columnDistance > 0 ? "right" : "left";
      arrowLength = columnSpan;
    }
  }

  return { arrowLength, arrowDirection };
};

const getDependentTalents = (talentTree: TalentTreeType, talent: Talent) => {
  const { talentList } = getTalentsFromTree(talentTree);

  return talentList.filter((t): t is Talent => t?.requires === talent.name);
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

export const getArrows = (talentTree: TalentTreeType, talent: Talent) => {
  const dependentTalents = getDependentTalents(talentTree, talent);
  const arrows: TalentArrow[] = [];

  for (const dependentTalent of dependentTalents) {
    const { arrowLength, arrowDirection } = getArrowProperties(
      talent,
      dependentTalent,
      talentTree,
    );

    if (arrowLength && arrowDirection) {
      arrows.push({
        key: dependentTalent.name,
        length: arrowLength,
        direction: arrowDirection,
        isActive: canIncrementTalent(talentTree, dependentTalent),
      });
    }
  }

  return arrows;
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
