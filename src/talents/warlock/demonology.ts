import { MultiRankTalent, SingleRankTalent } from "@/lib/classes";
import { talentNames } from "@/lib/constants";
import { TalentTier } from "@/lib/types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.improvedHealthFunnel,
    "spell_shadow_lifedrain",
    [
      "Increases the amount of health transferred by your Health Funnel spell by ",
      "%, reduces its health cost by ",
      "%, and reduces all threat your Health Funnel generates by ",
      "%. Allows Health Funnel to be used regardless of your demon's health.",
    ],
    [
      [20, 40],
      [15, 30],
      [50, 100],
    ],
  ),
  new MultiRankTalent(
    talentNames.warlock.improvedImp,
    "spell_shadow_summonimp",
    [
      "Increases the damage of your Imp's Firebolt spell by ",
      "% and the effect of its Fire Shield spell by ",
      "%.",
    ],
    [
      [10, 20, 30],
      [10, 20, 30],
    ],
  ),
  new MultiRankTalent(
    talentNames.warlock.demonicEmbrace,
    "spell_shadow_metamorphosis",
    ["Increases your total Stamina by ", "%."],
    [[3, 6, 9, 12, 15]],
  ),
  new MultiRankTalent(
    talentNames.warlock.unholyPower,
    "spell_shadow_shadowworddominate",
    [
      "Increases all damage done by your Imp, Voidwalker, Succubus, Incubus, and Felhunter pets by ",
      "%.",
    ],
    [[2, 4, 6, 8, 10]],
  ),
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.demonicAegis,
    "spell_shadow_ragingscream",
    [
      "Increases the effectiveness of your Demon Skin and Demon Armor spells by ",
      "%.",
    ],
    [[15, 30]],
  ),
  new MultiRankTalent(
    talentNames.warlock.improvedVoidwalker,
    "spell_shadow_summonvoidwalker",
    [
      "Increases the effectiveness of your Voidwalker's Torment, Consume Shadows, Sacrifice, and Suffering spells by ",
      "%.",
    ],
    [[10, 20, 30]],
  ),
  new MultiRankTalent(
    talentNames.warlock.felVitality,
    "spell_shadow_demonictactics",
    [
      "Increases the maximum health and Mana of your Imp, Voidwalker, Succubus, Incubus, and Felhunter by ",
      "%, and increases your maximum Mana by ",
      "%.",
    ],
    [
      [5, 10, 15],
      [5, 10, 15],
    ],
  ),
  new MultiRankTalent(
    talentNames.warlock.demonicEnergies,
    "spell_shadow_felmending",
    [
      "You heal your pet for ",
      "% of all spell damage you deal. When you gain Mana from Life Tap, your summoned demon gains ",
      "% of the Mana you gain.",
    ],
    [
      [8, 15],
      [50, 100],
    ],
  ),
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.improvedSayaad,
    "ability_warlock_randomizesuccubusincubus",
    [
      "Increases the effect of your Succubus' and Incubus' Lash of Pain and Soothing Kiss spells by ",
      "%, and increases the duration of your Succubus' and Incubus' Seduction and Lesser Invisibility spells by ",
      "%.",
    ],
    [
      [10, 20, 30],
      [10, 20, 30],
    ],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.warlock.demonicSacrifice,
    "spell_shadow_psychicscream",
    "When activated, sacrifices your summoned Demon to enhance the opposing aspect of your power, granting you an effect that lasts 2 hrs. The effect is canceled if any Demon is summoned.<br /><br />Imp: Increases your Shadow damage by 15%.<br /><br />Voidwalker: Restores 2% of your total Mana every 4 sec.<br /><br />Succubus/Incubus: Increases your Fire damage by 15%.<br /><br />Felhunter: Restores 3% of your total Health every 4 sec.",
  ),
  new MultiRankTalent(
    talentNames.warlock.masterSummoner,
    "spell_shadow_impphaseshift",
    [
      "Reduces the casting time of your Imp, Voidwalker, Succubus, Incubus, and Felhunter Summoning spells by ",
      " sec and the Mana cost by ",
      "%.",
    ],
    [
      [2, 4],
      [20, 40],
    ],
  ),
  null,
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.decimation,
    "spell_fire_fireball02",
    [
      "Reduces the cooldown of your Soul Fire spell by ",
      "%. When you cast Shadow Bolt or Searing Pain on an enemy below 35% health, they deal ",
      "% increased damage, and for the next 10 sec your Soul Fire spell has its cast time reduced by ",
      "% and costs no Soul Shards.",
    ],
    [
      [45, 90],
      [3, 6],
      [20, 40],
    ],
  ),
  null,
  new SingleRankTalent(
    talentNames.warlock.felDomination,
    "spell_nature_removecurse",
    "Your next Imp, Voidwalker, Succubus, Incubus, or Felhunter Summon spell has its casting time reduced by 6 sec and its Mana cost reduced by 50%.",
    talentNames.warlock.masterSummoner,
  ),
  // TODO: check manually: description contains markup
  new MultiRankTalent(
    talentNames.warlock.demonicBrand,
    "ability_demonhunter_chaoticimprint_fire",
    [
      "Your Searing Pain generates ",
      "% less threat and brands the target for 10 sec. Your pet's next ",
      " attacks against the target generate high threat and deal ((((<!--pl1293695:1:60-->60 - 26) * 1.5) + 14 + (0.078 * ((Shadow spell power)))) * (<!--sp23759:0-->1<!--sp23759--> * <!--sp18769:0-->1<!--sp18769--> * <!--sp23761:0-->1<!--sp23761-->)) to ((((<!--pl1293695:1:60-->60 - 26) * 1.5) + 17 + (0.078 * ((Shadow spell power)))) * (<!--sp23759:0-->1<!--sp23759--> * <!--sp18769:0-->1<!--sp18769--> * <!--sp23761:0-->1<!--sp23761-->)) Fire or Shadow damage based on the pet.",
    ],
    [
      [17, 33, 50],
      [2, 4, 6],
    ],
  ),
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.improvedFelhunter,
    "spell_shadow_summonfelhunter",
    [
      "Increases the Attack Power reduction of your Felhunter's Tainted Blood, the healing of its Devour Magic, and the detection level of its Paranoia by ",
      "%, and reduces the cooldown of its Spell Lock by ",
      " sec.",
    ],
    [
      [10, 20, 30],
      [2, 4, 6],
    ],
  ),
  new SingleRankTalent(
    talentNames.warlock.soulLink,
    "spell_shadow_gathershadows",
    "When active, 30% of all damage taken by the caster is taken by your Imp, Voidwalker, Succubus, Incubus, or Felhunter Demon instead. In addition, both the Demon and the master will inflict 3% more damage. Lasts as long as the Demon is active.",
    talentNames.warlock.demonicSacrifice,
  ),
  new MultiRankTalent(
    talentNames.warlock.demonicKnowledge,
    "spell_shadow_improvedvampiricembrace",
    [
      "Increases your spell damage and your Demon pet's spell damage by up to ",
      "% of your level while you have a summoned Demon pet active.",
    ],
    [[33, 67, 100]],
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  // TODO: check manually: description contains markup
  new MultiRankTalent(
    talentNames.warlock.masterDemonologist,
    "spell_shadow_shadowpact",
    [
      "Grants both the Warlock and the summoned demon an effect as long as that demon is active.<br /><br />Imp - Increases Fire damage done by ",
      "%.<br /><br />Voidwalker - Reduces Physical damage taken by ",
      "%.<br /><br />Succubus/Incubus - Increases Shadow damage done by ",
      "%.<br /><br />Felhunter - Reduces Magic damage taken by ",
      "%.",
    ],
    [
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
      [2, 4, 6, 8, 10],
    ],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.warlock.demonicPact,
    "inv_ability_soulharvesterwarlock_demonicsoul",
    "Your Demonic Sacrifice effect is no longer cancelled by summoning a different Demon pet. Resummoning the sacrificed pet will still cancel the effect.",
    talentNames.warlock.soulLink,
  ),
  null,
  null,
];

export const demonology = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
