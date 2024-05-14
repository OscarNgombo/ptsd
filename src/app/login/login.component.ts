import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../guards/auth.guard';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,FormsModule,NgIf,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService,AuthGuard,HttpClientModule],
})

export class LoginComponent {

  constructor( private apiService: AuthService,private router: Router){}

  ngOnInit() {
    this.router.navigateByUrl('/login', {skipLocationChange: true}).then(() => {
      this.router.navigate([this.router.url]);
    });
  }
  getGreeting() {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
      return 'Good morning';
    } else if (hours >= 12 && hours < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.apiService.login(loginData as User).subscribe({
        next: (response) => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);
          console.log('Login failed');
        },
      });

    }
  }


  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
}

