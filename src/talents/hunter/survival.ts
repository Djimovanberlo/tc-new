import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.hunter.improvedTracking,
    "inv_misc_head_dragon_black",
    [
      "While tracking Beasts, Demons, Dragonkin, Elementals, Giants, Humanoids, or Undead, all damage you deal to the tracked creature type is increased by ",
      "%.",
    ],
    [["1", "2", "3", "4", "5"]],
  ),
  new MultiRankTalent(
    talentNames.hunter.deflection,
    "ability_parry",
    ["Increases your Parry chance by ", "%."],
    [["1", "2", "3", "4", "5"]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.hunter.entrapment,
    "spell_nature_stranglevines",
    [
      "When your traps are triggered, all affected targets are Entrapped, preventing them from moving for ",
      " sec.",
    ],
    [["1", "2", "3", "4", "5"]],
  ),
  new MultiRankTalent(
    talentNames.hunter.savageStrikes,
    "ability_racial_bloodrage",
    [
      "Increases the critical strike chance of all your melee abilities by ",
      "%.",
    ],
    [["2", "4"]],
  ),
  new MultiRankTalent(
    talentNames.hunter.survivalist,
    "spell_shadow_twilight",
    ["Increases your total Health by ", "%."],
    [["2", "4", "6", "8", "10"]],
  ),
  new MultiRankTalent(
    talentNames.hunter.improvedWingClip,
    "ability_rogue_trip",
    [
      "Gives your Wing Clip ability a ",
      "% chance to immobilize the target for 5 sec.",
    ],
    [["7", "13", "20"]],
  ),
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.hunter.cleverTraps,
    "spell_nature_timestop",
    [
      "Increases the duration of Freezing and Frost trap effects by ",
      "% and the damage of Immolation and Explosive trap effects by ",
      "%.",
    ],
    [
      ["15", "30"],
      ["15", "30"],
    ],
  ),
  new MultiRankTalent(
    talentNames.hunter.surefooted,
    "ability_kick",
    [
      "Increases your hit chance by ",
      "% and reduces the duration of movement impairing effects on you by ",
      "%.",
    ],
    [
      ["1", "2", "3"],
      ["10", "20", "30"],
    ],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.hunter.deterrence,
    "ability_whirlwind",
    "When activated, increases your Dodge and Parry chance by 25% for 10 sec.<!--cooldown:1310496:3 min cooldown-->",
  ),
  null,
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.hunter.survivalTactics,
    "ability_ensnare",
    [
      "Increases your chance to hit with your Trap and Feign Death abilities by ",
      "%.",
    ],
    [["5", "10"]],
  ),
  new MultiRankTalent(
    talentNames.hunter.predatorsEdge,
    "ability_dualwield",
    [
      "Increases your melee critical strike damage by ",
      "% and your Off Hand weapon damage by ",
      "%.",
    ],
    [
      ["6", "12", "18", "24", "30"],
      ["10", "20", "30", "40", "50"],
    ],
  ),
  new SingleRankTalent(
    talentNames.hunter.counterattack,
    "ability_warrior_challange",
    "A strike that becomes active after parrying an opponent's attack. This attack deals 50% weapon damage plus 26 and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried.",
    talentNames.hunter.deterrence,
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.hunter.resourcefulness,
    "ability_hunter_resourcefulness",
    [
      "Reduces the mana cost of your Trap abilities and melee abilities by ",
      "%. In addition, your critical strikes have a ",
      "% chance to allow 50% of your Mana regeneration to continue while casting for 30 sec.",
    ],
    [
      ["30", "60"],
      ["30", "60"],
    ],
  ),
  new MultiRankTalent(
    talentNames.hunter.exposePrey,
    "ability_hunter_swiftstrike",
    [
      "Your attacks against targets with Hunter's Mark have a ",
      "% chance to activate your Mongoose Bite for 5 sec.",
    ],
    [["5", "10"]],
  ),
  new MultiRankTalent(
    talentNames.hunter.survivalistsDiscipline,
    "ability_hunter_mastertactitian",
    ["Reduces the cooldown of your Trap and Deterrence abilities by ", "%."],
    [["20", "40"]],
  ),
  new SingleRankTalent(
    talentNames.hunter.striderKick,
    "ability_hunter_pet_tallstrider",
    "A powerful kick that deals 100% melee weapon damage and increases movement speed by 30% for 3 sec.",
  ),
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.hunter.lightningReflexes,
    "spell_nature_invisibilty",
    ["Increases your Agility by ", "%."],
    [["2", "4", "6", "8", "10"]],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.hunter.laceratingStrikes,
    "ability_gouge",
    "Your Mongoose Bite also causes the target to Bleed for damage equal to 40% of the damage done by Mongoose Bite over 21 sec",
    talentNames.hunter.exposePrey,
  ),
  null,
  null,
];

export const survival = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
