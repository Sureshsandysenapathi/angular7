import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';

export const routes: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup-reactive', component: SignupReactiveComponent },
    { path: 'login-reactive', component: LoginReactiveComponent },
    { path: '', redirectTo: '/signup', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
 export class AppRoutingModule { }
