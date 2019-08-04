import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GamerApiService } from '../shared/gamer-api.service';
import { Gamer } from '../shared/gamer-model';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

  
const ELEMENT_DATA: Gamer[] = [
  {
      "id": 1,
      "userName": "user1",
      "game": "B",
      "difficulty": "HARD",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 700
  },
  {
      "id": 2,
      "userName": "user2",
      "game": "B",
      "difficulty": "EASY",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 1200
  },
  {
      "id": 3,
      "userName": "user3",
      "game": "D",
      "difficulty": "MEDIUM",
      "startTime": "2019-07-01T03:30:00",
      "endTime": "2019-07-02T05:30:00",
      "score": 800
  },
  {
      "id": 4,
      "userName": "user4",
      "game": "B",
      "difficulty": "EASY",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 1300
  },
  {
      "id": 5,
      "userName": "user5",
      "game": "A",
      "difficulty": "EASY",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 7000
  },
  {
      "id": 6,
      "userName": "user6",
      "game": "C",
      "difficulty": "MEDIUM",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 1900
  },
  {
      "id": 7,
      "userName": "user7",
      "game": "B",
      "difficulty": "EASY",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 1900
  },
  {
      "id": 8,
      "userName": "user8",
      "game": "A",
      "difficulty": "HARD",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 600
  },
  {
      "id": 9,
      "userName": "user9",
      "game": "D",
      "difficulty": "EASY",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 0
  },
  {
      "id": 10,
      "userName": "user10",
      "game": "A",
      "difficulty": "MEDIUM",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 700
  },
  {
      "id": 11,
      "userName": "user11",
      "game": "B",
      "difficulty": "EASY",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 100
  },
  {
      "id": 12,
      "userName": "user12",
      "game": "C",
      "difficulty": "EASY",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 1000
  },
  {
      "id": 13,
      "userName": "user13",
      "game": "B",
      "difficulty": "MEDIUM",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 760
  },
  {
      "id": 14,
      "userName": "user14",
      "game": "A",
      "difficulty": "EASY",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 780
  },
  {
      "id": 15,
      "userName": "user15",
      "game": "D",
      "difficulty": "MEDIUM",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 320
  },
  {
      "id": 16,
      "userName": "user16",
      "game": "C",
      "difficulty": "HARD",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 1230
  },
  {
      "id": 17,
      "userName": "user17",
      "game": "B",
      "difficulty": "MEDIUM",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 760
  },
  {
      "id": 18,
      "userName": "user18",
      "game": "A",
      "difficulty": "EASY",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 780
  },
  {
      "id": 19,
      "userName": "user19",
      "game": "D",
      "difficulty": "MEDIUM",
      "startTime": "2019-06-28T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 320
  },
  {
      "id": 20,
      "userName": "user20",
      "game": "C",
      "difficulty": "HARD",
      "startTime": "2019-06-29T03:30:00",
      "endTime": "2019-06-29T05:30:00",
      "score": 1230
  },
  {
      "id": 21,
      "userName": "user21",
      "game": "B",
      "difficulty": "MEDIUM",
      "startTime": "2019-06-26T03:30:00",
      "endTime": "2019-06-28T05:30:00",
      "score": 760
  },
  {
      "id": 22,
      "userName": "user22",
      "game": "A",
      "difficulty": "EASY",
      "startTime": "2019-06-29T03:30:00",
      "endTime": "2019-06-29T05:30:00",
      "score": 780
  },
  {
      "id": 23,
      "userName": "user23",
      "game": "D",
      "difficulty": "MEDIUM",
      "startTime": "2019-06-30T03:30:00",
      "endTime": "2019-06-30T06:30:00",
      "score": 320
  }
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource = new MatTableDataSource<Gamer>(ELEMENT_DATA);
  // dataSource = new MatTableDataSource<Gamer[]>();

  gamers: MatTableDataSource<Gamer[]>;
  array: Gamer;
  displayedColumns: string[] = ['id', 'username', 'game', 'difficulty', 'startTime', 'endTime', 'score'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(private _gamerService: GamerApiService) { }

  ngOnInit() {
    console.log("Load Data into Table");
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getGamerData();
  }

  getGamerData(): Gamer {
    this._gamerService.getAllGamers().subscribe( res => {
      this.array = res;
      console.log(this.array);
    });
    return this.array;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}