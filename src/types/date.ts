// import { format } from "date-fns";

export class EventDate {
  static toDateString(): Date {
    throw new Error("Method not implemented.");
  }
  toDateString: any;
  constructor(
    // id
    private _dateId: number,
    // 候補日程
    private _date: string,
    // 時間
    private _dateTime: string
  ) {}

  // get formatDate(): string {
  //   const formatDateList = format(this.date.toDateString(), "yyyy/MM/dd HH:mm");
  //   return formatDateList;
  // }

  public get dateId(): number {
    return this._dateId;
  }

  public set dateId(dateId: number) {
    this._dateId = dateId;
  }

  public get date(): string {
    return this._date;
  }

  public set date(date: string) {
    this._date = date;
  }

  public get dateTime(): string {
    return this._dateTime;
  }

  public set dateTime(dateTime: string) {
    this._dateTime = dateTime;
  }
}
