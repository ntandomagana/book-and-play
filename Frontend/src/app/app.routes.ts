import { Routes } from '@angular/router';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, 
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
=======
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent}
    
>>>>>>> 5744ed940c77e8fa4defc13c18933992a12e7ee4
];
