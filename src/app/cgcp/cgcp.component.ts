import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cgcp',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './cgcp.component.html',
  styleUrl: './cgcp.component.css'
})
export class CgcpComponent {
  @Output() formSubmit: EventEmitter<string> = new EventEmitter();

  formData: string = '';
  onFormSubmit() {
    this.formSubmit.emit(this.formData);
    this.formData = '';
  }
}
