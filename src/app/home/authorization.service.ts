import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthorizationService {

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedInChanges$ = this.isLoggedIn.asObservable();

  setIsLoggedIn(value: boolean): void {
    this.isLoggedIn.next(value);
  }

  private userName = new BehaviorSubject<string>(null);
  userNameChanges$ = this.userName.asObservable();

  setuserName(value: string): void {
    this.userName.next(value);
  }
  constructor() { }
}
