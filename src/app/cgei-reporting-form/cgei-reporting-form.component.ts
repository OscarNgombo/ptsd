import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cgei-reporting-form',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './cgei-reporting-form.component.html',
  styleUrl: './cgei-reporting-form.component.css'
})
export class CgeiReportingFormComponent {
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
}
