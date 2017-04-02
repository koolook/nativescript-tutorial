import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";


@Component({
  selector: "login",
  providers: [UserService],
  templateUrl: 'pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService : UserService, private router: Router, private page: Page) {
    this.user = new User();
    this.user.email = 'u1@example.com';
    this.user.password = 'qwerty';
    // this.user = <User>{email: 'person@example.com', password: 'let-me-pass'};
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.userService.login(this.user)
    .toPromise()
    .then(() => {
        this.router.navigate(['/list']);
    })
    .catch(err => {
    let errorString = err.toString();
    alert(`Error! : ${errorString}`);
    })

  }

  signUp() {
    this.userService.register(this.user)
      .toPromise()
      .then(() => {
        alert('Account created.');
        this.toggleDisplay();
      })
      .catch(err => {
        let errorString = err.toString();
        alert(`Error! : ${errorString}`);
      })
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
