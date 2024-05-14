import { Component,Input, Output, EventEmitter} from '@angular/core';
import { AppComponent } from "../app.component";
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [AppComponent,NgClass,RouterLink,NgIf],
    providers:[AuthService]
})
export class NavbarComponent {
  constructor(public authService: AuthService,private router: Router) {}

  isMenuOpen: boolean = false;

  @Input()
  receivedString!: string;


  // responsible for opening the navigation menu when on mobile view
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  // responsible for closing the navigation menu when the user clicks outside of it.
  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
    // Additional logic, such as redirecting to the login page, can be added here
  }
  // ngOnInit() {
  //   this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
  //     this.router.navigate([this.router.url]);
  //   });
  // }

  getUser() {
    const user = this.authService.getUserDetails();
    if (user) {
      const prof = {email:user.email,username:user.username}
      return prof;
    } else {
      return undefined;
    }
  }
}
