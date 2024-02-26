import { Component,Input, Output, EventEmitter} from '@angular/core';
import { AppComponent } from "../app.component";
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [AppComponent,NgClass]
})
export class NavbarComponent {
  isMenuHidden = true;

  @Input()
  receivedString!: string;

  // event emmitter that will be triggered when button is clicked
  @Output() navigateToHome: EventEmitter<any> = new EventEmitter();
  @Output() navigateToCGFP: EventEmitter<any> = new EventEmitter();

  toggleMenu(){
    this.isMenuHidden = !this.isMenuHidden;
  }

  onNavigateToHome(){
    this.navigateToHome.emit();
  }

  onNavigateToCGFP(){
    this.navigateToCGFP.emit();
  }
}
