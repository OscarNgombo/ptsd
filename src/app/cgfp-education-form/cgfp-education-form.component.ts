import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cgfp-education-form',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './cgfp-education-form.component.html',
  styleUrl: './cgfp-education-form.component.css',
})
export class CgfpEducationFormComponent {
  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  formData: string = '';
  section1Data: any;
  section2Data: any;
  institutions = [
    { id: 1, name: 'University' },
    { id: 2, name: 'National Polytechnics' },
    { id: 3, name: 'TVET Institution' },
    { id: 4, name: 'Vocational Training Centres Institution' },
    { id: 5, name: 'Secondary School' },
    { id: 6, name: 'Primary School' },
    { id: 7, name: 'Others (Specify)' },
  ];
  onFormSubmit() {
    this.formSubmit.emit(this.formData);
    this.formData = '';
  }
}
