import { AnswerCount } from "./AnswerCount";
import { RegisterUser } from "./RegisterUser";

export class UserList {
  constructor(
    // ユーザー情報
    private _userList: Array<RegisterUser>,
    // answerCountオブジェクト
    private _answerCount: AnswerCount
  ) {}

  public get userList(): Array<RegisterUser> {
    return this._userList;
  }

  public set userList(userList: Array<RegisterUser>) {
    this._userList = userList;
  }

  public get answerCount(): AnswerCount {
    return this._answerCount;
  }

  public set answerCount(answerCount: AnswerCount) {
    this._answerCount = answerCount;
  }
}
