import { Date } from "./date";

export class Event {
  constructor(
    private _eventName: string,
    private _description: string,
    private _date: Array<Date>,
    private _email: string,
    private _password: string,
    private _answerChoice: string
  ) {}
  
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

  public get date(): Array<Date> {
    return this._date;
  }

  public set date(date: Array<Date>) {
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
}
