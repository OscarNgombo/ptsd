import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  getData() {
    const user = this.authService.getUserDetails();
    if (user) {
      return user.email;
    } else {
      return undefined;
    }
  }
}
