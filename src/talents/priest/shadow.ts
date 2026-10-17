import { MultiRankTalent, SingleRankTalent } from "@/lib/classes";
import { talentNames } from "@/lib/constants";
import { TalentTier, TalentTree } from "@/lib/types";

const tier1: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.priest.shadowFocus,
    "spell_shadow_burningspirit",
    ["Improves your chance to hit with Shadow spells by ", "%."],
    [[1, 2, 3, 4, 5]],
  ),
  new MultiRankTalent(
    talentNames.priest.blackout,
    "spell_shadow_gathershadows",
    [
      "Gives your Shadow damage spells a ",
      "% chance to stun the target for 3 sec.",
    ],
    [[2, 4, 6, 8, 10]],
  ),
  new MultiRankTalent(
    talentNames.priest.spiritTap,
    "spell_shadow_requiem",
    [
      "Gives you a ",
      "% chance to increase your Spirit by 100% for 15 sec after killing a non-trivial target or when an enemy afflicted by your Vampiric Embrace dies. For the duration, 50% of your Mana regeneration will continue while casting.",
    ],
    [[20, 40, 60, 80, 100]],
  ),
  null,
];

const tier2: TalentTier = [
  null,
  // TODO: check manually: position changed (was tier 3 slot 1, now tier 2 slot 1)
  new MultiRankTalent(
    talentNames.priest.improvedMindBlast,
    "spell_shadow_unholyfrenzy",
    ["Reduces the cooldown of your Mind Blast spell by ", " sec."],
    [[0.5, 1, 1.5, 2, 2.5]],
  ),
  null,
  new MultiRankTalent(
    talentNames.priest.improvedShadowWordPain,
    "spell_shadow_shadowwordpain",
    ["Increases the duration of your Shadow Word: Pain spell by ", " sec."],
    [[3, 6]],
  ),
  new MultiRankTalent(
    talentNames.priest.shadowReach,
    "spell_shadow_chilltouch",
    ["Increases the range of your offensive Shadow spells by ", "%."],
    [[10, 20]],
  ),
];

const tier3: TalentTier = [
  null,
  null,
  new MultiRankTalent(
    talentNames.priest.improvedPsychicScream,
    "spell_shadow_psychicscream",
    ["Reduces the cooldown of your Psychic Scream spell by ", " sec."],
    [[2, 4]],
    talentNames.priest.blackout,
  ),
  new SingleRankTalent(
    talentNames.priest.mindFlay,
    "spell_shadow_siphonmana",
    "Assault the target's mind with Shadow energy, causing 63 Shadow damage over 3 sec  and slowing their movement speed by 50%.",
  ),
  new MultiRankTalent(
    talentNames.priest.improvedMindFlay,
    "spell_shadow_soulleech_2",
    [
      "Each instance of damage of Mind Flay deals ",
      "% more damage than its previous instance of damage.",
    ],
    [[10, 20]],
    talentNames.priest.mindFlay,
  ),
];

const tier4: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.priest.darkInspiration,
    "spell_warlock_demonsoul",
    [
      "Your Mind Blast and fully channeled Mind Flay causes Dark Inspiration, increasing yours and your party's Spirit by ",
      "% for 10 sec.",
    ],
    [[3, 6, 9, 12, 15]],
  ),
  new SingleRankTalent(
    talentNames.priest.vampiricEmbrace,
    "spell_shadow_unsummonbuilding",
    "Afflicts your target with Shadow energy that causes all party members to be healed for 20% of any Shadow spell damage you deal for 30 sec.",
  ),
  new MultiRankTalent(
    talentNames.priest.shadowWeaving,
    "spell_shadow_blackplague",
    [
      "Your Shadow damage spells have a ",
      "% chance to increase the Shadow damage the target takes from you by 2% for 15 sec, stacking up to 5 times.",
    ],
    [[33, 67, 100]],
  ),
  null,
];

const tier5: TalentTier = [
  null,
  new SingleRankTalent(
    talentNames.priest.silence,
    "spell_shadow_impphaseshift",
    "Silences the target, preventing them from casting spells for 5 sec and interrupting their spellcasts for 3 sec.",
  ),
  null,
  // TODO: check manually: description contains markup
  new MultiRankTalent(
    talentNames.priest.devouringContagion,
    "spell_shadow_devouringplague",
    [
      "Reduces the mana cost of your Devouring Plague by ",
      "%.<br /><br />Targets that die while Devouring Plague is active spreads it, jumping to 2 nearby enemies within ",
      " yds for the remaining duration.",
    ],
    [
      [25, 50],
      [5, 10],
    ],
  ),
  null,
];

const tier6: TalentTier = [
  null,
  new MultiRankTalent(
    talentNames.priest.earlyDemise,
    "spell_shadow_demonicfortitude",
    [
      "Increases Shadow Word: Death's critical strike chance on targets at or below 20% health by ",
      "%.",
    ],
    [[15, 30]],
  ),
  null,
  new MultiRankTalent(
    talentNames.priest.darkness,
    "spell_shadow_twilight",
    ["Increases your Shadow damage done by ", "%."],
    [[2, 4, 6, 8, 10]],
  ),
  null,
];

const tier7: TalentTier = [
  null,
  null,
  new SingleRankTalent(
    talentNames.priest.shadowform,
    "spell_shadow_shadowform",
    "Assume Shadowform, increasing your Shadow damage by 10%, reducing the Mana cost of all Shadow spells by 50%, increasing the critical strike damage bonus of your Shadow spells by 100%, and reducing Physical damage taken by you by 15%. However, you may not cast healing spells while in this form.",
    talentNames.priest.vampiricEmbrace,
  ),
  null,
  null,
];

export const shadow: TalentTree = {
  name: "Shadow",
  icon: "spell_shadow_shadowwordpain",
  backgroundImage: "203",
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
