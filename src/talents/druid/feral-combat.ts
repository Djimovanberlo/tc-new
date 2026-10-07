import { MultiRankTalent, SingleRankTalent } from "@/lib/classes";
import { talentNames } from "@/lib/constants";
import { TalentTier } from "@/lib/types";

const tier1: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.druid.ferocity,
    "ability_hunter_pet_hyena",
    [
      "Reduces the cost of your Maul, Primal Bite, Swipe, Claw, and Rake abilities by ",
      " Rage or Energy.",
    ],
    [[1, 2, 3, 4, 5]],
  ),
  new MultiRankTalent(
    talentNames.druid.heartOfTheWild,
    "spell_holy_blessingofagility",
    [
      "Increases your Intellect by ",
      "%.  In addition, while in Bear Form or Dire Bear Form your Stamina is increased by ",
      "% and while in Cat Form your Strength is increased by ",
      "%.",
    ],
    [
      [2, 4, 6, 8, 10],
      [4, 8, 12, 16, 20],
      [2, 4, 6, 8, 10],
    ],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.druid.feralSwiftness,
    "spell_nature_spiritwolf",
    [
      "Increases your movement speed while in Cat Form by ",
      "%, and increases your chance to Dodge by ",
      "%.",
    ],
    [
      [15, 30],
      [2, 4],
    ],
  ),
  // TODO: check manually: description contains markup
  new MultiRankTalent(
    talentNames.druid.feralInstinct,
    "ability_ambush",
    [
      "Increases damage done by your Swipe ability by ",
      "% and reduces the chance enemies have to detect you while Prowling as if you were ",
      " <!--singular:level:levels-->levels<!--singular--> higher.",
    ],
    [
      [10, 20, 30],
      [1, 2, 3],
    ],
  ),
  new MultiRankTalent(
    talentNames.druid.brutalImpact,
    "ability_druid_bash",
    [
      "Increases the stun duration of your Bash and Pounce abilities by ",
      " sec and reduces the cooldown of Bash by ",
      " sec.",
    ],
    [
      [0.5, 1],
      [15, 30],
    ],
  ),
  new MultiRankTalent(
    talentNames.druid.thickHide,
    "inv_misc_pelt_bear_03",
    [
      "While in Bear Form, Cat Form, Dire Bear Form, or Moonkin Form, you gain ",
      " additional base Armor per level and another ",
      " base Armor for each point of defense skill beyond five times your level. This amount can be further increased by multipliers from those forms.",
    ],
    [
      [1, 2, 3],
      [0.67, 1.33, "2.00"],
    ],
  ),
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.druid.shreddingAttacks,
    "spell_shadow_vampiricaura",
    [
      "Reduces the Energy cost of your Shred ability by ",
      " and reduces the Rage cost of your Lacerate ability by ",
      ".",
    ],
    [
      [6, 12, 18],
      [1, 2, 3],
    ],
  ),
  new MultiRankTalent(
    talentNames.druid.savageFury,
    "ability_druid_ravage",
    [
      "Increases the damage caused by your Claw, Rake, Shred, Maul, and Swipe abilities by ",
      "%.",
    ],
    [[5, 10]],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.druid.feralCharge,
    "ability_hunter_pet_bear",
    '<!--sp9634:0--><!--sp9634--><!--sp5487:0--><span style="color: #FF2020">Requires Bear Form, Dire Bear Form</span><!--sp5487--><br />Charge an enemy, immobilizing them and interrupting any spell they are casting for 4 sec.<br /><br /><br /><table><tr><td><b>Feral Charge (Cat)</b><br />8 - 25 yd range<table width="100%"><tr><td>Instant</td><th>30 sec cooldown</th></tr></table>Requires Druid<br />Requires level 1</td></tr></table><table><tr><td>Requires Cat Form<br /><span class="q">Leap behind an enemy.</span></td></tr></table>',
  ),
  new MultiRankTalent(
    talentNames.druid.sharpenedClaws,
    "inv_misc_monsterclaw_04",
    [
      "Increases your critical strike chance while in Bear Form, Dire Bear Form, or Cat Form by ",
      "%.",
    ],
    [[3, 6]],
  ),
];

const tier4: TalentTier = [
  null,
  new SingleRankTalent(
    talentNames.druid.shiftingPower,
    "spell_druid_displacement",
    "Instantly convert 0 Mana into 40 Energy. Shifting Power's cost is reduced by effects that reduce the cost of Shapeshifting.",
    talentNames.druid.shreddingAttacks,
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.druid.primalBite,
    "ability_racial_cannibalize",
    "Bite the target, dealing 100% normal damage plus 26 and generating a high amount of threat.<!--cooldown:417141:until canceled-->",
    talentNames.druid.savageFury,
  ),
  new MultiRankTalent(
    talentNames.druid.predatoryStrikes,
    "ability_hunter_pet_cat",
    [
      "Increases your melee Attack Power in Cat Form, Bear Form, and Dire Bear Form by ",
      "% of your level.",
    ],
    [[50, 100, 150]],
  ),
  new MultiRankTalent(
    talentNames.druid.bloodFrenzy,
    "ability_ghoulfrenzy",
    [
      "Gives you a ",
      "% chance to gain an additional 5 Rage any time you get a critical strike while in Bear Form or Dire Bear Form. In addition, your non-periodic critical strikes from Cat Form abilities that generate Combo Points have a ",
      "% chance to add an additional Combo Point.",
    ],
    [
      [50, 100],
      [50, 100],
    ],
    talentNames.druid.sharpenedClaws,
  ),
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.druid.improvedShiftingPower,
    "ability_hunter_aspectmastery",
    ["Reduces the cooldown of your Shifting Power spell by ", " sec."],
    [[4, 8]],
    talentNames.druid.shiftingPower,
  ),
  new SingleRankTalent(
    talentNames.druid.leaderOfThePack,
    "spell_nature_unyeildingstamina",
    "While in Cat Form, Bear Form, or Dire Bear Form, the Leader of the Pack increases the critical strike chance of all party members within 45 yards by 3%, exclusive with Moonkin Aura.",
  ),
  null,
  new MultiRankTalent(
    talentNames.druid.predatoryInstincts,
    "ability_druid_predatoryinstincts",
    [
      "Increases the critical strike damage bonus of your melee abilities by ",
      "%.",
    ],
    [[10, 20]],
  ),
];

const tier6: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.druid.naturalReaction,
    "ability_bullrush",
    [
      "Increases your dodge chance by ",
      "%, and gives you a ",
      "% chance to gain 5 Rage each time you dodge.",
    ],
    [
      [1, 2, 3, 4, 5],
      [20, 40, 60, 80, 100],
    ],
  ),
  null,
  new MultiRankTalent(
    talentNames.druid.rendAndTear,
    "ability_druid_primalagression",
    [
      "Increases damage done by your melee abilities on Bleeding targets by ",
      "%.",
    ],
    [[2, 4, 6, 8, 10]],
    talentNames.druid.predatoryStrikes,
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.druid.berserk,
    "ability_druid_berserk",
    '<!--sp9634:0--><!--sp9634--><!--sp3025:0--><!--sp3025--><!--sp5487:0--><span style="color: #FF2020">Requires Cat Form, Bear Form, Dire Bear Form</span><!--sp5487--><br />Causes your Primal Bite ability to strike up to 3 targets, removes its cooldown, and increases the critical strike chance of your Combo Point-generating abilities by 100%. Clears and grants immunity to Fear effects for the duration. Lasts 15 sec.',
    talentNames.druid.leaderOfThePack,
  ),
  null,
  null,
];

export const feralCombat = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
