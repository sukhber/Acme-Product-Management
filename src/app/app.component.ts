import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './home/authorization.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {

  pageTitle: string = 'Acme Product Management';

  userName: string;
  isLoggedIn: boolean;

  constructor(private authorizationService: AuthorizationService, private router: Router) {}

  ngOnInit(): void {
    this.authorizationService.userNameChanges$.subscribe(
      userName => this.userName = userName
    );
    this.authorizationService.isLoggedInChanges$.subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
    );
  }

  logOut(): void {
    alert('You are successfully logged out !!!!');
    this.authorizationService.setIsLoggedIn(false);
    this.router.navigate(['/welcome']);
  } 
}