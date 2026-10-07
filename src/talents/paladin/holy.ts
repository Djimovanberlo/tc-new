import { MultiRankTalent, SingleRankTalent } from "@/lib/classes";
import { talentNames } from "@/lib/constants";
import { TalentTier, TalentTree } from "@/lib/types";

const tier1: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.paladin.divineStrength,
    "ability_golemthunderclap",
    ["Increases your Strength by ", "%."],
    [[2, 4, 6, 8, 10]],
  ),
  new MultiRankTalent(
    talentNames.paladin.divineIntellect,
    "spell_nature_sleep",
    ["Increases your total Intellect by ", "%."],
    [[2, 4, 6, 8, 10]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.paladin.healingLight,
    "spell_holy_holybolt",
    [
      "Increases the amount healed by your Holy Light, Flash of Light, and Holy Shock spells by ",
      "%.",
    ],
    [[4, 8, 12]],
  ),
  new MultiRankTalent(
    talentNames.paladin.spiritualFocus,
    "spell_arcane_blink",
    [
      "Gives your Flash of Light, Holy Light, and Light's Vigil spells a ",
      "% chance to not lose casting time when you take damage.",
    ],
    [[35, 70]],
  ),
  new MultiRankTalent(
    talentNames.paladin.improvedSeals,
    "ability_thunderbolt",
    ["Increases the damage done by your Seals and Judgements by ", "%."],
    [[5, 10, 15]],
  ),
  new MultiRankTalent(
    talentNames.paladin.unyieldingFaith,
    "spell_holy_unyieldingfaith",
    ["Reduces the duration of Fear and Disorient effects on you by ", "%."],
    [[15, 30]],
  ),
];

const tier3: TalentTier = [
  null,
  new SingleRankTalent(
    talentNames.paladin.voiceOfTruth,
    "inv_misc_horn_03",
    "Grants you immunity to Silence and Interrupt effects for 6 sec.",
  ),
  new MultiRankTalent(
    talentNames.paladin.reverence,
    "spell_holy_divineillumination",
    ["Allows ", "% of your Mana regeneration to continue while casting."],
    [[10, 20, 30]],
  ),
  new MultiRankTalent(
    talentNames.paladin.purifyingPower,
    "spell_holy_purifyingpower",
    [
      "Reduces the mana cost of your Cleanse and Purify spells by ",
      "% and reduces the cooldown of your Exorcism and Holy Wrath spells by ",
      "%.",
    ],
    [
      [10, 20],
      [17, 33],
    ],
  ),
  null,
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.paladin.infusionOfLight,
    "ability_paladin_infusionoflight",
    [
      "Your Holy Shock and Flash of Light critical hits reduce the cast time of your next Holy Light cast within 15 sec by ",
      " sec.",
    ],
    [[0.5, "1.0"]],
  ),
  new MultiRankTalent(
    talentNames.paladin.illumination,
    "spell_holy_greaterheal",
    [
      "After getting a critical effect from your Flash of Light, Holy Light, Light's Vigil, or Holy Shock heal spell you have a ",
      "% chance to gain Mana equal to 50% of the base cost of the spell.",
    ],
    [[20, 40, 60, 80, 100]],
    talentNames.paladin.reverence,
  ),
  new SingleRankTalent(
    talentNames.paladin.divineFavor,
    "spell_holy_heal",
    "When activated, gives your next Flash of Light, Holy Light, or Holy Shock spell a 100% critical effect chance.",
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.paladin.divinePrecision,
    "spell_holy_healingfocus",
    ["Improves your chance to hit with Holy spells by ", "%."],
    [[6, 12, 18]],
    talentNames.paladin.holyShock,
  ),
  new SingleRankTalent(
    talentNames.paladin.holyShock,
    "spell_holy_searinglight",
    "Blasts the target with Holy energy, causing 129 to 139 Holy damage to an enemy, or 110 to 118 healing to an ally.",
  ),
  new MultiRankTalent(
    talentNames.paladin.consecratedGround,
    "spell_holy_innerfire",
    [
      "Gives your Holy spells ",
      "% increased damage against the first 4 enemies that enter your Consecration.",
    ],
    [[5, 10]],
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.paladin.holyPower,
    "spell_holy_power",
    [
      "Increases the critical strike chance of your Holy Shock and Holy Strike spells by ",
      "%, and all other spells by ",
      "%.",
    ],
    [
      [3, 6, 9, 12, 15],
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
    talentNames.paladin.lightsVigil,
    "ability_paladin_judgementofthepure",
    "Applies Light's Vigil to the target for 30 sec. Your next Holy Shock cast on them triggers no cooldown and causes enemy targets to suffer 175 to 189 Holy damage and refund 75% of Light's Vigil's Mana cost, or allied targets to heal their party for <!--ppl40:49:324:120-->326 to 344. You may only have one Light's Vigil active per party.",
    talentNames.paladin.holyShock,
  ),
  null,
  null,
];

export const holy: TalentTree = {
  name: "Holy",
  icon: "spell_holy_holybolt",
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
