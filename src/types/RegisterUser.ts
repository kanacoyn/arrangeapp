import { EventDate } from "./date";
/**
 * 回答内容の部品クラスです.
 */
export class RegisterUser {
  constructor(
    // id
    private _userId: number,
    // 名前
    private _name: string,
    // 登録された候補日程
    private _registerDateList: Array<EventDate>,
    // 日程に対する回答
    private _registerAnswer: Array<string>,
    // コメント
    private _comment: string
  ) {}

  public get userId(): number {
    return this._userId;
  }

  public set userId(userId: number) {
    this._userId = userId;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get registerDateList(): Array<EventDate> {
    return this._registerDateList;
  }

  public set registerDateList(registerDateList: Array<EventDate>) {
    this._registerDateList = registerDateList;
  }

  public get registerAnswer(): Array<string> {
    return this._registerAnswer;
  }

  public set registerAnswer(registerAnswer: Array<string>) {
    this._registerAnswer = registerAnswer;
  }

  public get comment(): string {
    return this._comment;
  }

  public set comment(comment: string) {
    this._comment = comment;
  }
}
