import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.destructiveReach,
    "spell_shadow_corpseexplode",
    ["Increases the range of your damaging spells by ", "%."],
    [["10", "20"]],
  ),
  new MultiRankTalent(
    talentNames.warlock.improvedShadowBolt,
    "spell_shadow_shadowbolt",
    [
      "Your Shadow Bolt critical strikes increase Shadow damage taken by the target from your attacks by ",
      "% for 12 sec.",
    ],
    [["4", "8", "12", "16", "20"]],
  ),
  new MultiRankTalent(
    talentNames.warlock.bane,
    "spell_shadow_deathpact",
    [
      "Reduces the casting time of your Shadow Bolt, Immolate, and Incinerate spells by ",
      " sec and your Soul Fire spell by ",
      " sec.",
    ],
    [
      ["0.1", "0.2", "0.3", "0.4", "0.5"],
      ["0.4", "0.8", "1.2", "1.6", "2"],
    ],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.moltenSkin,
    "ability_mage_moltenarmor",
    ["Reduces all damage taken by ", "%."],
    [["2", "4", "6", "8", "10"]],
  ),
  new MultiRankTalent(
    talentNames.warlock.cataclysm,
    "spell_fire_windsofwoe",
    ["Reduces the Mana cost of your Destruction spells by ", "%."],
    [["3", "6", "10"]],
  ),
  new MultiRankTalent(
    talentNames.warlock.aftermath,
    "spell_fire_fire",
    [
      "Increases the initial damage of your Immolate spell by ",
      "% and your Conflagrate spell has a ",
      "% chance to Daze the target, reducing the target's movement speed by 50% for 5 sec.",
    ],
    [
      ["10", "20", "30", "40", "50"],
      ["20", "40", "60", "80", "100"],
    ],
  ),
  null,
];

const tier3: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.warlock.ruin,
    "spell_shadow_shadowwordpain",
    [
      "Increases the critical strike damage bonus of your Destruction spells by ",
      "%.",
    ],
    [["20", "40", "60", "80", "100"]],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.warlock.shadowburn,
    "spell_shadow_scourgebuild",
    "Instantly blasts the target for <!--ppl20:24:66:90-->65 to 74 Shadow damage.  If a non-trivial target dies within 8 sec of being hit with Shadowburn, the caster gains a Soul Shard.",
  ),
  null,
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.intensity,
    "spell_fire_lavaspawn",
    [
      "Gives you a ",
      "% chance to resist interruption caused by damage while casting or channeling any Destruction spell.",
    ],
    [["23", "47", "70"]],
  ),
  new MultiRankTalent(
    talentNames.warlock.agonizingFlames,
    "spell_fire_soulburn",
    [
      "Increases the critical strike chance of your Searing Pain spell by ",
      "% and the damage done by all your Destruction spells by ",
      "%.",
    ],
    [
      ["3", "7", "10"],
      ["3", "7", "10"],
    ],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.warlock.conflagrate,
    "spell_fire_fireball",
    "Ignites a target that is already afflicted by your Immolate spell, dealing <!--ppl25:30:95:90-->88 to 111 Fire damage and consuming your Immolate effect.",
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.pyroclasm,
    "spell_fire_volcano",
    [
      "Gives your Soul Fire spell a ",
      "% chance to Stun the target for 3 sec, and your Rain of Fire and Hellfire spells a ",
      "% chance over their duration to Stun targets they damage for 3 sec.",
    ],
    [
      ["13", "26"],
      ["13", "26"],
    ],
    talentNames.warlock.intensity,
  ),
  new SingleRankTalent(
    talentNames.warlock.baneOfHavoc,
    "ability_warlock_baneofhavoc",
    "Afflicts the target for 5 min, causing 15% of all damage done by the Warlock to other targets to also be dealt to the cursed target. Bane of Havoc is limited to 1 target, and only one Bane per Warlock can be active on any one target.",
  ),
  new MultiRankTalent(
    talentNames.warlock.fireAndBrimstone,
    "spell_fire_meteorstorm",
    [
      "Increases the critical strike chance of your Conflagrate spell by ",
      "%.",
    ],
    [["8", "17", "25"]],
    talentNames.warlock.conflagrate,
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.warlock.shadowAndFlame,
    "spell_fire_playingwithfire",
    [
      "Hitting an enemy with Conflagrate increases all Shadow damage you deal by ",
      "% for 20 sec, and hitting an enemy with Shadowburn increases all Fire damage you deal by ",
      "% for 20 sec. In addition, Conflagrate has a ",
      "% chance not to consume Immolate, and Shadowburn has a ",
      "% chance to instantly refund a Soul Shard.",
    ],
    [
      ["2", "4", "6", "8", "10"],
      ["2", "4", "6", "8", "10"],
      ["20", "40", "60", "80", "100"],
      ["20", "40", "60", "80", "100"],
    ],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.warlock.incinerate,
    "spell_fire_burnout",
    "Deals <!--ppl40:49:97:110-->100 to 114 Fire damage to your target and an additional 25% damage if the target is afflicted by Immolate.",
    talentNames.warlock.baneOfHavoc,
  ),
  null,
  null,
];

export const destruction = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
