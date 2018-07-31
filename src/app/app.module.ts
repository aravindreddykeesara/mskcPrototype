import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddinfoComponent } from './components/addinfo/addinfo.component';

import {PatientdataService} from './services/patientdata.service';

import {
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatTabsModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {HttpClientModule} from '@angular/common/http';
import { PlotlyModule } from 'angular-plotly.js';

import { HttpModule } from '@angular/http';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { AboutComponent } from './components/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    AddinfoComponent,
    VisualizationComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    PlotlyModule,
    MatPaginatorModule
  ],
  providers: [PatientdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
