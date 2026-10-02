import { TalentName } from "./types";

export const descriptionLengthError = (name: TalentName) =>
  `Description and descriptionValues arrays must have the same length for talent ${name}`;

export const valuesLengthError = (name: TalentName) =>
  `All descriptionValues arrays must have the same length for talent ${name}`;

export const valueExceededError = (name: TalentName) =>
  `Current value of talent ${name} exceeds the number of description values`;
