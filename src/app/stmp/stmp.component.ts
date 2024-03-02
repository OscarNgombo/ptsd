import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-stmp',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgForOf],
  templateUrl: './stmp.component.html',
  styleUrl: './stmp.component.css'
})
export class StmpComponent implements OnInit {
  currentStep: number = 1;
  isDetailsFormValid: boolean = false;
  isEducationBackgroundFormValid: boolean = false;
  selectedCounty: string = ''; // This will store the selected county
  showMessage: boolean = false;

  constructor() {
  }
  counties = [
    'Mombasa',
    'Kwale',
    'Kilifi',
    'Tana River',
    'Lamu',
    'Taita/Taveta',
    'Garissa',
    'Wajir',
    'Mandera',
    'Marsabit',
    'Isiolo',
    'Meru',
    'Tharaka-Nithi',
    'Embu',
    'Kitui',
    'Machakos',
    'Makueni',
    'Nyandarua',
    'Nyeri',
    'Kirinyaga',
    "Murang'a",
    'Kiambu',
    'Turkana',
    'West Pokot',
    'Samburu',
    'Trans Nzoia',
    'Uasin Gishu',
    'Elgeyo/Marakwet',
    'Nandi',
    'Baringo',
    'Laikipia',
    'Nakuru',
    'Narok',
    'Kajiado',
    'Kericho',
    'Bomet',
    'Kakamega',
    'Vihiga',
    'Bungoma',
    'Busia',
    'Siaya',
    'Kisumu',
    'Homa Bay',
    'Migori',
    'Kisii',
    'Nyamira',
    'Nairobi City',
  ];

  ngOnInit(): void {
    // Initialization or data retrieval logic can be placed here
  }

  goToNextStep(): void {
    this.currentStep++;
  }

  goToPreviousStep(): void {
    this.currentStep--;
  }

  submitForm() {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 10000); // Hide the message after 3 seconds
  }
  personalDetailsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    nationalID: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', [Validators.pattern('^[+][0-9]{12}$'),Validators.required]),
    gender: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    disability: new FormControl('', [Validators.required]),
    county: new FormControl('', [Validators.required]),
    subCounty: new FormControl('', [Validators.required]),
  });
  educationDetailsForm=new FormGroup({
    education: new FormControl('', [Validators.required]),
    training: new FormControl('', [Validators.required]),
    myFile: new FormControl('', [Validators.required]),
    accept: new FormControl('', [Validators.required]),
    confirm: new FormControl('', [Validators.required]),
    agree: new FormControl('', [Validators.required]),
  });
}
