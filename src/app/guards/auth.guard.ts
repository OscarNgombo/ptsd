import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}
  user = this.authService.getUserDetails();
  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      if (this.user?.is_staff === false) {
          return true;
      }
      else{
        this.router.navigate(['/registered_agencies']);
        return true;
      }
  } else {
      this.router.navigate(['/login']);
      return false;
    }
  }


}
