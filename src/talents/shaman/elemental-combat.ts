import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.convection,
    "spell_nature_wispsplode",
    [
      "Reduces the mana cost of your Shock, Lightning Bolt, Lava Burst, and Chain Lightning spells by ",
      "%.",
    ],
    [["2", "4", "6", "8", "10"]],
  ),
  new MultiRankTalent(
    talentNames.concussion,
    "spell_nature_earthshock",
    [
      "Increases the damage done by your Lightning Bolt, Chain Lightning, and Earth Shock spells by ",
      "%.",
    ],
    [["1", "2", "3", "4", "5"]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.elementalWarding,
    "spell_nature_spiritarmor",
    ["Reduces damage taken from Fire, Frost, and Nature effects by ", "%."],
    [["3", "7", "10"]],
  ),
  new MultiRankTalent(
    talentNames.reverberation,
    "spell_frost_frostward",
    ["Reduces the cooldown of your Shock spells by ", " sec."],
    [["0.2", "0.4", "0.6", "0.8", "1.0"]],
  ),
  new MultiRankTalent(
    talentNames.callOfFlame,
    "spell_fire_immolation",
    [
      "Increases the damage done by your Fire Totems and by your Flame Shock, Fire Nova, and Lava Burst spells by ",
      "%.",
    ],
    [["5", "10", "15"]],
  ),
  new MultiRankTalent(
    talentNames.elementalDevastation,
    "spell_fire_elementaldevastation",
    [
      "Your offensive spell critical strikes will increase your chance to get a critical strike with melee attacks by ",
      "% for 10 sec.",
    ],
    [["3", "6", "9"]],
  ),
];

const tier3: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.elementalFocus,
    "spell_shadow_manaburn",
    "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost, or Nature damage spell.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
  ),
  new MultiRankTalent(
    talentNames.elementalAlacrity,
    "spell_lightning_lightningbolt01",
    [
      "Reduces the cast time of your Lightning Bolt, Chain Lightning, and Lava Burst spells by ",
      " sec.",
    ],
    [["0.17", "0.33", "0.50"]],
  ),
  null,
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.improvedFireNova,
    "spell_fire_sealoffire",
    [
      "Increases the damage done by your Fire Nova spell by ",
      "% and reduces its cooldown by ",
      " sec.",
    ],
    [
      ["10", "20"],
      ["2", "4"],
    ],
  ),
  new MultiRankTalent(
    talentNames.eyeOfTheStorm,
    "spell_nature_eyeofthestorm",
    [
      "Reduces the pushback suffered from damaging attacks while casting Lightning Bolt, Chain Lightning, and Lava Burst by ",
      "%.",
    ],
    [["23", "47", "70"]],
  ),
  new SingleRankTalent(
    talentNames.callOfThunder,
    "spell_nature_callstorm",
    "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by 3%.",
    talentNames.elementalAlacrity,
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.elementalReach,
    "spell_nature_stormreach",
    [
      "Increases the range of your Lightning Bolt, Chain Lightning, Fire Nova, and Lava Burst spells by ",
      " yards, and increases the range of your Flame Shock spell by ",
      " yards.",
    ],
    [
      ["3", "6"],
      ["8", "15"],
    ],
  ),
  new MultiRankTalent(
    talentNames.lightningOverload,
    "spell_nature_lightningoverload",
    [
      "Gives your Lightning Bolt and Chain Lightning spells a ",
      "% chance to cast a second, similar spell on the same target at no additional cost that causes half damage and no threat.",
    ],
    [["3", "7", "10"]],
  ),
  null,
  new SingleRankTalent(
    talentNames.earthbound,
    "spell_nature_stranglevines",
    "Your Earthbind Totem Immobilizes nearby targets for 5 sec when cast.",
  ),
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.elementalFury,
    "spell_fire_volcano",
    [
      "Increases the critical strike damage bonus of your Searing and Magma Totems and your Fire, Frost, and Nature spells by ",
      "%.",
    ],
    [["20", "40", "60", "80", "100"]],
    talentNames.callOfThunder,
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.lavaBurst,
    "spell_shaman_lavaburst",
    "You hurl molten lava at the target, dealing <!--ppl40:48:164:90-->150 to 192 Fire damage. If your Flame Shock is on the target, Lava Burst deals 20% increased damage.",
    talentNames.lightningOverload,
  ),
  null,
  null,
];

export const elementalCombat = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
