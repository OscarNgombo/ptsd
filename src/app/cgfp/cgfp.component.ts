import { Component } from '@angular/core';
import { ClickableListComponent } from "../clickable-list/clickable-list.component";
import { CgfpEducationFormComponent } from "../cgfp-education-form/cgfp-education-form.component";
import { NgIf } from '@angular/common';
import { CgfpEmploymentAgencyFormComponent } from '../cgfp-employment-agency-form/cgfp-employment-agency-form.component';
import { CgeiReportingFormComponent } from "../cgei-reporting-form/cgei-reporting-form.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-cgfp',
    standalone: true,
    templateUrl: './cgfp.component.html',
    styleUrl: './cgfp.component.css',
    imports: [ClickableListComponent,RouterOutlet, CgfpEducationFormComponent, CgfpEmploymentAgencyFormComponent, NgIf, CgeiReportingFormComponent]
})
export class CGFPComponent {
  isModalOpen: boolean = false;
  constructor() {}

  handleFormSubmit(data: string) {
    // Handle the submitted data from the modal form
    console.log('Submitted data:', data);
    // Perform any necessary actions with the submitted data
    this.isModalOpen = false; // Close the modal after form submission
  }

}
