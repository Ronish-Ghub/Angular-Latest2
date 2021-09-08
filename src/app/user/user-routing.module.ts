import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import {HomeComponent} from './home/home.component'
import {LoginComponent}from '../user/login/login.component'
import { AuthGuardService } from './auth-guard.service';
const routes: Routes = [{ path: 'user', component: UserComponent },{ path:'home',component:HomeComponent,canActivate:[AuthGuardService]},{path:'login',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
