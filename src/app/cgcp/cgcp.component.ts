import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cgcp',
  standalone: true,
  imports: [NgIf,NgFor,ReactiveFormsModule,FormsModule],
  templateUrl: './cgcp.component.html',
  styleUrl: './cgcp.component.css'
})
export class CgcpComponent {
  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  formData: string = '';
  showMessage: boolean = false;
  router: any;
  onFormSubmit() {
    this.formSubmit.emit(this.formData);
    this.formData = '';
if (this.cgcpData.valid){
  this.showMessage = true;
  setTimeout(() => {
    this.showMessage = false;
  }, 10000);
  this.router.navigate(['/home']);
}
  }

  cgcpData = new FormGroup({
    employmentAgency: new FormControl('', [Validators.required]),
    subCounty: new FormControl('',[Validators.required]),
    contactPersonEmail: new FormControl('', [Validators.required,Validators.email]),
    contactPersonPhone: new FormControl('', [Validators.pattern('^[0-9]{10}$'),Validators.required]),
    agencyType: new FormControl('', [Validators.required]),
    careerGuidanceNumber: new FormControl('', [Validators.required]),
    careerCounsellorsNumber: new FormControl('', [Validators.required]),
    careerInformationSpecialists: new FormControl('', [Validators.required]),
    ocs: new FormControl('', [Validators.required]),
    noCareerGuidanceAccess: new FormControl('', [Validators.required]),
    noCareerCounsellingAccess: new FormControl('', [Validators.required]),
    noCareerGuidanceInformation: new FormControl('', [Validators.required]),
    noStaffTrainedCareerGuidance: new FormControl('', [Validators.required]),
    malePersonNo: new FormControl('', [Validators.required]),
    femalePersonNo: new FormControl('', [Validators.required]),
    maleDisabilityNo: new FormControl('', [Validators.required]),
    femaleDisabilityNo: new FormControl('', [Validators.required]),
  });
}
