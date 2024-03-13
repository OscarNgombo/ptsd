import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cgfp-education-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './cgfp-education-form.component.html',
  styleUrl: './cgfp-education-form.component.css',
})
export class CgfpEducationFormComponent {
  selectedInstitutionId: number | null = null;
  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  formData: string = '';
constructor(private fb:FormBuilder){}
  institutions = [
    { id: 1, name: 'University' },
    { id: 2, name: 'National Polytechnics' },
    { id: 3, name: 'TVET Institution' },
    { id: 4, name: 'Vocational Training Centres Institution' },
    { id: 5, name: 'Secondary School' },
    { id: 6, name: 'Primary School' },
    { id: 7, name: 'Others (Specify)' },
  ];
  showMessage: boolean =false;
  router: Router = new Router;
  showInputField(institutionId: number): void {
    this.selectedInstitutionId = institutionId;
    const selectedInstitution = this.institutions.find(institution => institution.id === institutionId);
    if (selectedInstitution) {
      console.log(selectedInstitution.name); // Output: The name of the institution corresponding to the provided ID
    } else {
      console.log('Institution not found');
    }
  }
  onFormSubmit() {
    this.formSubmit.emit(this.formData);
    this.formData = '';
    if (this.cgfpEducation.valid){
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 10000);
      this.router.navigate(['/home']);
    }
    //this.cgfpEducation.value.institution
    //this.cgfpEducation.controls.institution.value
    console.log(this.cgfpEducation.get('institution')?.value);
  }
  cgfpEducation = new FormGroup({
    institution: new FormControl('', [Validators.required]),
    institutionSubCounty: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', [Validators.pattern('^[0-9]{9}$'),Validators.required]),
    // // agencyType: new FormControl('', [Validators.required]),

    learners: new FormControl('', [Validators.required]),
    careerEducators: new FormControl('', [Validators.required]),
    careerCounsellors: new FormControl('', [Validators.required]),
    infoSpecialists: new FormControl('', [Validators.required]),
    ocs: new FormControl('', [Validators.required]),
    learnersAccessEducation: new FormControl('', [Validators.required]),
    otherInstitutions: new FormControl('', [Validators.required]),
    learnersCounsellingAccess: new FormControl('', [Validators.required]),
    learnersInfoAccess: new FormControl('', [Validators.required]),
    staffTrained: new FormControl('', [Validators.required]),
    maleLearners: new FormControl('', [Validators.required]),
    femaleLearners: new FormControl('', [Validators.required]),
    maleDisability: new FormControl('', [Validators.required]),
    femaleDisability: new FormControl('', [Validators.required]),

  });
}
