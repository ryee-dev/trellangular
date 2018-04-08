export class Board {
  public $key: string;
  constructor (
    public title: string,
    public color: string,
    public shared: boolean,
    public starred: boolean
  ) { }
}
