import { Component } from "@angular/core";
import { User } from "./shared/user/user";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: 'pages/login/login.html',
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  user: User;
  isLoggingIn = true;

  constructor(private userService : UserService) {
    this.user = new User();
    this.user.email = 'u1@example.com';
    this.user.password = 'qwerty';
    // this.user = <User>{email: 'person@example.com', password: 'let-me-pass'};
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {

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
