import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RegisterComponent, LoginComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
