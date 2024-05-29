import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { NgFor, NgIf } from '@angular/common';
import { CsvService } from '../services/csv.service';

@Component({
  selector: 'app-employment-agencies',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './employment-agencies.component.html',
  styleUrl: './employment-agencies.component.css',
  providers: [AuthService],
})
export class EmploymentAgenciesComponent {
agencies: any[] = [];

  constructor(private dataService: DataService,private authService: AuthService,private csvService: CsvService) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.dataService.getData().subscribe({
          next: (response) => {
            this.agencies = response;
          },
          error: (error) => {
            console.error('Error fetching data: ', error);
          }
      });
    } else {
      console.log('User is not logged in');
    }
  }
  downloadCSV() {
    this.csvService.downloadCsv(this.agencies, 'employment-agencies');
  }
}
