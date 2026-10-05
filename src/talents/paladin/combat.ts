import { MultiRankTalent, SingleRankTalent } from "../../classes";
import { talentNames } from "../../constants";
import { TalentTier } from "../../types";

const tier1: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.paladin.deflection,
    "ability_parry",
    ["Increases your Parry chance by ", "%."],
    [["1", "2", "3", "4", "5"]],
  ),
  new MultiRankTalent(
    talentNames.paladin.benediction,
    "spell_frost_windwalkon",
    [
      "Reduces the Mana cost of all instant cast spells and abilities by ",
      "%.",
    ],
    [["2", "4", "6", "8", "10"]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.paladin.improvedJudgement,
    "spell_holy_righteousfury",
    ["Decreases the cooldown of your Judgement ability by ", " sec."],
    [["1", "2"]],
  ),
  new MultiRankTalent(
    talentNames.paladin.holyConduit,
    "spell_holy_devineaegis",
    [
      "Reduces the mana cost of your Consecration, Holy Wrath, Exorcism, and Hammer of Wrath spells by ",
      "%.",
    ],
    [["20", "40"]],
  ),
  new MultiRankTalent(
    talentNames.paladin.conviction,
    "spell_holy_retributionaura",
    [
      "Improves your chance to get a critical strike with melee attacks by ",
      "%.",
    ],
    [["1", "2", "3", "4", "5"]],
  ),
  null,
];

const tier3: TalentTier = [
  null,
  // TODO: check manually: description contains markup
  new MultiRankTalent(
    talentNames.paladin.vindication,
    "spell_holy_vindication",
    [
      "Gives your damaging melee attacks a chance to reduce the target's Attack Power by (",
      " /- 3 * <!--ppl0:60:6:-350--> - 204), and increase your Attack Power by ",
      "% for 30 sec.",
    ],
    [
      ["1", "2", "3"],
      ["1", "2", "3"],
    ],
  ),
  new MultiRankTalent(
    talentNames.paladin.sanctifiedJudgement,
    "ability_paladin_judgementblue",
    [
      "Gives your Judgement ability a ",
      "% chance to return ",
      "% of the Mana cost of the judged seal.",
    ],
    [
      ["33", "66", "100"],
      ["20", "40", "60"],
    ],
  ),
  // TODO: check manually: description contains markup
  new SingleRankTalent(
    talentNames.paladin.sealOfCommand,
    "ability_warrior_innerrage",
    "Gives the Paladin a chance to deal additional Holy damage equal to 70% of normal weapon damage.  Only one Seal can be active on the Paladin at any one time.  Lasts 30 sec.<br /><br />Unleashing this Seal's energy will judge an enemy, instantly causing <!--ppl20:28:97:560-->69 to 73 Holy damage, <!--ppl20:28:97:560-->138 to 146 if the target is stunned or incapacitated.",
  ),
  new MultiRankTalent(
    talentNames.paladin.pursuitOfJustice,
    "spell_holy_persuitofjustice",
    [
      "Increases movement speed and mounted movement speed by ",
      "%.  This does not stack with other movement speed increasing effects.",
    ],
    [["8", "15"]],
  ),
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.paladin.eyeForAnEye,
    "spell_holy_eyeforaneye",
    [
      "All critical strikes against you cause ",
      "% of the damage taken to the attacker as well. The damage caused by Eye for an Eye will not exceed 50% of the Paladin's total health.",
    ],
    [["5", "10"]],
  ),
  null,
  new SingleRankTalent(
    talentNames.paladin.sacredArbiter,
    "inv_sword_08",
    "Increases the damage of your Holy Strike ability by 20% and causes it to refresh all Judgement effects on the target.",
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.paladin.twoHandedWeaponSpecialization,
    "inv_hammer_04",
    ["Increases the damage you deal with two-handed melee weapons by ", "%."],
    [["2", "4", "6"]],
  ),
  new MultiRankTalent(
    talentNames.paladin.vengeance,
    "ability_racial_avatar",
    [
      "Increases your Physical and Holy damage dealt by ",
      "% for 30 sec after landing a non-periodic critical strike.  Stacks up to 3 times.",
    ],
    [["1", "2", "3"]],
    talentNames.paladin.sanctifiedJudgement,
  ),
  new SingleRankTalent(
    talentNames.paladin.repentance,
    "spell_holy_prayerofhealing",
    "Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids.",
  ),
  null,
];

const tier6: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.paladin.championOfTheLight,
    "ability_paladin_enlightenedjudgements",
    ["Increases your spell damage by up to ", "% of your Intellect."],
    [["20", "40", "60"]],
  ),
  new MultiRankTalent(
    talentNames.paladin.instrumentOfLaw,
    "spell_holy_divinepurpose",
    [
      "Reduces the cast time of your Hammer of Wrath by ",
      " sec, and reduces all threat you generate by ",
      "% while Righteous Fury is not active.",
    ],
    [
      ["0.5", "1.0"],
      ["10", "20"],
    ],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.paladin.twistOfLight,
    "spell_holy_blessedresillience",
    "Reduces the Mana cost of your Seal spells by 20%, and when you replace your Seal of Command, Seal of Righteousness, Seal of Fury, or Seal of Justice with a different Seal, you gain an Echo of that Seal. Your next melee attack applies the replaced Seal's effects, consuming the Echo.",
  ),
  null,
  null,
];

export const combat = {
  tier1,
  tier2,
  tier3,
  tier4,
  tier5,
  tier6,
  tier7,
};
