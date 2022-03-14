import { RegisterUser } from "@/types/RegisterUser";
/**
 * 回答一覧の部品クラスです.
 */
export class AnswerList {
  constructor(
    // id
    private _useId: number,
    // 受け取った回答一覧
    private _receiveAnswerList: Array<RegisterUser>
  ) {}

  public get useId(): number {
    return this._useId;
  }

  public set useId(useId: number) {
    this._useId = useId;
  }

  public get receiveAnswerList(): Array<RegisterUser> {
    return this._receiveAnswerList;
  }

  public set receiveAnswerList(receiveAnswerList: Array<RegisterUser>) {
    this._receiveAnswerList = receiveAnswerList;
  }
}
