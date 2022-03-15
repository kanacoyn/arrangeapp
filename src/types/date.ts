import { format } from "date-fns";

export class Date {
  static toDateString(): Date {
    throw new Error("Method not implemented.");
  }
  toDateString: any;
  constructor(private _dateId: number, private _date: Date) {}

  get formatDate() {
    const formatDateList = format(this.date.toDateString(), "yyyy/MM/dd HH:mm");
    return formatDateList;
  }

  public get dateId(): number {
    return this._dateId;
  }

  public set dateId(dateId: number) {
    this._dateId = dateId;
  }

  public get date(): Date {
    return this._date;
  }

  public set date(date: Date) {
    this._date = date;
  }
}
