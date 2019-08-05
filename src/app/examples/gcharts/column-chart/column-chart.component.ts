import { Component, OnInit } from '@angular/core';
// import data from '../../../../assets/userdata.json';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})

export class ColumnChartComponent implements OnInit {

  constructor() {
    // console.info('data', data);
   }

  title = 'Company Hiring Report';
  type = 'ColumnChart';
  data = [
     ['2014', 200],
     ['2015', 560],
     ['2016', 280],
     ['2017', 300],
     ['2018', 600]
  ];
  columnNames = [
    'Year',
    'India'
  ];
  options = {};
  width = 600;
  height = 400;

  ngOnInit() {
  }

}
