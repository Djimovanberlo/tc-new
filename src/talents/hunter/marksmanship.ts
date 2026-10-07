import { MultiRankTalent, SingleRankTalent } from "@/lib/classes";
import { talentNames } from "@/lib/constants";
import { TalentTier, TalentTree } from "@/lib/types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.hunter.hawkEye,
    "ability_townwatch",
    ["Increases the range of your ranged weapons by ", " yards."],
    [[2, 4, 6]],
  ),
  new MultiRankTalent(
    talentNames.hunter.improvedConcussiveShot,
    "spell_frost_stun",
    ["Gives your Concussive Shot a ", "% chance to stun the target for 3 sec."],
    [[4, 8, 12, 16, 20]],
  ),
  new MultiRankTalent(
    talentNames.hunter.lethalAttacks,
    "ability_searingarrow",
    ["Increases your critical strike chance with all attacks by ", "%."],
    [[1, 2, 3, 4, 5]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.hunter.improvedStings,
    "ability_hunter_quickshot",
    [
      "Increases the damage of your Serpent Sting ability by ",
      "%, reduces the cooldown of your Viper Sting ability by ",
      " sec, and increases the duration of your Scorpid Sting ability by ",
      " sec.",
    ],
    [
      [6, 13, 20],
      [2, 4, 6],
      [15, 30, 45],
    ],
  ),
  new MultiRankTalent(
    talentNames.hunter.efficiency,
    "spell_frost_wizardmark",
    [
      "Reduces the Mana cost of your Shots, Stings, and melee abilities by ",
      "%.",
    ],
    [[3, 6, 9, 12, 15]],
  ),
  new MultiRankTalent(
    talentNames.hunter.carefulAim,
    "ability_hunter_zenarchery",
    ["Increases your Attack Power by ", "% of your Intellect."],
    [[20, 40, 60, 80, 100]],
  ),
  null,
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.hunter.rapidKilling,
    "ability_hunter_rapidkilling",
    [
      "Reduces the cooldown on your Rapid Fire ability by ",
      " min. In addition, when you kill a non-trivial enemy or it dies while afflicted by your Serpent Sting, you gain Rapid Killing, increasing the damage of your next Shot ability within 20 sec by ",
      "%.",
    ],
    [
      [1, 2],
      [10, 20],
    ],
  ),
  new MultiRankTalent(
    talentNames.hunter.improvedArcaneShot,
    "ability_impalingbolt",
    [
      "Reduces the cooldown of your Arcane Shot by ",
      " sec. Does not affect the cooldown of abilities which share a cooldown with Arcane Shot.",
    ],
    [[0.3, 0.6, 0.9, 1.2, 1.5]],
  ),
  null,
  new SingleRankTalent(
    talentNames.hunter.loneWolf,
    "ability_mount_whitedirewolf",
    "You deal 20% increased damage with all attacks while you do not have an active pet.",
  ),
];

const tier4: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.hunter.trueshotAura,
    "ability_trueshot",
    "Increases the Ranged Attack Power of party members within 45 yds by 30.",
  ),
  new MultiRankTalent(
    talentNames.hunter.mortalShots,
    "ability_piercedamage",
    [
      "Increases the critical strike damage bonus on all ranged abilities by ",
      "%.",
    ],
    [[6, 12, 18, 24, 30]],
    talentNames.hunter.carefulAim,
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.hunter.rapidRecuperation,
    "ability_hunter_rapidregeneration",
    [
      "Hitting a target with your Serpent Sting ability grants you ",
      "% and consuming Rapid Killing grants you ",
      "% of your Mana regeneration while casting for the next 15 sec.",
    ],
    [
      [25, 50],
      [50, 100],
    ],
    talentNames.hunter.rapidKilling,
  ),
  null,
  new MultiRankTalent(
    talentNames.hunter.barrage,
    "ability_upgrademoonglaive",
    [
      "Increases the damage done by your Multi-Shot, Aimed Shot, and Volley abilities by ",
      "%.",
    ],
    [[3, 7, 10]],
  ),
  new SingleRankTalent(
    talentNames.hunter.scatterShot,
    "ability_golemstormbolt",
    "A short-range shot that deals 50% weapon damage and disorients the target for 4 sec.  Any damage caused will remove the effect.  Turns off your attack when used.",
  ),
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.hunter.rangedWeaponSpecialization,
    "inv_weapon_rifle_06",
    ["Increases the damage you deal with ranged weapons by ", "%."],
    [[1, 2, 3, 4, 5]],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.hunter.sniperShot,
    "hunter_pvp_snipershot",
    "A long-range shot that deals ranged damage plus 160 and increases the range of your next 3 Shots by 10 yards for 10 sec.",
    talentNames.hunter.trueshotAura,
  ),
  null,
  null,
];

export const marksmanship: TalentTree = {
  name: "Marksmanship",
  icon: "ability_marksmanship",
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
