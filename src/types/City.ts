import { EventDate } from "./date";

/**
 * 都市の部品クラスです.
 */
export class City {
  constructor(
    // ID
    private _id: number,
    // 都市の名前
    private _name: string,
    // 日時の配列
    private _date: EventDate
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get date(): EventDate {
    return this._date;
  }

  public set date(date: EventDate) {
    this._date = date;
  }
}
