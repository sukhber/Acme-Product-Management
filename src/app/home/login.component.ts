import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  userName: string;
  constructor(private authorizationService: AuthorizationService, private router: Router) {
    
  }

  onLogin(): void {
    this.authorizationService.setIsLoggedIn(true);
    this.authorizationService.setuserName(this.userName);
    this.router.navigate(['/welcome']);
  }

  onCancel(): void {
    this.router.navigate(['/welcome']);
  }

  ngOnInit(): void {
    this.authorizationService.userNameChanges$.subscribe(
      userName => this.userName = userName
    );
  }

}
