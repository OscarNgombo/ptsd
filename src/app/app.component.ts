import { Component} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from '@angular/common/http';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HttpClientModule,NavbarComponent, FooterComponent]
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'ptsd';
  parentString = 'DIRECTORATE FOR POST TRAINING AND SKILLS DEVELOPMENT';
}
function provideHttpClient() {
  throw new Error('Function not implemented.');
}

