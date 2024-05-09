import { Component,Input, Output, EventEmitter} from '@angular/core';
import { AppComponent } from "../app.component";
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  constructor(public authService: AuthService) {}
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

}
