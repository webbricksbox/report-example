import { Component, OnInit } from '@angular/core';
import { IDataOptions, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { DataManager, WebApiAdaptor  } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public data: DataManager;
  public dataSource: IDataOptions;
  public width: string;

  constructor() { }
  ngOnInit() {
    this.data = new DataManager({
      url: 'https://bi.syncfusion.com/northwindservice/api/orders',
      adaptor: new WebApiAdaptor(),
      crossDomain: true
    });
    // console.info(this.data);
    this.dataSource = {
          // data: this.data,
          expandAll: false,
          rows: [{ name: 'ProductName', caption: 'Product Name' }],
          columns: [{ name: 'ShipCountry', caption: 'Ship Country' }, { name: 'ShipCity', caption: 'Ship City' }],
          formatSettings: [{ name: 'UnitPrice', format: 'C0' }],
          values: [{ name: 'Quantity' }, { name: 'UnitPrice', caption: 'Unit Price' }],
          filters: []
    };
    this.width = '800';
  }

}
