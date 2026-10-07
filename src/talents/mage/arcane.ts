import { MultiRankTalent, SingleRankTalent } from "@/lib/classes";
import { talentNames } from "@/lib/constants";
import { TalentTier } from "@/lib/types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.wandSpecialization,
    "inv_wand_01",
    ["Increases your damage with Wands by ", "%."],
    [[13, 25]],
  ),
  new MultiRankTalent(
    talentNames.mage.arcaneFocus,
    "spell_holy_devotion",
    ["Improves your chance to hit with Arcane spells by ", "%."],
    [[1, 2, 3, 4, 5]],
  ),
  new MultiRankTalent(
    talentNames.mage.improvedChanneling,
    "spell_nature_starfall",
    [
      "Gives you a ",
      "% chance to avoid interruption caused by damage while channeling Arcane Missiles and a ",
      "% chance while casting Arcane Blast.",
    ],
    [
      [20, 40, 60, 80, 100],
      [14, 28, 42, 56, 70],
    ],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.arcaneSubtlety,
    "spell_holy_dispelmagic",
    [
      "Reduces your target's resistance to all your spells by ",
      " and reduces the threat caused by your Arcane spells by ",
      "%.",
    ],
    [
      [8, 15],
      [15, 30],
    ],
  ),
  new MultiRankTalent(
    talentNames.mage.magicAbsorption,
    "spell_nature_astralrecalgroup",
    [
      "Increases all your resistances by ",
      " and causes all spells you fully resist to restore ",
      "% of your total mana. Cannot trigger more often than 1 time per sec.",
    ],
    [
      [5, 10],
      [1, 2],
    ],
  ),
  new MultiRankTalent(
    talentNames.mage.arcaneConcentration,
    "spell_shadow_manaburn",
    [
      "Gives you a ",
      "% chance of entering a Clearcasting state after any damage spell hits a target.  The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
    ],
    [[2, 4, 6, 8, 10]],
  ),
  new MultiRankTalent(
    talentNames.mage.arcaneResilience,
    "spell_arcane_arcaneresilience",
    ["Increases your Armor by an amount equal to ", "% of your Intellect."],
    [[25, 50]],
  ),
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.arcaneGeometry,
    "inv_ability_mage_radiantspark",
    ["Increases the range of your Arcane spells by ", " yards."],
    [[3, 6]],
  ),
  new MultiRankTalent(
    talentNames.mage.arcaneImpact,
    "spell_nature_wispsplode",
    ["Increases the critical strike chance of your Arcane spells by ", "%."],
    [[2, 4, 6]],
  ),
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.mage.arcaneBlast,
    "spell_arcane_blast",
    "Blasts the target with energy, dealing <!--ppl20:28:54:90-->57 to 65 Arcane damage. Each time you cast Arcane Blast, the damage of all your other spells is increased by 10% and the mana cost of Arcane Blast is increased by 175%. Effect stacks up to 4 times and lasts 8 sec or until any other damage spell is cast.",
  ),
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.mage.arcaneShielding,
    "spell_shadow_detectlesserinvisibility",
    [
      "Decreases the Mana lost per point of damage taken when your Mana Shield spell is active by ",
      "% and increases the resistances granted by your Mage Armor spell by ",
      "%.",
    ],
    [
      [17, 33],
      [25, 50],
    ],
  ),
  new MultiRankTalent(
    talentNames.mage.improvedCounterspell,
    "spell_frost_iceshock",
    ["Your Counterspell also Silences the target for ", " sec."],
    [[2, 4]],
  ),
  new MultiRankTalent(
    talentNames.mage.arcaneMeditation,
    "spell_shadow_siphonmana",
    ["Allows ", "% of your Mana regeneration to continue while casting."],
    [[17, 33, 50]],
    talentNames.mage.arcaneConcentration,
  ),
  new SingleRankTalent(
    talentNames.mage.missileBarrage,
    "ability_mage_missilebarrage",
    "Gives your Arcane Blast spell a 40% chance, and your Fireball, Frostbolt, and Frostfire Bolt spells a 20% chance to reduce the channeled duration of your next Arcane Missiles spell by 50%, reduce the Mana cost by 100%, and missiles fire every 0.5 sec.",
  ),
];

const tier5: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.mage.presenceOfMind,
    "spell_nature_enchantarmor",
    "When activated, your next Mage spell with a casting time less than 10 sec becomes an instant cast spell.",
  ),
  new MultiRankTalent(
    talentNames.mage.arcaneMind,
    "spell_shadow_charm",
    [
      "Increases your Intellect by ",
      "% and increases the critical strike damage bonus of your Arcane spells by ",
      "%.",
    ],
    [
      [2, 4, 6, 8, 10],
      [20, 40, 60, 80, 100],
    ],
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.mage.arcaneInstability,
    "spell_shadow_teleport",
    [
      "Increases the damage done by your spells by ",
      "% and your critical strike chance by ",
      "%.",
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
    ],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.mage.arcanePower,
    "spell_nature_lightning",
    "For the next 15 sec, your spells deal 30% more damage while costing 30% more mana to cast.",
    talentNames.mage.presenceOfMind,
  ),
  null,
  null,
];

export const arcane = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
