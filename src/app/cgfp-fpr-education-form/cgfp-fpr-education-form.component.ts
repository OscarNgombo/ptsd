import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cgfp-fpr-education-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './cgfp-fpr-education-form.component.html',
  styleUrl: './cgfp-fpr-education-form.component.css'
})
export class CgfpFprEducationFormComponent {
  selectedInstitutionId: number | null = null;
  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  formData: string = '';

  institutions = [
    { id: 1, name: 'University' },
    { id: 2, name: 'National Polytechnics' },
    { id: 3, name: 'TVET Institution' },
    { id: 4, name: 'Vocational Training Centres Institution' },
    { id: 5, name: 'Secondary School' },
    { id: 6, name: 'Primary School' },
    { id: 7, name: 'Others (Specify)' },
  ];
  showInputField(institutionId: number): void {
    this.selectedInstitutionId = institutionId;
  }
  onFormSubmit() {
    this.formSubmit.emit(this.formData);
    this.formData = '';
  }
  fprEducation = new FormGroup({
    name: new FormControl('', [Validators.required]),
    region: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', [Validators.pattern('^[0-9]{9}$'),Validators.required]),
    institution: new FormControl('', [Validators.required]),

    institutionCount: new FormControl('', [Validators.required]),
    learners: new FormControl('', [Validators.required]),
    totalInstitution: new FormControl('', [Validators.required]),
    counsellors: new FormControl('', [Validators.required]),
    informationSpecialists: new FormControl('', [Validators.required]),
    ocs: new FormControl('', [Validators.required]),
    learnersAccessEducation: new FormControl('', [Validators.required]),
    learnersCounsellingAccess: new FormControl('', [Validators.required]),
    learnersCGInfo: new FormControl('', [Validators.required]),
    staffTrained: new FormControl('', [Validators.required]),
    maleLearners: new FormControl('', [Validators.required]),
    femaleLearners: new FormControl('', [Validators.required]),
    maleDisability: new FormControl('', [Validators.required]),
    femaleDisability: new FormControl('', [Validators.required]),

  });
}
