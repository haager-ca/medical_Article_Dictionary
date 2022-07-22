import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public name: string = "";
  public username: string = "";
  public password: string = "";
  public password2: string = "";
  public formInValid: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public addNewUser() {
    if(this.name && this.username && this.password && this.password2) {
      this.formInValid = false;

    } else {
      this.formInValid = true;
    }
  }

}
