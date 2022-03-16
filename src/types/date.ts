import { format } from "date-fns";

export class Date {
  toDateString: any;
  constructor(
    private _dateId: number,
    private _date: Date,
    // 回答
    private _registerAnswer: string
  ) {}

  get formatDate(): string {
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

  public get registerAnswer(): string {
    return this._registerAnswer;
  }

  public set registerAnswer(registerAnswer: string) {
    this._registerAnswer = registerAnswer;
  }
}
