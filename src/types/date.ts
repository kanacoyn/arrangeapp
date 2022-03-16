// import { format } from "date-fns";

export class Date {
  static toDateString(): Date {
    throw new Error("Method not implemented.");
  }
  toDateString: any;
  constructor(
    private _dateId: number,
    private _date: string,
    // 回答
    private _registerAnswer: string
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

  public get registerAnswer(): string {
    return this._registerAnswer;
  }

  public set registerAnswer(registerAnswer: string) {
    this._registerAnswer = registerAnswer;
  }
}
