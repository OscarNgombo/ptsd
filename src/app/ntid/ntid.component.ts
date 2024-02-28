import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ntid',
  standalone: true,
  imports: [],
  templateUrl: './ntid.component.html',
  styleUrl: './ntid.component.css'
})
export class NtidComponent {
  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  formData: string = '';
  onFormSubmit() {
    this.formSubmit.emit(this.formData);
    this.formData = '';
  }
}
