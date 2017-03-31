import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <StackLayout>
      <Image src="res://logo_login" stretch="none" horizontalAlignment="center"></Image>
      <TextField hint="Email Address" keyboardType="email" [(ngModel)]="email"
        autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="Password" secure="true"></TextField>

      <Button [text]="isLoggingIn? 'Sign in' : 'Sign up'" class="submit-button" (tap)="submit()"></Button>
      <Button [text]="isLoggingIn? 'Sign up' : 'Back to login'" (tap)="toggleDisplay()"></Button>
    </StackLayout>
  `,
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {
  email = 'person@example.com';
  isLoggingIn = true;
  submit() {
    let msg = `Submit!  ${this.email}`;
    console.log(msg);
    alert(msg);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
