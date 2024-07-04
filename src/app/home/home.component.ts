import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceStatusService } from '../services/service-status.service';
import { AuthService } from '../services/auth.service';
import { ServiceStatus } from '../models/service_status.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ServiceStatusService, AuthService],
})
export class HomeComponent {
  constructor(
    private serviceStatusService: ServiceStatusService,
    private authService: AuthService
  ) {}
  serviceStatus: boolean = false;
  user = Number(this.authService.getUserDetails()?.id);

  ngOnInit() {
    this.serviceStatusService.getService(this.user).subscribe((data) => {
      const userID = data.body['services'][0] as ServiceStatus;
      this.user = Number(this.authService.getUserDetails()?.id);
      if (this.user == Number(userID.user)) {
        this.serviceStatus = true;
        console.log(this.serviceStatus);
      } else {
        console.log(userID.user);
      }
    });
  }
}
