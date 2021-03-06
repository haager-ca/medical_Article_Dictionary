import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './_guards/authentication.guard';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { RegisterComponent } from './_pages/register/register.component';
import { WelcomeComponent } from './_pages/welcome/welcome.component';

const routes: Routes = [
  {
    path: "welcome",
    component: WelcomeComponent,
    canDeactivate: [AuthenticationGuard],
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
    path:"register",
    component: RegisterComponent,
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
