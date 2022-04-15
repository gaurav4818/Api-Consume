export class User {
  constructor(
    public email: string,
    public id: Number,
    private _token: string
  ) {}

  get token() {
    return this._token;
  }
}
