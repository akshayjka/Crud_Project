import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'sidebar', component:SideBarComponent},
  {path:'header', component:HeaderComponent},
  {path:'container', component:ContainerComponent},
  {path:'user', component:UserManagementComponent},
  {path:'user1', component:UserComponent},
  {path:'login', component:LoginComponent},
  {path:'login2', component:Login2Component},
  {path:'dashboard', component:DashboardComponent},
  {path:'register', component:RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
