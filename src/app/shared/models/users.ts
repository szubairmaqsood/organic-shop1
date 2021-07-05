export class Users {
    private _userName:string;
    private _password:string;

    constructor(){
        this._userName = "Hello";
        this._password = "Hello";
    }

    set userName(name:string){
        this._userName = name;
    }

    get userName():string{
        return this._userName;
    }

    set password(name:string){
        this._userName = name;
    }

    get password():string{
        return this._userName;
    }
}
