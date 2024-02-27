import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cgfp-employment-agency-form',
  standalone: true,
  imports: [],
  templateUrl: './cgfp-employment-agency-form.component.html',
  styleUrl: './cgfp-employment-agency-form.component.css'
})
export class CgfpEmploymentAgencyFormComponent {
@Output() formSubmit: EventEmitter<string> = new EventEmitter();
  formData: string | undefined;

onFormSubmit() {
  this.formSubmit.emit(this.formData);
  this.formData = '';
}

}
