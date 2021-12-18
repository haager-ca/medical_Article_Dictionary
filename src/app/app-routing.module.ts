import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { WelcomeComponent } from './_pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: "welcome",
    component: WelcomeComponent,
    //canActivate: [AuthenticationGuard],
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthenticationGuard],

  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "**",
    redirectTo: "/welcome",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
