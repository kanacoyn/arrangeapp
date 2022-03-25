/**
 * イベントの部品クラスです.
 */
import { City } from "./City";
import { EventDate } from "./date";
export class Event {
  constructor(
    // id
    private _eventId: number,
    // イベント名
    private _eventName: string,
    // イベントの説明
    private _description: string,
    // 日本の日時
    private _date: EventDate,
    // メールアドレス
    private _email: string,
    // パスワード
    private _password: string,
    // 回答時の選択
    private _answerChoice: string,
    // 都市クラス
    private _cityArray: Array<City>
  ) {}

  public get eventId(): number {
    return this.eventId;
  }

  public set eventId(eventId: number) {
    this.eventId = eventId;
  }
  public get eventName(): string {
    return this._eventName;
  }

  public set eventName(eventName: string) {
    this._eventName = eventName;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get date(): EventDate {
    return this._date;
  }

  public set date(date: EventDate) {
    this._date = date;
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

  public get cityArray(): Array<City> {
    return this._cityArray;
  }

  public set cityArray(cityArray: Array<City>) {
    this._cityArray = cityArray;
  }
}
