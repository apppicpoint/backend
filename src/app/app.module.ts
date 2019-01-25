import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { SpotsComponent } from './spots/spots.component';
import { ReportsComponent } from './reports/reports.component';
import { EditSpotComponent } from './edit-spot/edit-spot.component';
import { PublicationsComponent } from './publications/publications.component';
import { ShowReportComponent } from './show-report/show-report.component';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { NewUserComponent } from './new-user/new-user.component';

// Rutas y endpoints
const routes: Route[] = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UsersComponent},
  {path: 'spots', component: SpotsComponent},
  {path: 'comments', component: SpotsComponent},
  {path: 'users/new', component: NewUserComponent},
  {path: 'users/:user', component: NewUserComponent},
  {path: 'spots/new', component: EditSpotComponent},
  {path: 'spots/:spot', component: EditSpotComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    SpotsComponent,
    ReportsComponent,
    EditSpotComponent,
    PublicationsComponent,
    ShowReportComponent,
    NavComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
