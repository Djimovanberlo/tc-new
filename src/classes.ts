import {
  descriptionLengthError,
  valueExceededError,
  valuesLengthError,
} from "./errors";
import { TalentName } from "./types";

abstract class Talent {
  currentValue: number = 0;

  constructor(
    public name: TalentName,
    public icon: string,
    public readonly maxValue: number,
    public requires: TalentName | undefined = undefined,
  ) {}

  increment(requiredTalent?: Talent) {
    if (
      requiredTalent &&
      requiredTalent.currentValue < requiredTalent.maxValue
    ) {
      return;
    }

    if (this.currentValue < this.maxValue) {
      this.currentValue++;
    }
  }

  decrement(requiredByTalents?: Talent[]) {
    if (requiredByTalents?.some((talent) => talent.currentValue > 0)) {
      return;
    }

    if (this.currentValue > 0) {
      this.currentValue--;
    }
  }
}

class PassiveTalent extends Talent {
  constructor(
    name: TalentName,
    icon: string,
    requires: TalentName | undefined = undefined,
    public description: string[],
    public descriptionValues: (string | number)[][],
  ) {
    if (descriptionValues.length !== description.length) {
      throw new Error(descriptionLengthError(name));
    }

    if (
      !descriptionValues.every(
        (values) => values.length === descriptionValues[0].length,
      )
    ) {
      throw new Error(valuesLengthError(name));
    }

    const maxValue = descriptionValues.length;
    super(name, icon, maxValue, requires);
  }

  getDescription(): string {
    if (
      this.descriptionValues.some((values) => values.length < this.currentValue)
    ) {
      throw new Error(valueExceededError(this.name));
    }

    return "";
  }
}

class ActiveTalent extends Talent {
  constructor(
    name: TalentName,
    icon: string,
    requires: TalentName | undefined = undefined,
    public attributes: (string | null)[],
    public description: string,
  ) {
    const maxValue = 1;
    super(name, icon, maxValue, requires);
  }
}
