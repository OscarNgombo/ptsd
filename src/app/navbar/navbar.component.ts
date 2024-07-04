import { Component,Input} from '@angular/core';
import { AppComponent } from "../app.component";
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ServiceStatusService } from '../services/service-status.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [AppComponent,NgClass,RouterLink,NgIf,NgFor],
    providers:[AuthService]
})
export class NavbarComponent {
  constructor(private serviceStatusService: ServiceStatusService,public authService: AuthService,private router: Router) {}

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
  getUser() {
    const user = this.authService.getUserDetails();
    if (user) {
      const prof = {email:user.email,username:user.username}
      return prof;
    } else {
      return undefined;
    }
  }
  getAccessibleServices(): { service: string, access: boolean }[] | [] {
    const userServices = this.authService.getUserServices();
    if (userServices && userServices.length > 0) {
      // Filter the services that have access
      const accessibleServices = userServices.filter(service => service.access === true);
      // Map the service names and access status
      return accessibleServices.map(service => ({ service: service.name, access: service.access }));
    } else {
      return [];
    }
  }
  navigateToSelectedService(selectedService: string) {
    // You can implement the logic to navigate based on the selected service
    switch (selectedService) {
      case 'STMP':
        this.router.navigate(['/stmp']);
        break;
      case 'CGFP':
        this.router.navigate(['/cgfp']);
        break;
      case 'CGCP':
        this.router.navigate(['/cgcp']);
        break;
      case 'NTID':
        this.router.navigate(['/ntid']);
        break;
      case 'NOESDP':
        this.router.navigate(['/noesdp']);
        break;
      // Add more cases for other services if needed
    }
  }
  getServiceValue(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement)?.value;
    if (selectedValue) {
      // Handle the selected value
      this.navigateToSelectedService(selectedValue);
      console.log(selectedValue);
    }
  }

}
