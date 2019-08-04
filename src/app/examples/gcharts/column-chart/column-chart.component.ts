import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  constructor() { }

  title = 'Game and Gamers Report';  
  type = 'ColumnChart';  
  data = [  
     ["A", 200],  
     ["B", 560],  
     ["C", 280],  
     ["D", 300],  
     ["E", 600]  
  ];  
  columnNames = ['Game', '# of Gamers'];  
  options = {};  
  width = 600;  
  height = 400;  
  
  ngOnInit() {
  }

}
