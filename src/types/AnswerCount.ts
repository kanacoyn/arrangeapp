export class AnswerCount {
  constructor(
    // id
    private _id: number,
    // 〇のカウント数
    private _answerCount: number
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get answerCount(): number {
    return this._answerCount;
  }

  public set answerCount(answerCount: number) {
    this._answerCount = answerCount;
  }
}
