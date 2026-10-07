import { MultiRankTalent, SingleRankTalent } from "@/lib/classes";
import { talentNames } from "@/lib/constants";
import { TalentTier, TalentTree } from "@/lib/types";

const tier1: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.druid.improvedWrath,
    "spell_nature_abolishmagic",
    [
      "Reduces the cast time of your Wrath spell by ",
      " sec and its Mana cost by ",
      "%.",
    ],
    [
      [0.1, 0.2, 0.3, 0.4, 0.5],
      [10, 20, 30, 40, 50],
    ],
  ),
  new MultiRankTalent(
    talentNames.druid.genesis,
    "spell_arcane_arcane03",
    [
      "Increases the periodic damage and healing done by your spells and abilities by ",
      "%.",
    ],
    [[1, 2, 3, 4, 5]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.druid.moonglow,
    "spell_nature_sentinal",
    ["Reduces the Mana cost of your damaging spells by ", "%."],
    [[8, 17, 25]],
  ),
  new MultiRankTalent(
    talentNames.druid.improvedMoonfire,
    "spell_nature_starfall",
    [
      "Increases the damage and critical strike chance of your Moonfire spell by ",
      "%.",
    ],
    [[5, 10]],
  ),
  new MultiRankTalent(
    talentNames.druid.naturesMajesty,
    "inv_staff_01",
    [
      "Increases your critical strike chance with spells and melee attacks by ",
      "%.",
    ],
    [[2, 4]],
  ),
  new MultiRankTalent(
    talentNames.druid.naturesReach,
    "spell_nature_naturetouchgrow",
    [
      "Increases the range of your offensive Balance spells by ",
      "% and improves your chance to hit by ",
      "%.",
    ],
    [
      [10, 20],
      [2, 4],
    ],
  ),
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.druid.improvedEntanglingRoots,
    "spell_nature_stranglevines",
    [
      "Increases the damage done by your Entangling Roots spell by ",
      "%, and its victims can take up to ",
      "% more damage without interrupting the effect.",
    ],
    [
      [25, 50, 75],
      [25, 50, 75],
    ],
  ),
  null,
  new SingleRankTalent(
    talentNames.druid.naturesSplendor,
    "spell_nature_natureresistancetotem",
    "Increases the duration of your Moonfire and Rejuvenation spells by 3 sec, your Regrowth spell by 6 sec, and your Insect Swarm spell by 2 sec.",
    talentNames.druid.naturesMajesty,
  ),
  null,
];

const tier4: TalentTier = [
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.druid.insectSwarm,
    "spell_nature_insectswarm",
    "The enemy target is swarmed by insects, decreasing their chance to hit with attacks by 2% and causing 48 Nature damage over <!--sp1223083:0-->12 sec<!--sp1223083-->.",
  ),
  new MultiRankTalent(
    talentNames.druid.vengeance,
    "spell_nature_purge",
    [
      "Increases the critical strike damage bonus of your Arcane and Nature spells by ",
      "%.",
    ],
    [[20, 40, 60, 80, 100]],
    talentNames.druid.improvedMoonfire,
  ),
  new MultiRankTalent(
    talentNames.druid.improvedStarfire,
    "spell_arcane_starfire",
    [
      "Reduces the cast time of Starfire by ",
      " sec and Starfire has a ",
      "% chance to stun its target for 3 sec.",
    ],
    [
      [0.1, 0.2, 0.3, 0.4, 0.5],
      [3, 6, 9, 12, 15],
    ],
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.druid.overgrowth,
    "inv_misc_herb_15",
    [
      "Increases the maximum number of targets you may have affected by Entangling Roots by ",
      ".",
    ],
    [[1, 2]],
  ),
  new SingleRankTalent(
    talentNames.druid.naturesGrace,
    "spell_nature_naturesblessing",
    "All non-periodic spell criticals grace you with a blessing of nature, increasing your spellcasting speed and reducing your global cooldown by 10% for 3 sec.",
  ),
  new MultiRankTalent(
    talentNames.druid.eclipse,
    "ability_druid_eclipse",
    [
      "Your Wrath spell reduces the cast time of your next 2 Starfire spells by ",
      " sec. Stores up to 4 charges. Lasts 15 sec.",
    ],
    [[0.17, 0.33, "0.50"]],
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.druid.moonfury,
    "spell_nature_moonglow",
    ["Increases the damage done by your Arcane and Nature spells by ", "%."],
    [[2, 4, 6, 8, 10]],
  ),
  null,
  null,
];

const tier7: TalentTier = [
  null,
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.druid.moonkinForm,
    "spell_nature_forceofnature",
    "Shapeshift into Moonkin Form, increasing Omen of Clarity's chance to trigger by 100%, Armor contribution from items by 360%, and all party members within 45 yards have their Critical Strike chance increased by 3%, exclusive with Leader of the Pack.  Also protects the caster from Polymorph effects and prevents the use of healing spells.<br /><br />The act of shapeshifting frees the caster of Polymorph and Movement Impairing effects.",
  ),
  null,
  null,
];

export const balance: TalentTree = {
  name: "Balance",
  icon: "spell_nature_starfall",
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
