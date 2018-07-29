import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddinfoComponent } from './components/addinfo/addinfo.component';

import {PatientdataService} from './services/patientdata.service';

import {MatTableModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { VisualizationComponent } from './components/visualization/visualization.component';



@NgModule({
  declarations: [
    AppComponent,
    AddinfoComponent,
    VisualizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [PatientdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
