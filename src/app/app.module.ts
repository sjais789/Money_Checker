///<reference path="../../node_modules/ts-node/dist/index.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientComponent } from './components/client/client.component';
import { AddclientComponent } from './components/addclient/addclient.component';
import { EditclientComponent } from './components/editclient/editclient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import {register} from 'ts-node/dist';
const  approutesdef: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientComponent,
    AddclientComponent,
    EditclientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutesdef)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
