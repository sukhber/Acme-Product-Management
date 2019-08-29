import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AuthorizationService {

  private isLoggedIn = new Subject<boolean | null>();
  isLoggedInChanges$ = this.isLoggedIn.asObservable();

  setIsLoggedIn(value: boolean): void {
    this.isLoggedIn.next(value);
  }

  private userName = new Subject<string>();
  userNameChanges$ = this.userName.asObservable();

  setuserName(value: string): void {
    this.userName.next(value);
  }

  /*
  private _userName: string;

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }
*/
 


  password: string;

  constructor() { }
}
