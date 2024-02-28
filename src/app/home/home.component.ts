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
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  currentStep: number = 1;
  isDetailsFormValid: boolean = false;
  isEducationBackgroundFormValid: boolean = false;
  selectedCounty: string = ''; // This will store the selected county
  // myForm: FormGroup;

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
  goToStep3(){
    this.isDetailsFormValid = true;
    this.currentStep++;
  }
  goToPreviousStep(): void {
    this.currentStep--;
  }

  submitForm(): void {
    // Logic for form submission can be implemented here
  }
  personalDetailsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    nationalID: new FormControl('', [Validators.pattern('^[0-9]{8}$'),Validators.required]),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', [Validators.pattern('^[+][0-9]{12}$'),Validators.required]),
    gender: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    disability: new FormControl('', [Validators.required]),
    county: new FormControl('', [Validators.required]),
    subCounty: new FormControl('', [Validators.required]),
  });
}
