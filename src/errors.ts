import { TalentName } from "@/lib/types";

export const descriptionLengthError = (name: TalentName) =>
  `Description and descriptionValues + 1 arrays must have the same length for talent ${name}`;

export const valuesLengthError = (name: TalentName) =>
  `All descriptionValues arrays must have the same length for talent ${name}`;
