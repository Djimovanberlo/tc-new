import { playerClassNames } from "@/lib/constants";
import { PlayerClass } from "@/lib/types";
import { balance } from "./druid/balance";
import { feralCombat } from "./druid/feral-combat";
import { restoration as druidRestoration } from "./druid/restoration";
import { beastMastery } from "./hunter/beast-mastery";
import { marksmanship } from "./hunter/marksmanship";
import { survival } from "./hunter/survival";
import { arcane } from "./mage/arcane";
import { fire } from "./mage/fire";
import { frost } from "./mage/frost";
import { holy as paladinHoly } from "./paladin/holy";
import { protection as paladinProtection } from "./paladin/protection";
import { retribution } from "./paladin/retribution";
import { discipline } from "./priest/discipline";
import { holy as priestHoly } from "./priest/holy";
import { shadow } from "./priest/shadow";
import { assassination } from "./rogue/assassination";
import { combat } from "./rogue/combat";
import { subtlety } from "./rogue/subtlety";
import { elementalCombat } from "./shaman/elemental-combat";
import { enhancement } from "./shaman/enhancement";
import { restoration as shamanRestoration } from "./shaman/restoration";
import { affliction } from "./warlock/affliction";
import { demonology } from "./warlock/demonology";
import { destruction } from "./warlock/destruction";
import { arms } from "./warrior/arms";
import { fury } from "./warrior/fury";
import { protection as warriorProtection } from "./warrior/protection";

const druid: PlayerClass = {
  name: playerClassNames.druid,
  icon: "class_druid",
  talentTrees: {
    balance,
    feralCombat,
    restoration: druidRestoration,
  },
};

const hunter: PlayerClass = {
  name: playerClassNames.hunter,
  icon: "class_hunter",
  talentTrees: {
    beastMastery,
    marksmanship,
    survival,
  },
};

const mage: PlayerClass = {
  name: playerClassNames.mage,
  icon: "class_mage",
  talentTrees: {
    arcane,
    fire,
    frost,
  },
};

const paladin: PlayerClass = {
  name: playerClassNames.paladin,
  icon: "class_paladin",
  talentTrees: {
    holy: paladinHoly,
    protection: paladinProtection,
    retribution,
  },
};

const priest: PlayerClass = {
  name: playerClassNames.priest,
  icon: "class_priest",
  talentTrees: { discipline, holy: priestHoly, shadow },
};

const rogue: PlayerClass = {
  name: playerClassNames.rogue,
  icon: "class_rogue",
  talentTrees: { assassination, combat, subtlety },
};

const shaman: PlayerClass = {
  name: playerClassNames.shaman,
  icon: "class_shaman",
  talentTrees: { elementalCombat, enhancement, restoration: shamanRestoration },
};

const warlock: PlayerClass = {
  name: playerClassNames.warlock,
  icon: "class_warlock",
  talentTrees: { affliction, demonology, destruction },
};

const warrior: PlayerClass = {
  name: playerClassNames.warrior,
  icon: "class_warrior",
  talentTrees: { arms, fury, warriorProtection },
};

export const playerClasses = [
  druid,
  hunter,
  mage,
  paladin,
  priest,
  rogue,
  shaman,
  warlock,
  warrior,
];
