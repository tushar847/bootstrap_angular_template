import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.sass']
})
export class TableCompComponent implements OnInit {

  noOfRowsInTable = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
