import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorizationService } from './authorization.service';
import { WelcomeComponent } from './welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { UserAccessRoutingModule } from './user-access-routing.module';

@NgModule({
  declarations: [WelcomeComponent, LoginComponent, PageNotFoundComponent],
  imports: [
    SharedModule,
    UserAccessRoutingModule
  ],
  providers: [AuthorizationService]
})
export class UserAccessModule { }
