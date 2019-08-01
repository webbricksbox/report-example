import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { GoogleChartsModule } from 'angular-google-charts';  

import {
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, GoogleChartsModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
  exports: [CommonModule, GoogleChartsModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
})
export class CustomMaterialModule { }