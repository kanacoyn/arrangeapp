// import { format } from "date-fns";
// import ja from "date-fns/locale/ja";

export class Date {
  constructor(private _dateId: number, private _date: Date) {}

  // public get formatDate(): string {
  //   const formatString = format(this.date, "MM/dd(E)", { locale: ja });
  //   return formatString;
  // }

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
