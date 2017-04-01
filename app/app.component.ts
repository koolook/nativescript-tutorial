import { Component } from "@angular/core";
import { User } from "./shared/user/user";

@Component({
  selector: "my-app",
  templateUrl: 'pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor() {
    // this.user = new User();
    this.user = <User>{email: 'person@example.com', password: 'let-me-pass'};
  }

  submit() {
    let msg = `Submit!  ${this.user.email}`;
    console.log(msg);
    alert(msg);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
