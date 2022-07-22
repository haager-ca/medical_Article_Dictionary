import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './_pages/welcome/welcome.component';
import { HomeComponent } from './_pages/home/home.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './_pages/login/login.component';
import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { JoinAuthorsPipe } from './_pipes/join-authors.pipe';
import { RegisterComponent } from './_pages/register/register.component';
registerLocaleData(localeDe, "de-DE", localeDeExtra);

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    JoinAuthorsPipe,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de-DE',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
