import { Component,Input, Output, EventEmitter} from '@angular/core';
import { AppComponent } from "../app.component";
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [AppComponent,NgClass,RouterLink]
})
export class NavbarComponent {
  isMenuHidden = true;

  @Input()
  receivedString!: string;



  toggleMenu(){
    this.isMenuHidden = !this.isMenuHidden;
  }

}
