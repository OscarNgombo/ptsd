import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { CgfpService } from '../services/cgfp.service';
import { User } from '../models/user.model';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [CgfpService],
})

export class LoginComponent {

  constructor( private apiService: CgfpService,private router: Router){}

  ngOnInit():void{
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.apiService.login(loginData as User).subscribe({
        next: (status: number) => {
          if (status === 200) {
            alert('Login Successful');
            this.loginForm.reset();
            this.router.navigate(['/home']);
          } else {
            alert('Login Failed. User not found');
          }
        },
        error: (err) => {
          alert('Something went wrong. Error details: ' + JSON.stringify(err));
        }
      });
    }
  }




  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
}

