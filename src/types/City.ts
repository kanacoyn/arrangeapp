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
    // 候補日程
    private _dateArray: Array<EventDate>
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

  public get dateArray(): Array<EventDate> {
    return this._dateArray;
  }

  public set dateArray(dateArray: Array<EventDate>) {
    this._dateArray = dateArray;
  }
}
