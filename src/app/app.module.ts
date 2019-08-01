import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomMaterialModule } from "./core/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ColumnChartComponent } from './examples/gcharts/column-chart/column-chart.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent, data: { title: 'App Component' } },
  { path: 'home', component: HomeComponent, data: { title: 'Home Component' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard Component' } },
  { path: 'charts/column', component: ColumnChartComponent, data: { title: 'Reports Component' }}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    ColumnChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
