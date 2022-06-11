import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUserResponse, User } from '../../../../interface/User.interface'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnChanges {
  @Input() data: IUserResponse;

  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  displayedColumns: string[] = [
    'avatar_url',
    'login',
    'type',
  ];

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']?.currentValue != changes['data']?.previousValue) {
      this.dataSource.data = this.data.items;
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
