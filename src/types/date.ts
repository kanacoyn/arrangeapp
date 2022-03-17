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
    // 〇のカウント数
    private _answerCount: number
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

  public get answerCount(): number {
    return this._answerCount;
  }

  public set answerCount(answerCount: number) {
    this._answerCount = answerCount;
  }
}
