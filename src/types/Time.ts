/**
 * 時間の部品クラスです.
 */
export class Time {
  constructor(
    // id
    private _id: number,
    // 時間の配列
    private _dateTime: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get dateTime(): string {
    return this._dateTime;
  }

  public set dateTime(dateTime: string) {
    this._dateTime = dateTime;
  }
}
