/**
 * イベントの部品クラスです.
 */
export class Event {
  constructor(
    // イベント名
    private _eventName: string,
    // 候補日程
    private _date: Array<Date>,
    // 説明文
    private _description: string,
    // メールアドレス
    private _email: string,
    // パスワード
    private _password: string,
    // 回答の選択肢
    private _answerChoice: string
  ) {}

  public get eventName(): string {
    return this._eventName;
  }

  public set eventName(eventName: string) {
    this._eventName = eventName;
  }

  public get date(): Array<Date> {
    return this._date;
  }

  public set date(date: Array<Date>) {
    this._date = date;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get password(): string {
    return this._password;
  }

  public set password(password: string) {
    this._password = password;
  }

  public get answerChoice(): string {
    return this._answerChoice;
  }

  public set answerChoice(answerChoice: string) {
    this._answerChoice = answerChoice;
  }
}
