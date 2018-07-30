import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BvoipNewTableDataSource } from './bvoip-new-table-datasource';

@Component({
  selector: 'app-bvoip-new-table',
  templateUrl: './bvoip-new-table.component.html',
  styleUrls: ['./bvoip-new-table.component.css']
})
export class BvoipNewTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: BvoipNewTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new BvoipNewTableDataSource(this.paginator, this.sort);
  }
}
