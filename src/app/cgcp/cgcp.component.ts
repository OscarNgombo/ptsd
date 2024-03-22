import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CgfpService } from '../services/cgfp.service';
import { HttpClientModule } from '@angular/common/http';
import { Cgfp } from '../models/cgfp.model';

@Component({
  selector: 'app-cgcp',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule, HttpClientModule, FormsModule],
  templateUrl: './cgcp.component.html',
  styleUrl: './cgcp.component.css',
  providers: [CgfpService],
})
export class CgcpComponent {
  showMessage: boolean = false;
  router: any;

  constructor(private apiService: CgfpService) {}

  ngOnInit() {}

  onFormSubmit() {
    if (this.cgcpData.valid) {
      this.showMessage = true;
      this.apiService.create(this.cgcpData.value as Cgfp).subscribe((data) => {
        console.log(data);
        this.cgcpData = data;
      });
      setTimeout(() => {
        this.showMessage = false;
      }, 10000);
      this.router.navigate(['/home']);
    }
  }
  onAgencyTypeChange(event: any) {
    const agencyType = this.cgcpData.get('agency_type');
    if (agencyType) {
      agencyType.setValue(event.target.value);
      console.log(agencyType.value);
    }
  }

  onOcsTypeChange(event: any) {
    const ocsType = this.cgcpData.get('established');
    if (ocsType) {
      ocsType.setValue(event.target.value);
      console.log(ocsType.value);
    }
  }

  cgcpData = new FormGroup({
    name: new FormControl('', [Validators.required]),
    sub_county: new FormControl('', [Validators.required]),
    contact_person_email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    contact_person_phone: new FormControl('', [
      Validators.pattern('^[0-9]{10}$'),
      Validators.required,
    ]),
    agency_type: new FormControl('', [Validators.required]),
    total_trainers: new FormControl('', [Validators.required]),
    total_counselors: new FormControl('', [Validators.required]),
    total_info_specialists: new FormControl('', [Validators.required]),
    established: new FormControl('', [Validators.required]),
    persons_accessed_training: new FormControl('', [Validators.required]),
    persons_accessed_counseling: new FormControl('', [Validators.required]),
    persons_accessed_info: new FormControl('', [Validators.required]),
    staff_trained: new FormControl('', [Validators.required]),
    male_persons: new FormControl('', [Validators.required]),
    female_persons: new FormControl('', [Validators.required]),
    male_disabilities: new FormControl('', [Validators.required]),
    female_disabilities: new FormControl('', [Validators.required]),
  });
}
