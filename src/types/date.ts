// import { format } from "date-fns";

import { Date2 } from "./Date2";
import { Time } from "./Time";

export class EventDate {
  static toDateString(): Date {
    throw new Error("Method not implemented.");
  }
  toDateString: any;
  constructor(
    // id
    private _dateId: number,
    // 候補日程
    private _date: Array<Date2>,
    // 時間
    private _dateTime: Array<Time>
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

  public get date(): Array<Date2> {
    return this._date;
  }

  public set date(date: Array<Date2>) {
    this._date = date;
  }

  public get dateTime(): Array<Time> {
    return this._dateTime;
  }

  public set dateTime(dateTime: Array<Time>) {
    this._dateTime = dateTime;
  }
}
