import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.twilightFocus,
    "spell_holy_healingfocus",
    [
      "Gives you a ",
      "% chance to avoid interruption caused by damage while casting any spell.",
    ],
    [["23", "47", "70"]],
  ),
  new MultiRankTalent(
    talentNames.improvedRenew,
    "spell_holy_renew",
    ["Increases the amount healed by your Renew spell by ", "%."],
    [["5", "10", "15"]],
  ),
  new MultiRankTalent(
    talentNames.holySpecialization,
    "spell_holy_sealofsalvation",
    ["Increases the critical effect chance of your Holy spells by ", "%."],
    [["1", "2", "3", "4", "5"]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.spellWarding,
    "spell_holy_spellwarding",
    ["Reduces all spell damage taken by ", "%."],
    [["2", "4", "6", "8", "10"]],
  ),
  new MultiRankTalent(
    talentNames.divineFury,
    "spell_holy_sealofwrath",
    [
      "Reduces the casting time of your Smite, Holy Fire, Heal, and Greater Heal spells by ",
      " sec.",
    ],
    [["0.1", "0.2", "0.3", "0.4", "0.5"]],
  ),
  null,
];

const tier3: TalentTier = [
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.holyNova,
    "spell_holy_holynova",
    "Causes an explosion of holy light around the caster, causing <!--ppl20:26:27:20-->26 to 30 Holy damage to all enemy targets within 10 yards and healing all party members within 10 yards for <!--ppl20:26:51:40-->50 to 57. These effects cause no threat.",
  ),
  new MultiRankTalent(
    talentNames.blessedRecovery,
    "spell_holy_blessedrecovery",
    [
      "After being struck by a melee or ranged critical hit, or suffering more than 30% of your maximum Health from a single attack, heal ",
      "% of the damage taken over 6 sec. Refreshing this effect carries over any remaining healing.",
    ],
    [["8", "17", "25"]],
  ),
  null,
  new MultiRankTalent(
    talentNames.inspiration,
    "spell_holy_layonhands",
    [
      "Your non-periodic critical heals increase your target's Armor by ",
      "% for 15 sec.",
    ],
    [["8", "17", "25"]],
  ),
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.holyReach,
    "spell_holy_purify",
    [
      "Increases the range of your Smite and Holy Fire spells and the radius of your Prayer of Healing and Holy Nova spells by ",
      "%.",
    ],
    [["10", "20"]],
  ),
  new MultiRankTalent(
    talentNames.improvedHealing,
    "spell_holy_heal02",
    [
      "Reduces the Mana cost of your Lesser Heal, Heal, Greater Heal, Penance, and Prayer of Mending spells by ",
      "%.",
    ],
    [["5", "10", "15"]],
  ),
  new MultiRankTalent(
    talentNames.searingLight,
    "spell_holy_searinglightpriest",
    [
      "Increases your Holy damage done by ",
      "%, and gives a ",
      "% chance each time your Holy Fire spell deals periodic damage for your next Holy Nova to cost no Mana.",
    ],
    [
      ["2", "5"],
      ["5", "10"],
    ],
    talentNames.divineFury,
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.bindingHeal,
    "spell_holy_blindingheal",
    "Heals a friendly target and the caster for <!--ppl25:31:247:220-->236 to 284. Low threat.",
  ),
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.litanyOfLight,
    "inv_scroll_07",
    [
      "When you cast a healing spell, gain Mana equal to ",
      "% of the base cost of the spell if your previous heal was a different spell.",
    ],
    [["5", "10"]],
  ),
  new SingleRankTalent(
    talentNames.spiritOfRedemption,
    "inv_enchant_essenceeternallarge",
    "Upon death, the priest becomes the Spirit of Redemption for 15 sec.  The Spirit of Redemption cannot move, attack, be attacked or targeted by any spells or effects.  While in this form the priest can cast any healing spell free of cost.  When the effect ends, the priest dies.",
  ),
  new MultiRankTalent(
    talentNames.spiritualGuidance,
    "spell_holy_spiritualguidence",
    [
      "Increases your spell healing by up to ",
      "% of your total Spirit and your spell damage by up to ",
      "% of your total Spirit.",
    ],
    [
      ["5", "10", "15", "20", "25"],
      ["1", "3", "5", "6", "8"],
    ],
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  null,
  new MultiRankTalent(
    talentNames.spiritualHealing,
    "spell_nature_moonglow",
    ["Increases the amount healed by your spells by ", "%."],
    [["3", "7", "10"]],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.prayerOfMending,
    "spell_holy_prayerofmendingtga",
    "Places a spell on the target that heals them for [(172 + (Healing * <!--bc-->0.42899999<!--bc-->)) * (<!--sp1225132:0-->1<!--sp1225132--> * <!--sp14898:0-->1<!--sp14898-->)] the next time they take damage or receive non-periodic healing. When the heal occurs, Prayer of Mending jumps to a party or raid member within 20 yards. Jumps up to 5 times and lasts 30 sec after each jump. This spell can only be placed on one target at a time per caster.",
    talentNames.spiritOfRedemption,
  ),
  null,
  null,
];

export const holy = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
