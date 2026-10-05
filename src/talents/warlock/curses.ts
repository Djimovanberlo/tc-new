import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.improvedLifeTap,
    "spell_shadow_burningspirit",
    ["Increases the amount of Mana awarded by your Life Tap spell by ", "%."],
    [["10", "20"]],
  ),
  new MultiRankTalent(
    talentNames.warlock.suppression,
    "spell_shadow_unsummonbuilding",
    [
      "Improves your chance to hit by ",
      "% and reduces all threat you generate by ",
      "%.",
    ],
    [
      ["1", "2", "3", "4", "5"],
      ["4", "8", "12", "16", "20"],
    ],
  ),
  new MultiRankTalent(
    talentNames.warlock.improvedCorruption,
    "spell_shadow_abominationexplosion",
    [
      "Reduces the casting time of your Corruption spell by ",
      " sec and increases the damage it deals by ",
      "%.",
    ],
    [
      ["0.4", "0.8", "1.2", "1.6", "2"],
      ["2", "4", "6", "8", "10"],
    ],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.malediction,
    "spell_shadow_curseofachimonde",
    ["Increases all periodic damage done by your Warlock spells by ", "%."],
    [["1", "2", "3", "4", "5"]],
  ),
  new MultiRankTalent(
    talentNames.warlock.soulHarvest,
    "inv_elemental_primal_shadow",
    [
      "Killing a non-trivial target afflicted by your Drain Soul increases your Mana regeneration by ",
      "% for 10 sec and allows ",
      "% of normal Mana regeneration to continue while casting.",
    ],
    [
      ["50", "100"],
      ["50", "100"],
    ],
  ),
  new MultiRankTalent(
    talentNames.warlock.improvedDrains,
    "spell_shadow_haunting",
    [
      "Increases health drained or damage done by your Drain Life, Drain Soul, and Wrack spells by ",
      "%.",
    ],
    [["7", "13", "20"]],
  ),
  null,
];

const tier3: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.improvedBaneOfAgony,
    "spell_shadow_curseofsargeras",
    ["Increases the damage done by your Bane of Agony by ", "%."],
    [["5", "10"]],
  ),
  new MultiRankTalent(
    talentNames.warlock.felConcentration,
    "spell_shadow_fingerofdeath",
    [
      "Gives you a ",
      "% chance to avoid interruption caused by damage while channeling or casting your Drain Life, Drain Mana, Drain Soul, or Wrack spells.",
    ],
    [["23", "47", "70"]],
  ),
  new SingleRankTalent(
    talentNames.warlock.amplifyCurse,
    "spell_shadow_contagion",
    "Increases the effect of your next Curse of Weakness or Bane of Agony by 50%, or your next Curse of Exhaustion by 20%.  Lasts 30 sec.",
  ),
  new MultiRankTalent(
    talentNames.warlock.pandemic,
    "spell_shadow_unstableaffliction_2",
    [
      "Increases the critical strike damage bonus of your Corruption, Bane of Agony, Bane of Doom, Drain Soul, Drain Life, Siphon Life, and Wrack spells by ",
      "%.",
    ],
    [["33", "67", "100"]],
  ),
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.warlock.malevolence,
    "spell_shadow_focusedpower",
    ["Increases the critical effect chance of your Shadow spells by ", "%."],
    [["1", "2", "3", "4", "5"]],
  ),
  new MultiRankTalent(
    talentNames.warlock.nightfall,
    "spell_shadow_twilight",
    [
      "Gives your Corruption, Drain Soul, Drain Life, and Wrack spells a ",
      "% chance to cause you to enter a Shadow Trance after damaging the opponent. The Shadow Trance reduces the casting time of your next Shadow Bolt spell by 100%.",
    ],
    [["2", "4"]],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.warlock.curseOfExhaustion,
    "spell_shadow_grimward",
    "Reduces the target's movement speed by <!--sp18288:0-->30<!--sp18288-->% for 12 sec.  Only one Curse per Warlock can be active on any one target.",
    talentNames.warlock.amplifyCurse,
  ),
  null,
];

const tier5: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.warlock.siphonLife,
    "spell_shadow_requiem",
    "Transfers 11 health from the target to the caster every 3 sec.  Lasts 30 sec.",
  ),
  new MultiRankTalent(
    talentNames.warlock.soulSiphon,
    "spell_shadow_lifedrain02",
    [
      "Increases the damage done or health drained by your Drain Life, Drain Soul, and Wrack spells by ",
      "% per each of your other Affliction effects active on the target, up to a maximum increase of ",
      "%.",
    ],
    [
      ["4", "8", "12"],
      ["12", "24", "36"],
    ],
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.warlock.shadowMastery,
    "spell_shadow_shadetruesight",
    [
      "Increases the damage dealt or life drained by your Shadow spells by ",
      "%.",
    ],
    [["1", "2", "3", "4", "5"]],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.warlock.wrack,
    "ability_deathknight_hemorrhagicfever",
    "Tears the target apart from within, inflicting 36 Shadow damage every 1 sec and increasing the damage they take from your other Shadow damage over time effects by 10% for 6 sec.",
    talentNames.warlock.siphonLife,
  ),
  null,
  null,
];

export const curses = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
