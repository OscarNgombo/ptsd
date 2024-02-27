import { Component } from '@angular/core';
import { ClickableListComponent } from "../clickable-list/clickable-list.component";
import { CgfpEducationFormComponent } from "../cgfp-education-form/cgfp-education-form.component";
import { NgIf } from '@angular/common';
import { CgfpEmploymentAgencyFormComponent } from '../cgfp-employment-agency-form/cgfp-employment-agency-form.component';
import { CgeiReportingFormComponent } from "../cgei-reporting-form/cgei-reporting-form.component";

@Component({
    selector: 'app-cgfp',
    standalone: true,
    templateUrl: './cgfp.component.html',
    styleUrl: './cgfp.component.css',
    imports: [ClickableListComponent, CgfpEducationFormComponent, CgfpEmploymentAgencyFormComponent, NgIf, CgeiReportingFormComponent]
})
export class CGFPComponent {
  isModalOpen: boolean = false;

  openModal(index: number) {
    if (index === 0){
      this.isModalOpen = true;
      // Perform any other necessary actions when the modal opens based on the clicked item
    }
    if (index === 1){
      this.isModalOpen = true;
      // Perform any other necessary actions when the modal opens based on the clicked item
    }
    if (index === 2){
      this.isModalOpen = true;
      // Perform any other necessary actions when the modal opens based on the clicked item
    }
  }

  handleFormSubmit(data: string) {
    // Handle the submitted data from the modal form
    console.log('Submitted data:', data);
    // Perform any necessary actions with the submitted data
    this.isModalOpen = false; // Close the modal after form submission
  }
}
