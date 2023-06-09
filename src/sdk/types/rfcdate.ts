/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

export class RFCDate {
  private date: Date;

  constructor(date?: Date | string) {
    if (typeof date === "string") {
      this.date = new Date(date);
    } else {
      this.date = date ?? new Date();
    }
  }

  public getDate(): Date {
    return this.date;
  }

  public toJSON(): string {
    return this.toString();
  }

  public toString(): string {
    const dateRegex = /^(\d{4})-(\d{2})-(\d{2})/;

    const matches = this.date.toISOString().match(dateRegex);
    if (matches == null) {
      throw new Error("Date format is not valid");
    }

    const [, year, month, day]: RegExpMatchArray = matches;
    return `${year}-${month}-${day}`;
  }
}
