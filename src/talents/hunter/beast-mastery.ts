import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.deadlyAspects,
    "spell_nature_ravenform",
    [
      "While Aspect of the Hawk is active, Auto Shot has a ",
      "% chance of increasing ranged attack speed by 30% for 12 sec. While Aspect of the Beast is active, all melee auto attacks have a ",
      "% chance of increasing melee attack speed by 30% for 12 sec.",
    ],
    [
      ["2", "4", "6", "8", "10"],
      ["2", "4", "6", "8", "10"],
    ],
  ),
  new MultiRankTalent(
    talentNames.enduranceTraining,
    "spell_nature_reincarnation",
    ["Increases the Health and Armor of your pets by ", "%."],
    [["3", "6", "9", "12", "15"]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.focusedFire,
    "inv_weapon_crossbow_10",
    [
      "Increases all damage you and your pet deal by ",
      "% while your pet is active.",
    ],
    [["1", "2"]],
  ),
  new MultiRankTalent(
    talentNames.improvedAspectOfTheMonkey,
    "ability_hunter_aspectofthemonkey",
    [
      "Increases the Dodge bonus of your Aspect of the Monkey by ",
      "%. Additionally, your pet gains 50% of the effect of your Aspect of the Monkey ability.",
    ],
    [["2", "4", "6"]],
  ),
  new MultiRankTalent(
    talentNames.pathfinding,
    "ability_mount_jungletiger",
    [
      "Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ",
      "%.",
    ],
    [["3", "6"]],
  ),
  new MultiRankTalent(
    talentNames.improvedRevivePet,
    "ability_hunter_beastsoothe",
    [
      "Revive Pet's casting time is reduced by ",
      " sec, mana cost is reduced by ",
      "%, and increases the health your pet returns with by an additional ",
      "%.",
    ],
    [
      ["3", "6"],
      ["20", "40"],
      ["15", "30"],
    ],
  ),
];

const tier3: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.bestialSwiftness,
    "ability_druid_dash",
    "Increases the movement speed of your pets by 30%.",
  ),
  new MultiRankTalent(
    talentNames.unleashedFury,
    "ability_bullrush",
    ["Increases the damage done by your pets and hawks by ", "%."],
    [["3", "6", "9", "12", "15"]],
  ),
  null,
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.improvedMendPet,
    "ability_hunter_mendpet",
    [
      "Gives your Mend Pet spell a ",
      "% chance of cleansing 1 Curse, Disease, Magic, or Poison effect from your pet each time it heals and reduces the Mana cost by ",
      "%.",
    ],
    [
      ["15", "50"],
      ["10", "20"],
    ],
  ),
  null,
  new MultiRankTalent(
    talentNames.ferocity,
    "inv_misc_monsterclaw_04",
    ["Increases the critical strike chance of your pets and hawks by ", "%."],
    [["2", "4", "6", "8", "10"]],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.summonHawk,
    "ability_hunter_animalhandler",
    'Command a hawk to dive-bomb your targeted enemy, dealing [32 / <span class="q2">Ferocity</span>: <span class="q9">48</span> / <span class="q2">Unleashed Fury</span>: <span class="q9">38</span> + (Ranged Attack Power * (0.05))] Physical damage and continuing its assault for 18 sec. Only 2 hawks can be active at once. Summon Hawk shares its cooldown with Arcane Shot.',
  ),
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.spiritBond,
    "ability_druid_demoralizingroar",
    [
      "While your pet is active, you and your pet will regenerate 1% of total health every ",
      " sec.",
    ],
    [["10", "5"]],
  ),
  new SingleRankTalent(
    talentNames.intimidation,
    "ability_devour",
    "Command your pet to Stun the target for 3 sec on its next successful attack, which also gains 100% increased critical strike chance. Generates high threat.",
    talentNames.bestialSwiftness,
  ),
  null,
  new MultiRankTalent(
    talentNames.bestialDiscipline,
    "spell_nature_abolishmagic",
    [
      "Increases the Focus regeneration of your pets by ",
      "% and allows ",
      "% of your Mana regeneration to continue while casting.",
    ],
    [
      ["10", "20"],
      ["25", "50"],
    ],
  ),
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.frenzy,
    "inv_misc_monsterclaw_03",
    [
      "Gives your pet a ",
      "% chance to gain a 30% attack speed increase for 8 sec after dealing a critical strike.",
    ],
    [["20", "40", "60", "80", "100"]],
    talentNames.ferocity,
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.bestialWrath,
    "ability_druid_ferociousbite",
    "Send your pet into a rage causing 50% additional damage for 18 sec.  While enraged, the beast does not feel pity or remorse or fear and it cannot be stopped unless killed.",
    talentNames.intimidation,
  ),
  null,
  null,
];

export const beastMastery = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
