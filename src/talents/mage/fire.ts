import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.wakeOfFire,
    "spell_fire_lavaspawn",
    [
      "Reduces the cooldown of your Fire Blast spell by ",
      " sec. Killing a non-trivial target increases the critical strike chance of your next Fire Blast cast within 30 sec by ",
      "%.",
    ],
    [
      [1, 2],
      [25, 50],
    ],
  ),
  new MultiRankTalent(
    talentNames.mage.incineration,
    "spell_fire_flameshock",
    [
      "Increases the critical strike chance of your Fire Blast, Ice Lance, Arcane Blast, and Scorch spells by ",
      "%.",
    ],
    [[2, 4, 6]],
  ),
  new MultiRankTalent(
    talentNames.mage.improvedFireball,
    "spell_fire_flamebolt",
    [
      "Reduces the casting time of your Fireball and Frostfire Bolt spells by ",
      " sec.",
    ],
    [[0.1, 0.2, 0.3, 0.4, 0.5]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.ignite,
    "spell_fire_incinerate",
    [
      "Your critical strikes from Fire damage spells cause the target to burn for an additional ",
      "% of your spell's damage over 4 sec.",
    ],
    [[8, 16, 24, 32, 40]],
  ),
  new MultiRankTalent(
    talentNames.mage.flameThrowing,
    "spell_fire_flare",
    ["Increases the range of your Fire spells by ", " yards."],
    [[3, 6]],
  ),
  new MultiRankTalent(
    talentNames.mage.impact,
    "spell_fire_meteorstorm",
    ["Gives your Fire spells a ", "% chance to stun the target for 2 sec."],
    [[3, 7, 10]],
  ),
  null,
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.burningSoul,
    "spell_fire_fire",
    [
      "Gives your Fire spells a ",
      "% chance to not lose casting time when you take damage and reduces the threat caused by your Fire spells by ",
      "%.",
    ],
    [
      [23, 47, 70],
      [10, 20, 30],
    ],
  ),
  new MultiRankTalent(
    talentNames.mage.improvedFlamestrike,
    "spell_fire_selfdestruct",
    [
      "Increases the critical strike chance of your Flamestrike spell by ",
      "%.",
    ],
    [[5, 10, 15]],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.mage.pyroblast,
    "spell_fire_fireball02",
    "Hurls an immense fiery boulder that causes <!--ppl20:24:110:150-->101 to 131 Fire damage and an additional 44 Fire damage over 12 sec.",
  ),
  null,
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.improvedScorch,
    "spell_fire_windsofwoe",
    [
      "Your Scorch spell has a ",
      "% chance to cause your target to be vulnerable to Fire damage. This vulnerability increases all Fire damage you deal to your target by 3% and lasts 30 sec, stacking up to 5 times.",
    ],
    [[33, 67, 100]],
  ),
  new MultiRankTalent(
    talentNames.mage.improvedFireWard,
    "spell_fire_firearmor",
    [
      "Causes your Fire Ward to have a ",
      "% chance to reflect Fire spells while active.",
    ],
    [[10, 20]],
  ),
  new SingleRankTalent(
    talentNames.mage.heatingUp,
    "spell_fire_firebolt",
    "Non-periodic critical strikes with Fireball, Frostfire Bolt, Fire Blast, and Scorch reduce the cast time of your next Pyroblast cast within 20 sec by 25%, stacking up to 3 times.",
    talentNames.mage.pyroblast,
  ),
  new MultiRankTalent(
    talentNames.mage.masterOfElements,
    "spell_fire_masterofelements",
    [
      "Your Fire and Frost critical strikes will refund ",
      "% of their base mana cost.",
    ],
    [[10, 20, 30]],
  ),
];

const tier5: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.mage.criticalMass,
    "spell_nature_wispheal",
    ["Increases the critical strike chance of your Fire spells by ", "%."],
    [[2, 4, 6]],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.mage.blastWave,
    "spell_holy_excorcism_02",
    "A wave of flame radiates outward from the caster, damaging all enemies caught within the blast for <!--ppl30:36:163:100-->154 to 184 Fire damage, and Dazing them for 50% reduced movement speed for 6 sec.",
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.mage.firePower,
    "spell_fire_immolation",
    ["Increases the damage done by your Fire spells by ", "%."],
    [[2, 4, 6, 8, 10]],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.mage.combustion,
    "spell_fire_sealoffire",
    "When activated, this spell causes each of your Fire damage spell hits to increase your critical strike chance with Fire damage spells by 10%.  This effect lasts until you have caused 3 non-periodic critical strikes with Fire spells.",
    talentNames.mage.criticalMass,
  ),
  null,
  null,
];

export const fire = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
