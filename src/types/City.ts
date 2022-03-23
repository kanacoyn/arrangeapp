import { EventDate } from "./date";

/**
 * 都市の部品クラスです.
 */
export class City {
  constructor(
    // ID
    private _id: number,
    // 都市の名前
    private _name: Array<string>,
    // 日時の配列
    private _date: Array<EventDate>
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): Array<string> {
    return this._name;
  }

  public set name(name: Array<string>) {
    this._name = name;
  }

  public get date(): Array<EventDate> {
    return this._date;
  }

  public set date(date: Array<EventDate>) {
    this._date = date;
  }
}
