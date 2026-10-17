import { MultiRankTalent, SingleRankTalent } from "@/lib/classes";
import { talentNames } from "@/lib/constants";
import { TalentTier, TalentTree } from "@/lib/types";

const tier1: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.shaman.convection,
    "spell_nature_wispsplode",
    [
      "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by ",
      "%.",
    ],
    [[2, 4, 6, 8, 10]],
  ),
  new MultiRankTalent(
    talentNames.shaman.concussion,
    "spell_nature_earthshock",
    [
      "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by ",
      "%.",
    ],
    [[1, 2, 3, 4, 5]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  // TODO: check manually: position changed (was tier 2 slot 4, now tier 2 slot 1)
  new MultiRankTalent(
    talentNames.shaman.elementalDevastation,
    "spell_fire_elementaldevastation",
    [
      "Your Critical Strikes with direct damage spells increase your chance to get a Critical Strike with melee attacks by ",
      "% for 10 sec.",
    ],
    [[3, 6, 9]],
  ),
  new MultiRankTalent(
    talentNames.shaman.reverberation,
    "spell_frost_frostward",
    ["Reduces the cooldown of your Shock spells by ", " sec."],
    [[0.2, 0.4, 0.6, 0.8, "1.0"]],
  ),
  // TODO: check manually: position changed (was tier 3 slot 3, now tier 2 slot 3)
  new MultiRankTalent(
    talentNames.shaman.elementalAlacrity,
    "spell_lightning_lightningbolt01",
    [
      "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by ",
      " sec.",
    ],
    [[0.17, 0.33, "0.50"]],
  ),
  // TODO: check manually: position changed (was tier 2 slot 3, now tier 2 slot 4)
  new MultiRankTalent(
    talentNames.shaman.callOfFlame,
    "spell_fire_immolation",
    [
      "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by ",
      "%, as well as increases the duration of your Flame Shock spell by ",
      " sec.",
    ],
    [
      [5, 10, 15],
      [3, 6, 9],
    ],
  ),
];

const tier3: TalentTier = [
  null,
  // TODO: check manually: position changed (was tier 3 slot 2, now tier 3 slot 1)
  new SingleRankTalent(
    talentNames.shaman.elementalFocus,
    "spell_shadow_manaburn",
    "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
  ),
  // TODO: check manually: position changed (was tier 2 slot 1, now tier 3 slot 2)
  new MultiRankTalent(
    talentNames.shaman.elementalWarding,
    "spell_nature_spiritarmor",
    ["Reduces damage taken from Fire, Frost, and Nature effects by ", "%."],
    [[3, 7, 10]],
  ),
  null,
  null,
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.shaman.trialByFire,
    "spell_fire_sealoffire",
    [
      "Increases the damage done by your Fire Nova spell by ",
      "% and reduces its cooldown by ",
      " sec, and increases the duration of your Magma Totem by ",
      " sec.",
    ],
    [
      [10, 20],
      [2, 4],
      [10, 20],
    ],
  ),
  new MultiRankTalent(
    talentNames.shaman.eyeOfTheStorm,
    "spell_nature_eyeofthestorm",
    [
      "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by ",
      "%.",
    ],
    [[23, 47, 70]],
  ),
  null,
  // TODO: check manually: position changed (was tier 5 slot 4, now tier 4 slot 4)
  new SingleRankTalent(
    talentNames.shaman.earthbound,
    "spell_nature_stranglevines",
    "Your Earthbind Totem Immobilizes nearby targets for 5 sec when cast.",
  ),
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.shaman.elementalReach,
    "spell_nature_stormreach",
    [
      "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by ",
      " yards and reduces the cooldown of Totemic Projection by ",
      " sec.",
    ],
    [
      [3, 6],
      [10, 20],
    ],
  ),
  // TODO: check manually: description contains markup
  // TODO: check manually: position changed (was tier 7 slot 2, now tier 5 slot 2)
  // TODO: check manually: prerequisite changed (was lightningOverload, now none)
  new SingleRankTalent(
    talentNames.shaman.lavaBurst,
    "spell_shaman_lavaburst",
    "You hurl molten lava at the target, dealing <!--ppl30:38:123:80-->114 to 145 Fire damage. If your Flame Shock is on the target, Lava Burst deals 20% increased damage.",
  ),
  // TODO: check manually: position changed (was tier 5 slot 2, now tier 5 slot 3)
  // TODO: check manually: prerequisite changed (was none, now elementalAlacrity)
  new MultiRankTalent(
    talentNames.shaman.lightningOverload,
    "spell_nature_lightningoverload",
    [
      "Gives your Lightning Bolt and Chain Lightning spells a ",
      "% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
    ],
    [[3, 7, 10]],
    talentNames.shaman.elementalAlacrity,
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  // TODO: check manually: prerequisite changed (was callOfThunder, now lightningOverload)
  new MultiRankTalent(
    talentNames.shaman.elementalFury,
    "spell_fire_volcano",
    [
      "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by ",
      "%.",
    ],
    [[20, 40, 60, 80, 100]],
    talentNames.shaman.lightningOverload,
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.shaman.elementalMastery,
    "spell_nature_wispheal",
    "Gain mastery over Fire and Lightning, reducing the cast time of Lightning Bolt and Lava Burst by 0.5 sec, and removing the cooldown from Chain Lightning. Lasts 15 sec.",
    talentNames.shaman.lavaBurst,
  ),
  null,
  null,
];

export const elementalCombat: TalentTree = {
  name: "Elemental Combat",
  icon: "spell_nature_lightning",
  backgroundImage: "261",
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
