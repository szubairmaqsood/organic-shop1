export class Users {
  private _userName: string;
  private _password: string;
  private _email: string;

  constructor() {
    this._userName = 'Dummy User Name';
    this._password = 'Dummy password';
    this._email = 'Dummy Email';
  }

  set userName(name: string) {
    this._userName = name;
  }

  get userName(): string {
    return this._userName;
  }

  set password(password: string) {
    this._password = password;
  }

  get password(): string {
    return this._password;
  }

  set email(email: string) {
    this._email = email;
  }

  get email(): string {
    return this._email;
  }
}
