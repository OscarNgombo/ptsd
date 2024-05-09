import { Component} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from "./footer/footer.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HttpClientModule,NavbarComponent, FooterComponent,HttpClientModule],
    providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: authInterceptor,
        multi: true
      }
    ],
})

export class AppComponent {
  constructor(private router: Router) {}

  title = 'ptsd';
  parentString = 'DIRECTORATE FOR POST TRAINING AND SKILLS DEVELOPMENT';
}
