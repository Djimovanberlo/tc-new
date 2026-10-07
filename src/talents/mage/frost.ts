import { MultiRankTalent, SingleRankTalent } from "@/lib/classes";
import { talentNames } from "@/lib/constants";
import { TalentTier, TalentTree } from "@/lib/types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.frostWarding,
    "spell_frost_frostward",
    [
      "Increases the Armor and resistance given by your Frost Armor and Ice Armor spells by ",
      "%. In addition, gives your Frost Ward a ",
      "% chance to reflect Frost spells and effects while active.",
    ],
    [
      [15, 30],
      [10, 20],
    ],
  ),
  new MultiRankTalent(
    talentNames.mage.improvedFrostbolt,
    "spell_frost_frostbolt02",
    ["Reduces the casting time of your Frostbolt spell by ", " sec."],
    [[0.1, 0.2, 0.3, 0.4, 0.5]],
  ),
  new MultiRankTalent(
    talentNames.mage.elementalPrecision,
    "spell_ice_magicdamage",
    ["Improves your chance to hit with Frost and Fire spells by ", "%."],
    [[1, 2, 3, 4, 5]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.iceShards,
    "spell_frost_iceshard",
    [
      "Increases the critical strike damage bonus of your Frost spells by ",
      "%.",
    ],
    [[20, 40, 60, 80, 100]],
  ),
  new MultiRankTalent(
    talentNames.mage.permafrost,
    "spell_frost_wisp",
    [
      "Increases the duration of your Chill effects by ",
      "% and reduces the target's speed by an additional ",
      "%.",
    ],
    [
      [11, 22, 33],
      [3, 7, 10],
    ],
  ),
  new MultiRankTalent(
    talentNames.mage.improvedFrostNova,
    "spell_frost_freezingbreath",
    ["Reduces the cooldown of your Frost Nova spell by ", " sec."],
    [[2, 4]],
  ),
  new MultiRankTalent(
    talentNames.mage.frostbite,
    "spell_frost_frostarmor",
    ["Gives your Chill effects a ", "% chance to Freeze the target for 5 sec."],
    [[5, 10, 15]],
  ),
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.piercingIce,
    "spell_frost_frostbolt",
    ["Increases the damage done by your Frost spells by ", "%."],
    [[2, 4, 6]],
  ),
  new MultiRankTalent(
    talentNames.mage.frostChanneling,
    "spell_frost_stun",
    [
      "Reduces the mana cost of your Frost spells by ",
      "% and reduces the threat caused by your Frost spells by ",
      "%.",
    ],
    [
      [5, 10, 15],
      [10, 20, 30],
    ],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.mage.iceLance,
    "spell_frost_frostblast",
    "Deals <!--ppl20:26:28:35-->28 to 32 Frost damage to an enemy target. Deals 300% increased damage to Frozen targets.",
  ),
  new MultiRankTalent(
    talentNames.mage.improvedBlizzard,
    "spell_frost_icestorm",
    [
      "Adds a Chill effect to your Blizzard spell. This effect lowers the target's movement speed by ",
      "% for 1.5 sec.",
    ],
    [[15, 25, 40]],
  ),
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.arcticReach,
    "spell_shadow_darkritual",
    [
      "Increases the range of your Frostbolt and Blizzard spells and the radius of your Frost Nova and Cone of Cold spells by ",
      "%.",
    ],
    [[10, 20]],
  ),
  new SingleRankTalent(
    talentNames.mage.iceBlock,
    "spell_frost_frost",
    "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move, or cast spells.",
  ),
  null,
  new MultiRankTalent(
    talentNames.mage.shatter,
    "spell_frost_frostshock",
    [
      "Increases the critical strike chance of all your spells against Frozen targets by ",
      "%.",
    ],
    [[17, 33, 50]],
  ),
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.improvedConeOfCold,
    "spell_frost_glacier",
    ["Increases the damage dealt by your Cone of Cold spell by ", "%."],
    [[12, 23, 35]],
  ),
  new SingleRankTalent(
    talentNames.mage.coldSnap,
    "spell_frost_wizardmark",
    "Finishes the remaining cooldown on all your other Frost spells.",
  ),
  // TODO: check manually: description contains markup
  // TODO: check manually: could not split rank descriptions into template + values automatically; per-rank texts below, check manually
  new MultiRankTalent(
    talentNames.mage.fingersOfFrost,
    "ability_mage_wintersgrasp",
    ["", ""],
    [
      [
        "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 1 <!--singular:spell:spells-->spell<!--singular--> cast as if the target were Frozen. Lasts 15 sec.",
        "Gives your Chill effects a 15% chance to grant you the Fingers of Frost effect, which treats your next 2 <!--singular:spell:spells-->spells<!--singular--> cast as if the target were Frozen. Lasts 15 sec.",
      ],
    ],
    talentNames.mage.iceLance,
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.mage.wintersChill,
    "spell_frost_chillingblast",
    [
      "Gives your Frost damage spells a ",
      "% chance to apply the Winter's Chill effect, which increases the chance your Ice Lance and Frostbolt spells will critically hit the target by 2% for 15 sec. Stacks up to ",
      " times.",
    ],
    [
      [20, 40, 60, 80, 100],
      [1, 2, 3, 4, 5],
    ],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.mage.iceBarrier,
    "spell_ice_lament",
    "Instantly shields you, absorbing <!--ppl40:46:431:280-->448 damage. Lasts 1 min. While the shield holds, your spellcasts will not be interrupted or delayed from taking damage.",
    talentNames.mage.coldSnap,
  ),
  null,
  null,
];

export const frost: TalentTree = {
  name: "Frost",
  icon: "spell_frost_frostbolt02",
  tiers: {
    tier1,
    tier2,
    tier3,
    tier4,
    tier5,
    tier6,
    tier7,
  },
};
