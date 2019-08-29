
import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '../home/authorization.service';

@Injectable()
export class UserAccessGuard implements CanActivate {
  
  isLoggedIn: boolean;
  constructor(private router: Router, private authorizationService: AuthorizationService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.authorizationService.isLoggedInChanges$.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
  );
    if (this.isLoggedIn !== undefined && this.isLoggedIn === false) {
      alert('Kindly login to continue !!!!!!');
      this.router.navigate(['/welcome']);
      return false;
  }
    return true;
  }
}
