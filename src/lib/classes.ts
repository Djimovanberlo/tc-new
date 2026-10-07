import { descriptionLengthError, valuesLengthError } from "@/errors";
import { TalentName } from "./types";

export abstract class Talent {
  public currentRank = 0;

  constructor(
    public readonly name: TalentName,
    public readonly icon: string,
    public readonly maxRank: number,
    public readonly requires?: TalentName,
  ) {}

  increment(requiredTalent?: Talent): void {
    if (requiredTalent && requiredTalent.currentRank < requiredTalent.maxRank) {
      return;
    }

    if (this.currentRank < this.maxRank) {
      this.currentRank++;
    }
  }

  decrement(requiredByTalents?: Talent[]): void {
    if (requiredByTalents?.some((talent) => talent.currentRank > 0)) {
      return;
    }

    if (this.currentRank > 0) {
      this.currentRank--;
    }
  }

  abstract getCurrentDescription(): string;
  abstract getNextDescription(): string;
}

export class MultiRankTalent extends Talent {
  constructor(
    name: TalentName,
    icon: string,
    public readonly description: string[],
    public readonly descriptionValues: (string | number)[][],
    requires?: TalentName,
  ) {
    if (descriptionValues.length + 1 !== description.length) {
      throw new Error(descriptionLengthError(name));
    }

    if (
      !descriptionValues.every(
        (values) => values.length === descriptionValues[0].length,
      )
    ) {
      throw new Error(valuesLengthError(name));
    }

    const maxRank = descriptionValues[0].length;
    super(name, icon, maxRank, requires);
  }

  getCurrentDescription(): string {
    return this.getDescription(this.currentRank);
  }

  getNextDescription(): string {
    return this.getDescription(this.currentRank + 1);
  }

  private getDescription(rank: number): string {
    if (rank === 0 || rank > this.maxRank) {
      return "";
    }

    return this.description.reduce((result, text, i) => {
      const value = this.descriptionValues[i]?.[rank - 1] ?? "";
      return result + text + value;
    }, "");
  }
}

export class SingleRankTalent extends Talent {
  constructor(
    name: TalentName,
    icon: string,
    public readonly description: string,
    requires?: TalentName,
    public readonly attributes?: (string | null)[],
  ) {
    const maxRank = 1;
    super(name, icon, maxRank, requires);
  }

  getCurrentDescription(): string {
    if (this.currentRank === 0) {
      return "";
    }

    return this.description;
  }

  getNextDescription(): string {
    if (this.currentRank >= this.maxRank) {
      return "";
    }

    return this.description;
  }
}
