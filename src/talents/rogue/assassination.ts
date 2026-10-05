import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.improvedGouge,
    "ability_gouge",
    ["Increases the duration of your Gouge ability by ", " sec."],
    [["0.5", "1", "1.5"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.remorselessAttacks,
    "ability_fiegndead",
    [
      "After killing a non-trivial enemy, gives you a ",
      "% increased critical strike chance on your next Sinister Strike, Backstab, Ambush, Mutilate, or Ghostly Strike. Lasts 20 sec.",
    ],
    [["20", "40"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.malice,
    "ability_racial_bloodrage",
    [
      "Increases your critical strike chance with all attacks and Poisons by ",
      "%.",
    ],
    [["1", "2", "3", "4", "5"]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.ruthlessness,
    "ability_druid_disembowel",
    [
      "Gives your finishing moves a ",
      "% chance to add a Combo Point to your target.",
    ],
    [["20", "40", "60"]],
  ),
  new MultiRankTalent(
    talentNames.rogue.murder,
    "spell_shadow_deathscream",
    ["Increases all damage dealt by ", "% against Humanoid and Giant targets."],
    [["2", "4"]],
  ),
  null,
  new MultiRankTalent(
    talentNames.rogue.improvedSliceAndDice,
    "ability_rogue_slicedice",
    ["Increases the duration of your Slice and Dice ability by ", "%."],
    [["15", "30", "45"]],
  ),
];

const tier3: TalentTier = [
  null,
  new SingleRankTalent(
    talentNames.rogue.relentlessStrikes,
    "ability_warrior_decisivestrike",
    "Your finishing moves have a 20% chance per Combo Point to restore 25 Energy.",
  ),
  // TODO: check manually: description contains markup
  // TODO: check manually: could not split rank descriptions into template + values automatically; per-rank texts below, check manually
  new MultiRankTalent(
    talentNames.rogue.improvedExposeArmor,
    "ability_warrior_riposte",
    ["", ""],
    [
      [
        "Reduces the Energy cost of your Expose Armor ability by 5, and refunds 1 Combo <!--singular:Point:Points-->Point<!--singular--> when cast with 5 Combo Points.",
        "Reduces the Energy cost of your Expose Armor ability by 10, and refunds 2 Combo <!--singular:Point:Points-->Points<!--singular--> when cast with 5 Combo Points.",
      ],
    ],
  ),
  new MultiRankTalent(
    talentNames.rogue.lethality,
    "ability_criticalstrike",
    [
      "Increases the critical strike damage bonus of your Sinister Strike, Gouge, Backstab, Mutilate, Ghostly Strike, and Hemorrhage abilities by ",
      "%.",
    ],
    [["4", "8", "12", "16", "20"]],
    talentNames.rogue.malice,
  ),
  null,
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.vilePoisons,
    "ability_rogue_feigndeath",
    [
      "Increases the damage dealt by your poisons by ",
      "% and gives your poisons an additional ",
      "% chance to resist dispel effects.",
    ],
    [
      ["4", "8", "12", "16", "20"],
      ["8", "16", "24", "32", "40"],
    ],
  ),
  new SingleRankTalent(
    talentNames.rogue.coldBlood,
    "spell_ice_lament",
    "When activated, increases the critical strike chance of your next Sinister Strike, Backstab, Ambush, Eviscerate, or Mutilate by 100%.",
  ),
  new MultiRankTalent(
    talentNames.rogue.improvedPoisons,
    "ability_poisons",
    [
      "Increases the chance to apply Poisons to your target by ",
      "%, and gives Poison applications a ",
      "% chance to not consume a charge.",
    ],
    [
      ["2", "4", "6", "8", "10"],
      ["10", "20", "30", "40", "50"],
    ],
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.rogue.vigor,
    "spell_nature_earthbindtotem",
    ["Increases your maximum Energy by ", "."],
    [["5", "10"]],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.rogue.mutilate,
    "ability_rogue_deadlybrew",
    "Instantly attacks with both weapons for 75% weapon damage plus an additional 17 with each weapon. Damage increased by 20% against Poisoned targets. Awards 2 Combo <!--singular:Point:Points-->Points<!--singular-->.",
  ),
  new MultiRankTalent(
    talentNames.rogue.improvedKidneyShot,
    "ability_rogue_kidneyshot",
    [
      "Enemies Stunned by your Kidney Shot ability take ",
      "% increased damage from your poisons and attacks.",
    ],
    [["5", "10"]],
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.rogue.sealFate,
    "spell_shadow_chilltouch",
    [
      "Your critical strikes from abilities that add Combo Points have a ",
      "% chance to add an additional Combo Point.",
    ],
    [["20", "40", "60", "80", "100"]],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.rogue.venom,
    "inv_sword_31",
    "Finishing move that increases the damage of your Poisons by 30% and your chance to apply Poisons by 10%. Lasts longer per combo point:<br />   1 point  : 9 sec<br />   2 points: 12 sec<br />   3 points: 15 sec<br />   4 points: 18 sec<br />   5 points: 21 sec",
    talentNames.rogue.mutilate,
  ),
  null,
  null,
];

export const assassination = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
