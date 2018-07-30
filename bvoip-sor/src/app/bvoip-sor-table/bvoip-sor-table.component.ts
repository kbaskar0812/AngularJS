import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bvoip-sor-table',
  templateUrl: './bvoip-sor-table.component.html',
  styleUrls: ['./bvoip-sor-table.component.css']
})
export class BvoipSorTableComponent implements OnInit {

  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];


  ngOnInit() {
    this.httpService.get('./assets/birds.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
