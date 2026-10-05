import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.camouflage,
    "ability_stealth",
    [
      "Reduces your speed penalty from your Stealth ability by ",
      "% and reduces its cooldown by ",
      " sec.",
    ],
    [
      ["3", "6", "9", "12", "15"],
      ["2", "3", "4", "5", "6"],
    ],
  ),
  // TODO: check manually: description contains markup
  new MultiRankTalent(
    talentNames.rogue.masterOfDeception,
    "spell_shadow_charm",
    [
      "Reduces the chance enemies have to detect you while in Stealth mode as if you were ",
      " <!--singular:level:levels-->levels<!--singular--> higher.",
    ],
    [["1", "2", "3"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.opportunity,
    "ability_warrior_warcry",
    [
      "Increases the damage dealt by your Backstab, Garrote, Ambush, and Mutilate abilities by ",
      "%.",
    ],
    [["5", "10"]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.setup,
    "spell_nature_mirrorimage",
    [
      "Gives you a ",
      "% chance to add a Combo Point to your target after Dodging one of their attacks or fully resisting one of their spells.",
    ],
    [["33", "67", "100"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.elusiveness,
    "spell_magic_lesserinvisibilty",
    ["Reduces the cooldown of your Vanish and Blind abilities by ", " sec."],
    [["45", "90"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.dirtyTricks,
    "ability_sap",
    ["Reduces the Energy cost of your Sap and Blind abilities by ", "%."],
    [["25", "50"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.improvedAmbush,
    "ability_rogue_ambush",
    ["Increases the critical strike chance of your Ambush ability by ", "%."],
    [["15", "30", "45"]],
  ),
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.initiative,
    "spell_shadow_fumble",
    [
      "Gives you a ",
      "% chance to add an additional combo point to your target when using your Ambush, Garrote, or Cheap Shot ability.",
    ],
    [["33", "67", "100"]],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.rogue.ghostlyStrike,
    "spell_shadow_curse",
    "A strike that deals 125% (180% if a Dagger is equipped in your Main Hand) weapon damage and increases your chance to dodge by 15% for 7 sec.  Awards 1 combo <!--singular:point:points-->point<!--singular-->.",
  ),
  // TODO: check manually: description contains markup
  new MultiRankTalent(
    talentNames.rogue.improvedDistract,
    "ability_rogue_distract",
    [
      "Increases the radius of your Distract ability by ",
      " yds, and further reduces the Stealth detection of distracted enemies as though they were an additional ",
      " <!--singular:level:levels-->levels<!--singular--> lower.",
    ],
    [
      ["3", "5"],
      ["1", "2"],
    ],
  ),
  null,
];

const tier4: TalentTier = [
  null,
  // TODO: check manually: description contains markup
  new MultiRankTalent(
    talentNames.rogue.heightenedSenses,
    "ability_ambush",
    [
      "Increases your Stealth detection as if you were ",
      " <!--singular:level:levels-->levels<!--singular--> higher and reduces your chance to be hit by spells and ranged attacks by ",
      "%.",
    ],
    [
      ["1", "3"],
      ["2", "4"],
    ],
  ),
  new SingleRankTalent(
    talentNames.rogue.premeditation,
    "spell_shadow_possession",
    "Adds 2 Combo Points to your target. You must add to or use those combo points within 20 sec or the combo points are lost.",
  ),
  new MultiRankTalent(
    talentNames.rogue.serratedBlades,
    "inv_sword_17",
    [
      "Causes your attacks to ignore ",
      "% of your target's Armor and increases the damage dealt by your Rupture ability by ",
      "%.",
    ],
    [
      ["3", "6", "9"],
      ["10", "20", "30"],
    ],
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.dirtyDeeds,
    "spell_shadow_summonsuccubus",
    [
      "Reduces the Energy cost of your Cheap Shot and Garrote abilities by ",
      ", and your Garrote ability no longer requires you to be behind your target.",
    ],
    [["10", "20"]],
  ),
  new SingleRankTalent(
    talentNames.rogue.preparation,
    "spell_shadow_antishadow",
    "When activated, this ability immediately finishes the cooldown on your other Rogue abilities.",
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.rogue.hemorrhage,
    "spell_shadow_lifedrain",
    "An instant strike that deals 100% weapon damage (145% if a Dagger is equipped) and causes the target to take 15% increased Rupture damage from the Rogue. Lasts 15 sec. Awards 1 Combo <!--singular:Point:Points-->Point<!--singular-->.",
    talentNames.rogue.serratedBlades,
  ),
  null,
];

const tier6: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.quietus,
    "ability_rogue_garrote",
    [
      "Your Sinister Strike, Ghostly Strike, and Hemorrhage abilities cause ",
      "% more damage against targets below 35% health.",
    ],
    [["2", "4", "6", "8", "10"]],
    talentNames.rogue.dirtyDeeds,
  ),
  null,
  new MultiRankTalent(
    talentNames.rogue.cutthroat,
    "classicon_rogue",
    [
      "Your Backstab has a ",
      "% chance to cause your next Ambush within 10 sec to not require Stealth.",
    ],
    [["3", "6", "9", "12", "15"]],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.rogue.thousandCuts,
    "ability_rogue_rupture",
    "When your Rupture ability deals periodic damage, the Energy cost of your next Hemorrhage or Backstab ability within 10 sec is reduced by 3, stacking up to 5 times.",
    talentNames.rogue.preparation,
  ),
  null,
  null,
];

export const subtlety = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
