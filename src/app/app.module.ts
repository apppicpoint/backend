import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { SpotsComponent } from './spots/spots.component';
import { ReportsComponent } from './reports/reports.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditSpotComponent } from './edit-spot/edit-spot.component';
import { PublicationsComponent } from './publications/publications.component';
import { ShowReportComponent } from './show-report/show-report.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    SpotsComponent,
    ReportsComponent,
    EditUserComponent,
    EditSpotComponent,
    PublicationsComponent,
    ShowReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
