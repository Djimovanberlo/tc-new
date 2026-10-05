import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.improvedEviscerate,
    "ability_rogue_eviscerate",
    ["Increases the damage done by your Eviscerate ability by ", "%."],
    [["7", "13", "20"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.improvedSinisterStrike,
    "spell_shadow_ritualofsacrifice",
    ["Reduces the Energy cost of your Sinister Strike ability by ", "."],
    [["3", "5"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.lightningReflexes,
    "spell_nature_invisibilty",
    ["Increases your Dodge chance by ", "%."],
    [["1", "2", "3", "4", "5"]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.puncturingWounds,
    "ability_backstab",
    [
      "Increases the critical strike chance of your Backstab by ",
      "% and your Mutilate by ",
      "%, and gives Backstab a ",
      "% chance to add an additional Combo Point.",
    ],
    [
      ["10", "20", "30"],
      ["5", "10", "15"],
      ["15", "30", "45"],
    ],
  ),
  new MultiRankTalent(
    talentNames.rogue.deflection,
    "ability_parry",
    ["Increases your Parry chance by ", "%."],
    [["2", "4", "6"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.precision,
    "ability_marksmanship",
    ["Improves your chance to hit by ", "%."],
    [["1", "2", "3"]],
  ),
  null,
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.endurance,
    "spell_shadow_shadowward",
    ["Reduces the cooldown of your Sprint and Evasion abilities by ", "%."],
    [["30", "60"]],
  ),
  new SingleRankTalent(
    talentNames.rogue.riposte,
    "ability_warrior_challange",
    "A strike that becomes active after parrying an opponent's attack.  This attack deals 150% weapon damage and disarms the target for 6 sec.",
    talentNames.rogue.deflection,
  ),
  null,
  new MultiRankTalent(
    talentNames.rogue.improvedSprint,
    "ability_rogue_sprint",
    [
      "Gives a ",
      "% chance to remove all movement impairing effects when you activate your Sprint ability.",
    ],
    [["50", "100"]],
  ),
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.improvedKick,
    "ability_kick",
    ["Gives your Kick ability a ", "% chance to Silence the target for 2 sec."],
    [["50", "100"]],
  ),
  new SingleRankTalent(
    talentNames.rogue.flawlessExecution,
    "inv_sword_35",
    "Reduces the Energy cost of your Eviscerate ability by 10.",
  ),
  new MultiRankTalent(
    talentNames.rogue.dualWieldSpecialization,
    "ability_dualwield",
    ["Increases the damage done by your off-hand weapon by ", "%."],
    [["5", "10", "15", "20", "25"]],
    talentNames.rogue.precision,
  ),
  null,
];

const tier5: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.rogue.bladeFlurry,
    "ability_warrior_punishingblow",
    "Increases your melee attack speed by 20% and your melee attacks strike an additional nearby opponent. Lasts 15 sec.",
  ),
  // TODO: check manually: description contains markup
  new MultiRankTalent(
    talentNames.rogue.hackAndSlash,
    "inv_sword_27",
    [
      'Gives your melee weapon attacks a benefit depending on the weapon.<br /><br />    <span style="color: #FFFFFF">Axe/Sword:</span> Your successful<br />    melee attacks have a ',
      '% chance<br />    to trigger an extra attack on the <br />    target.<br /><br />    <span style="color: #FFFFFF">Dagger/Fist:</span> Increases your<br />    critical strike chance by ',
      '%.<br /><br />    <span style="color: #FFFFFF">Mace:</span> Your attacks ignore ',
      "% of<br />    your target's armor.",
    ],
    [
      ["1", "2", "3", "4", "5"],
      ["1", "2", "3", "4", "5"],
      ["3", "6", "9", "12", "15"],
    ],
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.rogue.weaponExpertise,
    "spell_holy_blessingofstrength",
    ["Reduces the chance for your attacks to be Dodged or Parried by ", "%."],
    [["1", "2"]],
    talentNames.rogue.bladeFlurry,
  ),
  new MultiRankTalent(
    talentNames.rogue.aggression,
    "ability_racial_avatar",
    [
      "Increases the damage of your Sinister Strike, Backstab, and Eviscerate abilities by ",
      "%.",
    ],
    [["2", "4", "6"]],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.rogue.adrenalineRush,
    "spell_shadow_shadowworddominate",
    "Increases your Energy regeneration rate by 100% for 15 sec.",
  ),
  null,
  null,
];

export const combat = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
