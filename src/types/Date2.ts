/**
 * 日程の部品クラスです.
 */
export class Date2 {
  constructor(
    // id
    private _id: number,
    // 日程の配列
    private _date: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get date(): string {
    return this._date;
  }

  public set date(date: string) {
    this._date = date;
  }
}
