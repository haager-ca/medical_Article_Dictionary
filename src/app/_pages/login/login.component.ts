import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  public username: string = "";
  public password: string = "";
  public formInvalid: boolean = false;
  public usernameOrPasswordWrong: boolean = false;


  ngOnInit(): void {
  }

  public login(): void {
    if (this.username && this.password) {
      this.formInvalid = false;
      // der Benutzer hat etwas in die Felder eingegeben
      const loginSuccessful: boolean = this.authenticationService.login(this.username, this.password)
      console.log("Loginvorgangsresultat", loginSuccessful)
      if (loginSuccessful) {
        this.usernameOrPasswordWrong = false;
        this.router.navigate(["/home"]);
      } else {
        this.usernameOrPasswordWrong = true;
      }
    } else {
      this.formInvalid = true;
    }
  }

}
