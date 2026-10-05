import { MultiRankTalent } from "../../classes";

import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  new MultiRankTalent(
    talentNames.improvedWrath,
    "icon1.png",
    [
      "Reduces the cast time of your Wrath spell by ",
      " sec and its mana cost by ",
      "%.",
    ],
    [
      ["1", "2", "3"],
      ["4", "5", "6"],
    ],
  ),
  null,
  null,
  null,
  null,
];

const tier2: TalentTier = [null, null, null, null, null];
const tier3: TalentTier = [null, null, null, null, null];
const tier4: TalentTier = [null, null, null, null, null];
const tier5: TalentTier = [null, null, null, null, null];
const tier6: TalentTier = [null, null, null, null, null];
const tier7: TalentTier = [null, null, null, null, null];

export const balance = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};

// const tempFeral = { ...balance };

// const tempRestoration = { ...balance };

// const tempTree: TalentTrees = Object.freeze({
//   balance,
//   feral: tempFeral,
//   restoration: tempRestoration,
// });
