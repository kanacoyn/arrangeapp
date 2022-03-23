/**
 * 都市の部品クラスです.
 */
export class City {
  constructor(
    // ID
    private _id: number,
    // 都市の名前
    private _name: string,
    // 都市の時間
    private _time: string
  ) {}

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get time(): string {
    return this._time;
  }

  public set time(time: string) {
    this._time = time;
  }
}
