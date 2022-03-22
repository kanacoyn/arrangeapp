import { RegisterUser } from "./RegisterUser";

export class UserList {
  constructor(
    // ユーザー情報
    private _userList: Array<RegisterUser>,
    // 〇のカウント数
    private _answerCount: Array<number>
  ) {}

  public get userList(): Array<RegisterUser> {
    return this._userList;
  }

  public set userList(userList: Array<RegisterUser>) {
    this._userList = userList;
  }

  public get answerCount(): Array<number> {
    return this._answerCount;
  }

  public set answerCount(answerCount: Array<number>) {
    this._answerCount = answerCount;
  }
}
