import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PivotViewModule, FieldListService, CalculatedFieldService  } from '@syncfusion/ej2-angular-pivotview';
import { GroupingBarService } from '@syncfusion/ej2-angular-pivotview';


import { CustomMaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ColumnChartComponent } from './examples/gcharts/column-chart/column-chart.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'App Component' } },
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
    PivotViewModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: false }
    ),
  ],
  providers: [
    GroupingBarService,
    FieldListService,
    CalculatedFieldService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
